import React, { useState, useMemo } from 'react';
import { 
  Table, 
  Search, 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown, 
  Download, 
  Copy, 
  Check, 
  FileSpreadsheet, 
  Code, 
  Eye, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle 
} from 'lucide-react';

interface CsvTableViewerProps {
  fileName: string;
  csvContent: string;
  badge?: string;
  description?: string;
}

export const CsvTableViewer: React.FC<CsvTableViewerProps> = ({
  fileName,
  csvContent,
  badge = 'Interactive Dataset',
  description,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumnIndex, setSortColumnIndex] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'table' | 'raw'>('table');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Parse CSV string safely handling quoted values
  const { headers, rows } = useMemo(() => {
    // Strip empty lines and leading comment lines (e.g. lines starting with '#')
    const rawLines = csvContent
      .trim()
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);
    
    // Find the first line that is not a comment line
    const nonCommentLines = rawLines.filter(l => !l.startsWith('#'));
    if (nonCommentLines.length === 0) return { headers: [], rows: [] };

    const parseLine = (line: string): string[] => {
      const result: string[] = [];
      let current = '';
      let inQuotes = false;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          result.push(current.trim().replace(/^"|"$/g, ''));
          current = '';
        } else {
          current += char;
        }
      }
      result.push(current.trim().replace(/^"|"$/g, ''));
      return result;
    };

    const parsedHeaders = parseLine(nonCommentLines[0]).map(h => h.replace(/_/g, ' '));
    const parsedRows = nonCommentLines.slice(1).map(line => parseLine(line));

    return { headers: parsedHeaders, rows: parsedRows };
  }, [csvContent]);

  // Filter and sort rows
  const processedRows = useMemo(() => {
    let result = [...rows];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(row => row.some(cell => cell.toLowerCase().includes(q)));
    }

    if (sortColumnIndex !== null) {
      result.sort((a, b) => {
        const valA = a[sortColumnIndex] || '';
        const valB = b[sortColumnIndex] || '';

        const numA = parseFloat(valA.replace(/[^0-9.-]+/g, ''));
        const numB = parseFloat(valB.replace(/[^0-9.-]+/g, ''));

        if (!isNaN(numA) && !isNaN(numB)) {
          return sortDirection === 'asc' ? numA - numB : numB - numA;
        }

        return sortDirection === 'asc' 
          ? valA.localeCompare(valB) 
          : valB.localeCompare(valA);
      });
    }

    return result;
  }, [rows, searchTerm, sortColumnIndex, sortDirection]);

  const handleSort = (index: number) => {
    if (sortColumnIndex === index) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else {
        setSortColumnIndex(null);
        setSortDirection('asc');
      }
    } else {
      setSortColumnIndex(index);
      setSortDirection('asc');
    }
  };

  const handleDownloadCsv = () => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    let cleanName = fileName;
    if (!cleanName.toLowerCase().endsWith('.csv')) {
      cleanName = cleanName.replace(/\.[a-z0-9]+$/i, '') + '.csv';
    }
    link.download = cleanName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyMarkdown = () => {
    if (headers.length === 0) return;
    const headerRow = `| ${headers.join(' | ')} |`;
    const separatorRow = `| ${headers.map(() => '---').join(' | ')} |`;
    const dataRows = processedRows.map(r => `| ${r.join(' | ')} |`).join('\n');
    const md = `${headerRow}\n${separatorRow}\n${dataRows}`;

    navigator.clipboard.writeText(md);
    setCopiedKey('md');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCopyTsv = () => {
    if (headers.length === 0) return;
    const tsv = [
      headers.join('\t'),
      ...processedRows.map(r => r.join('\t'))
    ].join('\n');

    navigator.clipboard.writeText(tsv);
    setCopiedKey('tsv');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const renderBadge = (value: string, headerName?: string) => {
    if (!headerName) {
      return <span>{value.replace(/_/g, ' ')}</span>;
    }

    const cleanHeader = headerName.toLowerCase().replace(/_/g, ' ');
    const isRiskCol = cleanHeader.includes('risk');
    const isStatusCol = cleanHeader.includes('status');
    const isDepositSafeCol = cleanHeader.includes('deposit safe') || cleanHeader.includes('rental deposit safe') || cleanHeader.includes('rental safe');
    const isReversibleCol = cleanHeader.includes('reversible') || cleanHeader.includes('zero damage');

    // Handle Yes / No Safety Columns (Bug 4)
    if (isDepositSafeCol || isReversibleCol) {
      const trimmed = value.trim().toLowerCase();
      if (trimmed === 'yes') {
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xs">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Yes
          </span>
        );
      }
      if (trimmed === 'no') {
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase bg-rose-100 text-rose-800 border border-rose-300 rounded-xs">
            <XCircle className="w-3 h-3 text-rose-600" />
            No
          </span>
        );
      }
    }

    // Handle Risk / Status badge columns (Bug 3)
    if (isRiskCol || isStatusCol) {
      const upper = value.toUpperCase();
      if (upper.includes('PASS') || upper.includes('APPROVED') || upper.includes('OPTIMAL') || upper.includes('EXCELLENT') || upper.includes('ZERO RISK') || upper.includes('LOW') || upper.includes('VERY LOW') || upper.includes('VERIFIED') || upper.includes('RECOMMENDED')) {
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xs">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            {value.replace(/_/g, ' ')}
          </span>
        );
      }
      if (upper.includes('WARN') || upper.includes('TIGHT') || upper.includes('MODERATE') || upper.includes('CAUTION') || upper.includes('MEDIUM')) {
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 rounded-xs">
            <AlertTriangle className="w-3 h-3 text-amber-700" />
            {value.replace(/_/g, ' ')}
          </span>
        );
      }
      if (upper.includes('FAIL') || upper.includes('CRITICAL') || upper.includes('HIGH') || upper.includes('REJECT')) {
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase bg-rose-100 text-rose-800 border border-rose-300 rounded-xs">
            <XCircle className="w-3 h-3 text-rose-600" />
            {value.replace(/_/g, ' ')}
          </span>
        );
      }
    }

    // Default for all other columns: plain text with zero keyword badge matching
    return <span>{value.replace(/_/g, ' ')}</span>;
  };

  return (
    <div className="bg-white border border-[#E5DFD5] shadow-xs rounded-xs overflow-hidden">
      
      {/* Table Control Header */}
      <div className="bg-[#FAF8F5] p-3.5 sm:p-4 border-b border-[#E5DFD5] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="p-1 bg-[#4A533E] text-white rounded-xs">
              <FileSpreadsheet className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono font-bold text-xs text-[#1C1917]">
              {fileName}
            </span>
            <span className="text-[9px] font-bold uppercase px-2 py-0.5 bg-[#4A533E] text-white rounded-xs">
              {badge}
            </span>
            <span className="text-[10px] font-semibold text-[#1C1917]/70 bg-white px-2 py-0.5 border border-[#E5DFD5]">
              {rows.length} Data Rows • {headers.length} Columns
            </span>
          </div>
          {description && (
            <p className="text-[11px] text-[#1C1917]/70">
              {description}
            </p>
          )}
        </div>

        {/* Action Controls & View Switcher */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="flex items-center bg-white border border-[#E5DFD5] p-0.5 rounded-xs">
            <button
              onClick={() => setViewMode('table')}
              className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                viewMode === 'table' ? 'bg-[#1C1917] text-white' : 'text-[#1C1917]/70 hover:text-[#1C1917]'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                viewMode === 'raw' ? 'bg-[#1C1917] text-white' : 'text-[#1C1917]/70 hover:text-[#1C1917]'
              }`}
            >
              <Code className="w-3 h-3" />
              <span>Raw CSV</span>
            </button>
          </div>

          <button
            onClick={handleCopyMarkdown}
            title="Copy as Markdown Table"
            className="px-2.5 py-1 bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider border border-[#E5DFD5] transition-colors cursor-pointer flex items-center gap-1"
          >
            {copiedKey === 'md' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>Copy MD</span>
          </button>

          <button
            onClick={handleCopyTsv}
            title="Copy for Google Sheets / Excel Paste"
            className="px-2.5 py-1 bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider border border-[#E5DFD5] transition-colors cursor-pointer flex items-center gap-1"
          >
            {copiedKey === 'tsv' ? <Check className="w-3 h-3 text-emerald-600" /> : <Layers className="w-3 h-3" />}
            <span>Copy for Sheets</span>
          </button>

          <button
            onClick={handleDownloadCsv}
            className="px-3 py-1 bg-[#4A533E] hover:bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 border border-[#4A533E] shadow-xs"
          >
            <Download className="w-3 h-3" />
            <span>Download .CSV</span>
          </button>
        </div>
      </div>

      {viewMode === 'table' ? (
        <div className="space-y-3 p-3.5 sm:p-4">
          
          {/* Quick Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#1C1917]/50" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search rows..."
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] pl-8 pr-2.5 py-1 text-xs font-medium focus:outline-hidden focus:border-[#4A533E]"
              />
            </div>

            <div className="text-[11px] text-[#1C1917]/70 flex items-center gap-2">
              <span>Showing <strong>{processedRows.length}</strong> of {rows.length} records</span>
              {sortColumnIndex !== null && (
                <button
                  onClick={() => {
                    setSortColumnIndex(null);
                    setSortDirection('asc');
                  }}
                  className="text-[10px] text-[#4A533E] underline cursor-pointer"
                >
                  Reset Sort
                </button>
              )}
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border border-[#E5DFD5] rounded-xs max-h-[380px] scrollbar-thin">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#1C1917] text-[#FAF8F5] sticky top-0 z-10">
                <tr>
                  <th className="py-2.5 px-3 font-mono text-[10px] text-stone-400 border-b border-black/20 w-8">
                    #
                  </th>
                  {headers.map((header, idx) => {
                    const isSorted = sortColumnIndex === idx;
                    return (
                      <th
                        key={idx}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSort(idx)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSort(idx);
                          }
                        }}
                        className="py-2.5 px-3 font-semibold uppercase tracking-wider text-[10px] border-b border-black/20 hover:bg-[#38402F] focus:bg-[#38402F] focus:outline-hidden cursor-pointer transition-colors whitespace-nowrap select-none"
                      >
                        <div className="flex items-center gap-1.5 justify-between">
                          <span>{header}</span>
                          <span className="text-stone-400">
                            {isSorted ? (
                              sortDirection === 'asc' ? (
                                <ArrowUp className="w-3 h-3 text-[#D9D3C7]" />
                              ) : (
                                <ArrowDown className="w-3 h-3 text-[#D9D3C7]" />
                              )
                            ) : (
                              <ArrowUpDown className="w-3 h-3 opacity-40 hover:opacity-100" />
                            )}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5]">
                {processedRows.length > 0 ? (
                  processedRows.map((row, rowIdx) => (
                    <tr 
                      key={rowIdx} 
                      className={`hover:bg-[#FAF8F5] transition-colors ${
                        rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/40'
                      }`}
                    >
                      <td className="py-2.5 px-3 font-mono text-[10px] text-[#1C1917]/40">
                        {rowIdx + 1}
                      </td>
                      {row.map((cell, cellIdx) => (
                        <td 
                          key={cellIdx} 
                          className="py-2.5 px-3 text-[#1C1917] font-medium whitespace-nowrap text-xs"
                        >
                          {renderBadge(cell, headers[cellIdx])}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td 
                      colSpan={headers.length + 1} 
                      className="py-8 text-center text-[#1C1917]/60 italic"
                    >
                      No records matched "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-[#1C1917]/60 pt-1 gap-1">
            <span>Click any column header to sort ascending/descending.</span>
            <span>Compatible with Microsoft Excel, Apple Numbers, Google Sheets & Notion Table imports.</span>
          </div>

        </div>
      ) : (
        <div className="p-3.5 sm:p-4 space-y-2">
          <pre className="bg-[#1C1917] text-[#FAF8F5] p-3.5 text-xs font-mono leading-relaxed overflow-x-auto max-h-[350px] border border-[#1C1917] select-all whitespace-pre">
            {csvContent}
          </pre>
          <p className="text-[10px] text-[#1C1917]/60">
            Raw RFC-4180 standard CSV formatted with UTF-8 encoding.
          </p>
        </div>
      )}

    </div>
  );
};
