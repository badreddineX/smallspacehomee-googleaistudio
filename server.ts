import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "SmallSpaceHome Strategy API" });
  });

  // AI CTA & Product Copy Generator endpoint
  app.post("/api/gemini/generate-cta", async (req, res) => {
    const { blogTitle, category, productTitle, targetAudience, format, ctaStyle } = req.body;

    const generateFallback = () => {
      const topic = blogTitle || 'Small Space Living';
      const product = productTitle || 'The Small Space Operating System';
      return {
        inlineHook: `When you are styling a tight space like this, standard furniture layouts rarely work. Having a clear architectural blueprint ensures every inch serves a distinct function without visual clutter.`,
        primaryCtaButton: `Get ${product.length > 25 ? 'The Complete System' : product}`,
        bulletBenefits: [
          `Clearance-verified spatial formulas tailored for ${targetAudience || 'small space dwellings'}`,
          `Instant 1-click duplicate into ${format || 'Notion & Google Sheets'} with printable checklists`,
          `Renter-safe layout templates that require zero drywall modifications`
        ],
        pinHook: `${topic}: How to Maximize Living Space & Furniture Flow (${product})`,
        productDescriptionSnippet: `Stop compromising on daily comfort. ${product} delivers the exact spatial blueprints, visual zoning maps, and storage formulas needed to transform compact apartments into serene sanctuaries.`
      };
    };

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          success: true,
          data: generateFallback(),
          notice: "Using local editorial template (API key not configured)"
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `You are the Lead Digital Product Strategist & Direct Response Copywriter for "SmallSpaceHome" (smallspacehome.ca / shop.smallspacehome.ca).
Brand Tone: Warm, editorial, practical, calm, modern minimalist, highly competent. Avoid hype, spammy SaaS verbs, or generic claims.

Generate tailored marketing assets connecting the blog post to the digital product:

Inputs:
- Blog Post / Topic: "${blogTitle || 'Living in a Small Studio Apartment'}"
- Content Category: "${category || 'Organization & Storage'}"
- Digital Product: "${productTitle || 'The Small Space Operating System'}"
- Product Format: "${format || 'Notion Workspace + Interactive PDF + Google Sheets'}"
- Target Audience: "${targetAudience || 'Renters & Condo Dwellers with under 700 sq ft'}"
- CTA Style / Placement: "${ctaStyle || 'Inline Article Callout + Exit Intent Hook + Pinterest Pin Copy'}"

Provide a structured JSON response with:
1. "inlineHook": A high-converting 2-3 sentence mid-article transition that organically points to the product.
2. "primaryCtaButton": Punchy 3-5 word button text (action-oriented, e.g. "Get The Studio Furniture Map").
3. "bulletBenefits": Array of 3 specific, non-generic bullet points describing what the reader gets.
4. "pinHook": Compelling Pinterest Pin title and 2-sentence description with search-friendly keywords.
5. "productDescriptionSnippet": A 3-sentence Fourthwall store product pitch highlighting the exact transformation.

Respond strictly with valid JSON.`;

      // Resilient model execution with fallback for 503 / high demand spikes
      const modelsToTry = ["gemini-3.7-flash", "gemini-3.1-flash-lite"];
      let lastError = null;

      for (const modelName of modelsToTry) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              responseMimeType: "application/json",
            },
          });

          const responseText = response.text || "{}";
          const parsed = JSON.parse(responseText);
          return res.json({ success: true, data: parsed, modelUsed: modelName });
        } catch (err: any) {
          lastError = err;
          console.warn(`Attempt with ${modelName} encountered: ${err.message || err}. Trying next option...`);
          // Small pause before retry
          await new Promise((r) => setTimeout(r, 400));
        }
      }

      // If all live API attempts faced 503 / demand spikes, gracefully return high-fidelity generated copy
      console.warn("Gemini API temporarily under high demand (503). Serving contextual editorial copy.");
      return res.json({
        success: true,
        data: generateFallback(),
        fallback: true
      });
    } catch (error: any) {
      console.error("Gemini generation handler error:", error);
      return res.json({
        success: true,
        data: generateFallback(),
        fallback: true
      });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SmallSpaceHome Strategy Server running on http://localhost:${PORT}`);
  });
}

startServer();
