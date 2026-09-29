"use client";

import React, { useState } from 'react';
import { 
  Database, FileText, Table2, Settings, Download, 
  RefreshCw, Shield, Sparkles, Lock, Layers, Link
} from 'lucide-react';

export default function HackDataDashboard() {
  const [activeWorkspace, setActiveWorkspace] = useState('tabular');
  const [rowCount, setRowCount] = useState(1000);
  const [seed, setSeed] = useState('42');
  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  const tabularPreview = [
    { id: '10231', name: 'Maria Chen', email: 'm.chen@example.com', signup: '2025-02-11', balance: '$482.10' },
    { id: '10232', name: 'Ahmed Raza', email: 'a.raza@example.com', signup: '2025-03-04', balance: '$129.55' },
    { id: '10233', name: 'Sofia Ivanova', email: 's.ivanova@example.com', signup: '2025-01-27', balance: '$918.42' }
  ];

  const invoicePreview = {
    billedTo: 'Northwind Supplies Ltd.',
    invoiceNo: '#INV-10432',
    items: [
      { desc: 'API access Pro tier', qty: 1, price: '$1,100.00', amount: '$1,100.00' },
      { desc: 'Onboarding support', qty: 1, price: '$140.00', amount: '$140.00' }
    ],
    total: '$1,240.00'
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-900 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-gray-800">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold tracking-wide">HackDataV2</span>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Workspaces</p>
          
          <button 
            onClick={() => setActiveWorkspace('tabular')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
              activeWorkspace === 'tabular' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <Table2 className="w-5 h-5" />
            <span className="font-medium text-sm">Tabular</span>
          </button>

          <button 
            onClick={() => setActiveWorkspace('relational')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
              activeWorkspace === 'relational' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <Database className="w-5 h-5" />
            <span className="font-medium text-sm">Relational</span>
          </button>

          <button 
            onClick={() => setActiveWorkspace('documents')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
              activeWorkspace === 'documents' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="font-medium text-sm">Documents</span>
          </button>
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white transition-colors w-full">
            <Settings className="w-5 h-5" />
            <span className="font-medium text-sm">System Config</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shrink-0">
          <h1 className="text-xl font-semibold text-gray-800 capitalize">
            {activeWorkspace} Data Generation
          </h1>
          <div className="flex items-center gap-4">
             <div className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                Engine Active
             </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Configuration Panel */}
          <div className="w-80 border-r border-gray-200 bg-white flex flex-col shrink-0">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-base font-semibold text-gray-900">Configuration</h2>
              <p className="text-xs text-gray-500 mt-1">Adjust schema and output rules</p>
            </div>
            
            <div className="p-5 space-y-6 flex-1 overflow-y-auto">
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 flex justify-between">
                  Row Count
                  <span className="text-blue-600 font-bold">{rowCount.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="100" max="10000" step="100"
                  value={rowCount}
                  onChange={(e) => setRowCount(parseInt(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Random Seed</label>
                <input 
                  type="text" 
                  value={seed}
                  onChange={(e) => setSeed(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Locale & Currency</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all cursor-pointer bg-white">
                  <option>en-US (USD)</option>
                  <option>en-GB (GBP)</option>
                  <option>de-DE (EUR)</option>
                </select>
              </div>

              <div className="pt-5 border-t border-gray-100 space-y-4">
                <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Privacy Rules
                </h3>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked={privacyEnabled} onChange={(e) => setPrivacyEnabled(e.target.checked)} className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Masking & hashing</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Differential noise</span>
                  </label>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 shadow-sm">
                <h3 className="text-sm font-medium text-blue-900 flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  AI Edge-case injection
                </h3>
                <p className="text-xs text-blue-700/80 leading-relaxed">
                  Proposes nulls, outliers, and rare patterns to cover more than the happy path.
                </p>
              </div>
            </div>
            
            <div className="p-5 border-t border-gray-200 bg-white">
              <button className="w-full bg-gray-900 hover:bg-black text-white font-medium py-2.5 rounded-md flex items-center justify-center gap-2 transition-all shadow-sm">
                <Download className="w-4 h-4" />
                Export Dataset
              </button>
            </div>
          </div>

          {/* Live Preview Canvas */}
          <div className="flex-1 flex flex-col bg-slate-50/50 h-full overflow-hidden relative">
            
            <div className="p-6 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Live Preview Canvas</h2>
                <p className="text-sm text-gray-500 mt-1">Generated output updates instantly based on configurations.</p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 transition-all shadow-sm">
                <RefreshCw className="w-4 h-4 text-gray-500" />
                Regenerate Sample
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6 flex justify-center pb-20">
              
              {/* Tabular View */}
              {activeWorkspace === 'tabular' && (
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-5xl overflow-hidden h-fit">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-600 font-medium">
                      <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Signup</th>
                        <th className="px-6 py-4 text-right">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {tabularPreview.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium">{row.id}</td>
                          <td className="px-6 py-4 text-gray-700">{row.name}</td>
                          <td className="px-6 py-4 text-gray-500">{privacyEnabled ? '••••••@example.com' : row.email}</td>
                          <td className="px-6 py-4 text-gray-500">{row.signup}</td>
                          <td className="px-6 py-4 font-medium text-gray-900 text-right">{row.balance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Relational View */}
              {activeWorkspace === 'relational' && (
                <div className="flex gap-12 items-start justify-center pt-8 w-full">
                  
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-64 overflow-hidden relative z-10">
                    <div className="bg-indigo-50 px-4 py-3 border-b border-indigo-100 flex items-center justify-between">
                      <h3 className="font-semibold text-indigo-900">Customers</h3>
                    </div>
                    <div className="p-4 space-y-2.5 text-sm text-gray-600">
                      <div className="flex items-center gap-2 font-medium text-gray-900"><Lock className="w-3.5 h-3.5 text-amber-500" /> customer_id (PK)</div>
                      <div className="pl-5 text-gray-500">• name</div>
                      <div className="pl-5 text-gray-500">• email</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-64 overflow-hidden">
                      <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
                        <h3 className="font-semibold text-blue-900">Orders</h3>
                      </div>
                      <div className="p-4 space-y-2.5 text-sm text-gray-600">
                        <div className="flex items-center gap-2 font-medium text-gray-900"><Lock className="w-3.5 h-3.5 text-amber-500" /> order_id (PK)</div>
                        <div className="flex items-center gap-2 pl-5 text-indigo-600"><Link className="w-3.5 h-3.5" /> customer_id (FK)</div>
                        <div className="pl-5 text-gray-500">• order_date</div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-64 overflow-hidden">
                      <div className="bg-emerald-50 px-4 py-3 border-b border-emerald-100">
                        <h3 className="font-semibold text-emerald-900">Order items</h3>
                      </div>
                      <div className="p-4 space-y-2.5 text-sm text-gray-600">
                        <div className="flex items-center gap-2 font-medium text-gray-900"><Lock className="w-3.5 h-3.5 text-amber-500" /> item_id (PK)</div>
                        <div className="flex items-center gap-2 pl-5 text-blue-600"><Link className="w-3.5 h-3.5" /> order_id (FK)</div>
                        <div className="pl-5 text-gray-500">• sku, qty</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Document View */}
              {activeWorkspace === 'documents' && (
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg w-full max-w-3xl p-10 h-fit">
                  <div className="flex justify-between items-start border-b border-gray-200 pb-8 mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-1">INVOICE</h1>
                      <p className="text-gray-500 font-medium">{invoicePreview.invoiceNo}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">FROM</p>
                      <p className="text-sm text-gray-600 mt-1">Synth Data Co.</p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <p className="text-xs font-bold text-gray-500 tracking-wider mb-2">BILLED TO</p>
                    <p className="text-base font-medium text-gray-900">{invoicePreview.billedTo}</p>
                  </div>

                  <table className="w-full text-sm text-left mb-8">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="px-4 py-3 rounded-l-lg font-medium">Item</th>
                        <th className="px-4 py-3 font-medium text-center">Qty</th>
                        <th className="px-4 py-3 font-medium text-right">Price</th>
                        <th className="px-4 py-3 rounded-r-lg font-medium text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {invoicePreview.items.map((item, i) => (
                        <tr key={i}>
                          <td className="px-4 py-4 text-gray-900 font-medium">{item.desc}</td>
                          <td className="px-4 py-4 text-gray-600 text-center">{item.qty}</td>
                          <td className="px-4 py-4 text-gray-600 text-right">{item.price}</td>
                          <td className="px-4 py-4 text-gray-900 text-right">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-end pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-8">
                      <span className="text-base font-medium text-gray-600">Total:</span>
                      <span className="text-2xl font-bold text-gray-900">{invoicePreview.total}</span>
                    </div>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}