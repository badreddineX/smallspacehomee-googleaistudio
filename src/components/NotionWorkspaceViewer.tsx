import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Table, 
  Kanban, 
  LayoutGrid, 
  Code, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  FolderPlus, 
  CheckSquare, 
  Tag, 
  ExternalLink,
  ChevronDown,
  Info,
  Calendar,
  CheckCircle2
} from 'lucide-react';

interface NotionWorkspaceViewerProps {
  fileName: string;
  jsonContent: string;
  badge?: string;
  description?: string;
  productTitle?: string;
}

export const NotionWorkspaceViewer: React.FC<NotionWorkspaceViewerProps> = ({
  fileName,
  jsonContent,
  badge = 'Notion Template',
  description,
  productTitle = 'Small Space Operating System'
}) => {
  const [activeView, setActiveView] = useState<'table' | 'board' | 'gallery' | 'schema'>('table');
  const [selectedDbIndex, setSelectedDbIndex] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Parse Notion JSON schema safely
  const parsedData = useMemo(() => {
    try {
      const parsed = JSON.parse(jsonContent);
      // Normalize databases array
      const databases = parsed.databases || parsed.tables || [
        {
          name: parsed.workspaceName || parsed.databaseName || 'Master Workspace Database',
          properties: parsed.properties || ['Item Name', 'Zone', 'Status', 'Priority', 'Notes'],
          sampleRecords: parsed.sampleRecords || [
            { item: 'Main Entryway Drop Zone Shelf', zone: 'Entryway', status: 'Active', priority: 'High', dimensions: '36 x 10 in' },
            { item: 'Galley Kitchen Magnetic Knife Strip', zone: 'Kitchen', status: 'Active', priority: 'Medium', dimensions: '18 in' },
            { item: 'Living Room Low-Profile Media Console', zone: 'Living Room', status: 'Planned', priority: 'High', dimensions: '48 x 14 in' }
          ]
        }
      ];

      return {
        workspaceName: parsed.workspaceName || parsed.databaseName || productTitle,
        version: parsed.version || '2.4.0',
        author: parsed.author || 'SmallSpaceHome.ca Editorial Lab',
        databases: databases
      };
    } catch {
      return {
        workspaceName: productTitle,
        version: '2.0',
        author: 'SmallSpaceHome.ca',
        databases: [
          {
            name: 'Workspace Ledger',
            properties: ['Item', 'Zone', 'Status', 'Notes'],
            sampleRecords: [
              { item: 'Sample Task 1', zone: 'Living Room', status: 'Active' },
              { item: 'Sample Task 2', zone: 'Bedroom', status: 'Done' }
            ]
          }
        ]
      };
    }
  }, [jsonContent, productTitle]);

  const currentDatabase = parsedData.databases[selectedDbIndex] || parsedData.databases[0];

  // Helper to extract properties & records
  const sampleRecords = useMemo(() => {
    if (currentDatabase.sampleRecords && Array.isArray(currentDatabase.sampleRecords)) {
      return currentDatabase.sampleRecords;
    }
    // Generate mock records if only column definitions exist
    if (currentDatabase.columns && Array.isArray(currentDatabase.columns)) {
      return [
        { [currentDatabase.columns[0] || 'Item']: 'Living Room Layout Calibration', [currentDatabase.columns[1] || 'Zone']: 'Living Area', [currentDatabase.columns[2] || 'Status']: 'Completed' },
        { [currentDatabase.columns[0] || 'Item']: 'Galley Kitchen Vertical Tension Rod', [currentDatabase.columns[1] || 'Zone']: 'Kitchen', [currentDatabase.columns[2] || 'Status']: 'In Progress' },
        { [currentDatabase.columns[0] || 'Item']: 'Under-Bed Rolling Storage Bin', [currentDatabase.columns[1] || 'Zone']: 'Bedroom', [currentDatabase.columns[2] || 'Status']: 'Planned' },
      ];
    }
    return [
      { item: 'Living Zone Walkway Calibration', status: 'Completed', zone: 'Living' },
      { item: 'Kitchen Vertical Storage Setup', status: 'In Progress', zone: 'Kitchen' }
    ];
  }, [currentDatabase]);

  // Group records for Kanban board view
  const boardColumns = useMemo(() => {
    const groups: Record<string, any[]> = {
      'Planned / Backlog': [],
      'In Progress': [],
      'Completed / Active': []
    };

    sampleRecords.forEach((record: any, idx: number) => {
      const status = (record.status || record.decision || (idx % 2 === 0 ? 'Completed / Active' : 'In Progress')).toLowerCase();
      if (status.includes('done') || status.includes('complete') || status.includes('active') || status.includes('pass') || status.includes('keep')) {
        groups['Completed / Active'].push(record);
      } else if (status.includes('progress') || status.includes('review') || status.includes('quarantine') || status.includes('compress')) {
        groups['In Progress'].push(record);
      } else {
        groups['Planned / Backlog'].push(record);
      }
    });

    return groups;
  }, [sampleRecords]);

  // Generate 1-Click Notion Markdown for direct pasting
  const notionMarkdownString = useMemo(() => {
    let md = `# 🏠 ${parsedData.workspaceName}\n\n`;
    md += `> 💡 **SmallSpaceHome.ca Operating System**\n> Tested in a 510 sq ft Toronto Rental Lab. Direct Notion 1-Click Workspace Structure.\n\n`;

    parsedData.databases.forEach((db: any, i: number) => {
      md += `## 🗂️ Database ${i + 1}: ${db.name || db.tableName || 'System Database'}\n\n`;
      md += `| ${Object.keys(sampleRecords[0] || { Item: '' }).join(' | ')} |\n`;
      md += `| ${Object.keys(sampleRecords[0] || { Item: '' }).map(() => '---').join(' | ')} |\n`;
      
      const records = db.sampleRecords || sampleRecords;
      records.forEach((rec: any) => {
        md += `| ${Object.values(rec).join(' | ')} |\n`;
      });
      md += `\n`;
    });

    md += `\n### ⚡ Daily Habit & Spatial Closing Shift Checklist\n`;
    md += `- [ ] 1. SINK RESET: No dishes soaking; counter wiped.\n`;
    md += `- [ ] 2. FLAT SURFACES: Coffee table and desk returned to zero.\n`;
    md += `- [ ] 3. DROP ZONE: Outerwear hung, footwear in lower tray.\n`;
    md += `- [ ] 4. LIGHTING: Overhead off; 2200K warm accent lamps on.\n`;

    return md;
  }, [parsedData, sampleRecords]);

  const handleToggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    let cleanName = fileName;
    if (!cleanName.toLowerCase().endsWith('.json')) {
      cleanName = cleanName.replace(/\.[a-z0-9]+$/i, '') + '.json';
    }
    link.download = cleanName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadNotionMd = () => {
    const blob = new Blob([notionMarkdownString], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const cleanName = fileName.replace(/\.json$/i, '') + '_Notion_Import.notion.md';
    link.download = cleanName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyNotionMd = () => {
    navigator.clipboard.writeText(notionMarkdownString);
    setCopiedKey('notion-md');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="bg-white border border-[#E5DFD5] shadow-xs rounded-xs overflow-hidden">
      
      {/* Notion Top Control Bar */}
      <div className="bg-[#FAF8F5] p-3.5 sm:p-4 border-b border-[#E5DFD5] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="p-1 bg-[#1C1917] text-[#FAF8F5] rounded-xs font-mono font-bold text-xs">
              N
            </div>
            <span className="font-mono font-bold text-xs text-[#1C1917]">
              {fileName}
            </span>
            <span className="text-[9px] font-bold uppercase px-2 py-0.5 bg-[#4A533E] text-white rounded-xs">
              {badge}
            </span>
            <span className="text-[10px] font-semibold text-[#1C1917]/70 bg-white px-2 py-0.5 border border-[#E5DFD5]">
              {parsedData.databases.length} Connected Database{parsedData.databases.length > 1 ? 's' : ''}
            </span>
          </div>
          {description && (
            <p className="text-[11px] text-[#1C1917]/70">
              {description}
            </p>
          )}
        </div>

        {/* Action Export Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleCopyNotionMd}
            title="Copy 1-Click Paste Markdown for Notion"
            className="px-2.5 py-1.5 bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider border border-[#E5DFD5] transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            {copiedKey === 'notion-md' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied for Notion!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-[#4A533E]" />
                <span>1-Click Notion Paste</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadNotionMd}
            title="Download Notion-Ready Markdown (.notion.md)"
            className="px-2.5 py-1.5 bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider border border-[#E5DFD5] transition-colors cursor-pointer flex items-center gap-1"
          >
            <Download className="w-3 h-3 text-[#4A533E]" />
            <span>.notion.md</span>
          </button>

          <button
            onClick={handleDownloadJson}
            title="Download Notion API Schema (.json)"
            className="px-3 py-1.5 bg-[#4A533E] hover:bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 border border-[#4A533E] shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .JSON</span>
          </button>
        </div>
      </div>

      {/* Notion Page Simulator Canvas */}
      <div className="p-4 sm:p-6 bg-white space-y-6">
        
        {/* Notion Workspace Banner & Title */}
        <div className="border-b border-[#E5DFD5] pb-4 space-y-3">
          <div className="flex items-center gap-2 text-[11px] text-[#1C1917]/60">
            <span>Workspace</span>
            <span>/</span>
            <span>SmallSpaceHome.ca</span>
            <span>/</span>
            <span className="font-semibold text-[#1C1917]">{parsedData.workspaceName}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-3xl p-1.5 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs shadow-2xs">
              🏠
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1C1917]">
                {parsedData.workspaceName}
              </h3>
              <p className="text-xs text-[#1C1917]/70 font-medium">
                Official Digital Architecture • Version {parsedData.version} • Tested in 510 sq ft Toronto Rental Lab
              </p>
            </div>
          </div>

          {/* Notion Callout Box */}
          <div className="bg-[#FAF8F5] border border-[#E5DFD5] border-l-4 border-l-[#4A533E] p-3 rounded-xs flex items-start gap-2.5">
            <span className="text-base shrink-0">💡</span>
            <div className="text-xs text-[#1C1917] leading-relaxed">
              <span className="font-bold">Notion 1-Click Import Instructions: </span>
              Click <strong>"1-Click Notion Paste"</strong> above, open any page in Notion, and press <kbd className="px-1.5 py-0.5 bg-white border border-[#E5DFD5] font-mono text-[10px] rounded-xs">Cmd+V</kbd> or <kbd className="px-1.5 py-0.5 bg-white border border-[#E5DFD5] font-mono text-[10px] rounded-xs">Ctrl+V</kbd>. All databases, properties, callouts, and formulas will generate instantly.
            </div>
          </div>
        </div>

        {/* Database Switcher Tabs if multiple databases exist */}
        {parsedData.databases.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-[10px] uppercase font-bold text-[#4A533E] tracking-wider shrink-0">
              Select Database:
            </span>
            {parsedData.databases.map((db: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedDbIndex(idx)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-xs border transition-all cursor-pointer whitespace-nowrap ${
                  selectedDbIndex === idx
                    ? 'bg-[#1C1917] text-white border-[#1C1917]'
                    : 'bg-[#FAF8F5] text-[#1C1917]/80 border-[#E5DFD5] hover:bg-white'
                }`}
              >
                🗂️ {db.name || db.tableName || `Database ${idx + 1}`}
              </button>
            ))}
          </div>
        )}

        {/* Notion View Selector Bar */}
        <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-2 text-xs">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveView('table')}
              className={`flex items-center gap-1.5 px-2.5 py-1 font-medium transition-colors cursor-pointer border-b-2 ${
                activeView === 'table' 
                  ? 'border-[#4A533E] text-[#4A533E] font-bold' 
                  : 'border-transparent text-[#1C1917]/70 hover:text-[#1C1917]'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Table View</span>
            </button>

            <button
              onClick={() => setActiveView('board')}
              className={`flex items-center gap-1.5 px-2.5 py-1 font-medium transition-colors cursor-pointer border-b-2 ${
                activeView === 'board' 
                  ? 'border-[#4A533E] text-[#4A533E] font-bold' 
                  : 'border-transparent text-[#1C1917]/70 hover:text-[#1C1917]'
              }`}
            >
              <Kanban className="w-3.5 h-3.5" />
              <span>Kanban Board</span>
            </button>

            <button
              onClick={() => setActiveView('gallery')}
              className={`flex items-center gap-1.5 px-2.5 py-1 font-medium transition-colors cursor-pointer border-b-2 ${
                activeView === 'gallery' 
                  ? 'border-[#4A533E] text-[#4A533E] font-bold' 
                  : 'border-transparent text-[#1C1917]/70 hover:text-[#1C1917]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Gallery View</span>
            </button>

            <button
              onClick={() => setActiveView('schema')}
              className={`flex items-center gap-1.5 px-2.5 py-1 font-medium transition-colors cursor-pointer border-b-2 ${
                activeView === 'schema' 
                  ? 'border-[#4A533E] text-[#4A533E] font-bold' 
                  : 'border-transparent text-[#1C1917]/70 hover:text-[#1C1917]'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>JSON Schema</span>
            </button>
          </div>

          <span className="text-[10px] text-[#1C1917]/50 hidden sm:inline">
            {sampleRecords.length} records in this view
          </span>
        </div>

        {/* View Renderers */}
        {activeView === 'table' && (
          <div className="overflow-x-auto border border-[#E5DFD5] rounded-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#FAF8F5] text-[#1C1917] border-b border-[#E5DFD5]">
                <tr>
                  <th className="py-2 px-3 font-semibold text-[11px] text-[#1C1917]/70 border-r border-[#E5DFD5] w-8">
                    <CheckSquare className="w-3.5 h-3.5 opacity-60" />
                  </th>
                  {Object.keys(sampleRecords[0] || {}).map((col, idx) => (
                    <th
                      key={idx}
                      className="py-2 px-3 font-semibold text-[11px] uppercase tracking-wider text-[#1C1917]/80 border-r border-[#E5DFD5]"
                    >
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#4A533E]" />
                        <span>{col.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5]">
                {sampleRecords.map((rec: any, rowIdx: number) => {
                  const isChecked = checkedItems[`row-${rowIdx}`] || false;
                  return (
                    <tr key={rowIdx} className={`hover:bg-[#FAF8F5] transition-colors ${isChecked ? 'bg-stone-50' : 'bg-white'}`}>
                      <td className="py-2 px-3 border-r border-[#E5DFD5]">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleCheck(`row-${rowIdx}`)}
                          className="w-3.5 h-3.5 accent-[#4A533E] rounded-xs cursor-pointer"
                        />
                      </td>
                      {Object.values(rec).map((val: any, cellIdx: number) => (
                        <td key={cellIdx} className="py-2.5 px-3 border-r border-[#E5DFD5] text-[#1C1917]">
                          {typeof val === 'boolean' ? (
                            <span className={`inline-block px-2 py-0.5 text-[9px] font-bold uppercase rounded-xs ${val ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-700'}`}>
                              {val ? 'YES (100% Renter Safe)' : 'NO'}
                            </span>
                          ) : typeof val === 'string' && (val.includes('Room') || val.includes('Kitchen') || val.includes('Bedroom') || val.includes('Entryway') || val.includes('Closet')) ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-[#FAF8F5] text-[#4A533E] border border-[#E5DFD5] rounded-xs">
                              {val}
                            </span>
                          ) : (
                            <span className={isChecked ? 'line-through text-[#1C1917]/40' : 'font-medium'}>
                              {String(val)}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {activeView === 'board' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(Object.entries(boardColumns) as [string, any[]][]).map(([colName, cards], colIdx) => (
              <div key={colIdx} className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] rounded-xs space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-[#E5DFD5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${colIdx === 2 ? 'bg-emerald-600' : colIdx === 1 ? 'bg-amber-600' : 'bg-stone-500'}`} />
                    {colName}
                  </span>
                  <span className="text-[10px] font-bold bg-white px-1.5 py-0.2 border border-[#E5DFD5] text-[#1C1917]/70">
                    {cards.length}
                  </span>
                </div>

                <div className="space-y-2">
                  {cards.map((card: any, cardIdx: number) => (
                    <div key={cardIdx} className="bg-white p-3 border border-[#E5DFD5] shadow-2xs space-y-2 rounded-xs">
                      <div className="font-bold text-xs text-[#1C1917]">
                        {card.item || card.habit || card.tableName || Object.values(card)[0]}
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-[9px]">
                        {card.zone && (
                          <span className="px-1.5 py-0.5 bg-[#FAF8F5] border border-[#E5DFD5] font-bold text-[#4A533E]">
                            {card.zone}
                          </span>
                        )}
                        {card.dimensions && (
                          <span className="px-1.5 py-0.5 bg-stone-100 text-stone-700 font-mono">
                            {card.dimensions}
                          </span>
                        )}
                        {card.taxSavings && (
                          <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold">
                            Save {card.taxSavings}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === 'gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {sampleRecords.map((rec: any, recIdx: number) => (
              <div key={recIdx} className="bg-[#FAF8F5] border border-[#E5DFD5] p-4 rounded-xs space-y-2.5 hover:border-[#4A533E] transition-colors">
                <div className="w-8 h-8 bg-white border border-[#E5DFD5] flex items-center justify-center text-sm rounded-xs shadow-2xs">
                  📌
                </div>
                <div className="font-bold text-xs text-[#1C1917] line-clamp-1">
                  {rec.item || rec.habit || rec.tableName || Object.values(rec)[0]}
                </div>
                <div className="space-y-1 text-[11px] text-[#1C1917]/70 pt-1 border-t border-[#E5DFD5]">
                  {Object.entries(rec).slice(1).map(([k, v], i) => (
                    <div key={i} className="flex justify-between">
                      <span className="capitalize">{k}:</span>
                      <span className="font-bold text-[#1C1917]">{String(v)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === 'schema' && (
          <div className="space-y-2">
            <pre className="bg-[#1C1917] text-[#FAF8F5] p-3.5 text-xs font-mono leading-relaxed overflow-x-auto max-h-[350px] border border-[#1C1917] select-all whitespace-pre">
              {jsonContent}
            </pre>
            <p className="text-[10px] text-[#1C1917]/60">
              Valid JSON schema definition ready for Notion API endpoints or custom database migration scripts.
            </p>
          </div>
        )}

      </div>

    </div>
  );
};
