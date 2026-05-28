import { useState } from 'react';
import { Search, ChevronDown, Plus, Pencil, Trash2, ChevronRight, ChevronDown as ChevronDownIcon, AlertCircle } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { PresaleModal } from './PresaleModal';

interface ReportAIViewProps {
  onNavigate?: (page: string) => void;
}

export function ReportAIView({ onNavigate }: ReportAIViewProps) {
  const [activeTab, setActiveTab] = useState<'manual' | 'ai' | 'presale'>('manual');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [isPresaleModalOpen, setIsPresaleModalOpen] = useState(false);
  const [editingPresale, setEditingPresale] = useState<any>(null);
  const [deletingPresale, setDeletingPresale] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activePage="Xem báo cáo tuần" onNavigate={onNavigate} />

      <div className="ml-[240px]">
        <div className="p-8 max-w-[1600px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">Báo cáo & AI</h1>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">Tất cả GEX</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">W20 M05 (12/05 - 18/05/2025)</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('manual')}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === 'manual' ? 'text-[#2563EB]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Manually Weekly Report
                {activeTab === 'manual' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />}
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === 'ai' ? 'text-[#2563EB]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                AI Report
                {activeTab === 'ai' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />}
              </button>
              <button
                onClick={() => setActiveTab('presale')}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === 'presale' ? 'text-[#2563EB]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Presale Report
                {activeTab === 'presale' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'manual' && (
            <ManualReportTab expandedRow={expandedRow} setExpandedRow={setExpandedRow} />
          )}
          {activeTab === 'ai' && <AIReportTab />}
          {activeTab === 'presale' && (
            <PresaleReportTab
              onOpenModal={() => setIsPresaleModalOpen(true)}
              onEdit={(presale) => {
                setEditingPresale(presale);
                setIsPresaleModalOpen(true);
              }}
              onDelete={setDeletingPresale}
            />
          )}
        </div>
      </div>

      {/* Presale Modal */}
      <PresaleModal
        isOpen={isPresaleModalOpen}
        onClose={() => {
          setIsPresaleModalOpen(false);
          setEditingPresale(null);
        }}
        presale={editingPresale}
      />

      {/* Delete Confirmation */}
      {deletingPresale && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-[400px] p-6 m-4">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-base font-bold text-gray-900 text-center mb-2">Xác nhận xóa</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Bạn có chắc chắn muốn xóa <span className="font-medium">{deletingPresale.project}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeletingPresale(null)}
                className="px-4 py-2 border border-[#D1D5DB] text-[#374151] bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  console.log('Deleting presale:', deletingPresale.project);
                  setDeletingPresale(null);
                }}
                className="px-4 py-2 bg-[#DC2626] text-white rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition-colors"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ManualReportTab({ expandedRow, setExpandedRow }: any) {
  const reports = [
    {
      id: 1,
      project: 'Dự án Alpha',
      gex: 'GEX 1',
      status: 'Development',
      results: 'Hoàn thành review SRS module Payment...',
      plan: 'Bắt đầu wireframe module Notification...',
      risk: 'Chờ confirm requirement từ khách hàng',
      needHelp: 'Cần review SRS với senior BA',
    },
    {
      id: 2,
      project: 'Dự án Alpha',
      gex: 'GEX 1',
      status: 'Development',
      results: 'Đã update test case cho sprint 5...',
      plan: 'Review UAT feedback...',
      risk: '—',
      needHelp: 'Không',
    },
    {
      id: 3,
      project: 'Dự án Beta',
      gex: 'GEX 2',
      status: 'Design',
      results: 'Hoàn thành phân tích yêu cầu module...',
      plan: 'Viết SRS chi tiết...',
      risk: 'Delay response từ khách hàng',
      needHelp: 'Không',
    },
    {
      id: 4,
      project: 'Dự án Gamma',
      gex: 'GEX 1',
      status: 'Development',
      results: 'Hoàn thành wireframe 5 màn hình...',
      plan: 'Bắt đầu review với dev team...',
      risk: '—',
      needHelp: 'Không',
    },
  ];

  const getStatusStyle = (status: string) => {
    const styles: Record<string, string> = {
      'Research/Presale': 'bg-[#DBEAFE] text-[#1E40AF]',
      'Design': 'bg-[#EDE9FE] text-[#6B21A8]',
      'Development': 'bg-[#DCFCE7] text-[#166534]',
      'Deployment': 'bg-[#FEF9C3] text-[#854D0E]',
      'Maintenance': 'bg-[#F3F4F6] text-[#374151]',
      'Pending': 'bg-[#FEE2E2] text-[#991B1B]',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm dự án..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">GEX 1</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">Chọn trạng thái</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[160px]">Dự án</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[80px]">GEX</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[120px]">Trạng thái</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[200px]">Kết quả tuần qua</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[200px]">Kế hoạch tuần tới</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[180px]">Risk & Blocker</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[180px]">Cần hỗ trợ</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => {
              const isFirstInGroup = idx === 0 || reports[idx - 1].project !== report.project;
              const isExpanded = expandedRow === report.id;

              return (
                <tr
                  key={report.id}
                  onClick={() => setExpandedRow(isExpanded ? null : report.id)}
                  className={`border-b border-gray-100 cursor-pointer ${
                    !isFirstInGroup ? 'bg-[#F9FAFB]' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {isExpanded ? (
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                      {isFirstInGroup && <span className="text-sm font-medium text-gray-900">{report.project}</span>}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {isFirstInGroup && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {report.gex}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {isFirstInGroup && (
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(report.status)}`}>
                        {report.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <div className={isExpanded ? '' : 'line-clamp-2'}>{report.results}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <div className={isExpanded ? '' : 'line-clamp-2'}>{report.plan}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <div className={isExpanded ? '' : 'line-clamp-2'}>{report.risk}</div>
                  </td>
                  <td className={`px-4 py-3 text-sm ${report.needHelp === 'Không' ? 'text-[#6B7280]' : 'text-gray-700'}`}>
                    <div className={isExpanded ? '' : 'line-clamp-2'}>{report.needHelp}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
          <span className="text-sm text-gray-600">1-4 of 12</span>
        </div>
      </div>
    </div>
  );
}

function AIReportTab() {
  const selectedGex = 'GEX 1';

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm dự án..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <span className="text-sm text-gray-700">{selectedGex}</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Executive Summary */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#111827]">Tóm tắt báo cáo BA của {selectedGex}</h2>
          <span className="text-xs text-[#9CA3AF]">Cập nhật lúc 14:30 12/05/2025</span>
        </div>

        <div className="space-y-6">
          {/* Risk nghiêm trọng */}
          <div>
            <h3 className="text-sm font-bold text-[#DC2626] mb-2">🔥 Risk nghiêm trọng</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Dự án Alpha — Bug nghiêm trọng ảnh hưởng UAT, khách hàng phàn nàn</li>
              <li>Dự án Delta — Khách hàng phàn nàn về quality output</li>
            </ul>
          </div>

          {/* Có khả năng ảnh hưởng */}
          <div>
            <h3 className="text-sm font-bold text-[#854D0E] mb-2">⚠️ Có khả năng ảnh hưởng</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Dự án Beta — Delay response từ khách hàng, tiến độ chệch nhẹ</li>
              <li>Dự án Gamma — Miss 2 edge cases trong sprint, cần review lại spec</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dự án không báo cáo */}
      <div className="bg-white rounded-xl shadow-sm p-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-sm font-bold text-[#111827]">Dự án không báo cáo</h3>
          <span className="inline-block px-2 py-0.5 bg-[#FEE2E2] text-[#991B1B] rounded text-xs font-bold">
            2
          </span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-[#374151]">
            <span>•</span>
            <span className="font-medium">Dự án Epsilon</span>
            <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#374151] rounded-full text-xs font-medium">
              Maintenance
            </span>
          </li>
          <li className="flex items-center gap-2 text-sm text-[#374151]">
            <span>•</span>
            <span className="font-medium">Dự án Zeta</span>
            <span className="inline-block px-3 py-1 bg-[#FEF9C3] text-[#854D0E] rounded-full text-xs font-medium">
              Deployment
            </span>
          </li>
        </ul>
      </div>

      {/* AI Report per Project */}
      <AIProjectCard
        project="Dự án Alpha"
        bas="Nguyễn Văn A, Trần Thị B"
        summary="Tuần này team đã hoàn thành review SRS module Payment và update test case cho sprint 5. Kế hoạch tuần tới tập trung vào wireframe module Notification và review UAT feedback. Tuy nhiên, dự án đang gặp bug nghiêm trọng ảnh hưởng UAT và cần chờ confirm requirement từ khách hàng để tiến hành tiếp."
      />

      <AIProjectCard
        project="Dự án Beta"
        bas="Lê Văn C"
        summary="BA đã hoàn thành phân tích yêu cầu module báo cáo trong tuần vừa qua. Tuần tới sẽ tập trung viết SRS chi tiết. Hiện tại dự án đang bị delay do response từ khách hàng chậm, có thể ảnh hưởng đến timeline."
      />

      <AIProjectCard
        project="Dự án Gamma"
        bas="Hoàng E"
        summary="Đã hoàn thành wireframe cho 5 màn hình chính của dự án. Kế hoạch tuần tới là review wireframe với dev team và bắt đầu viết spec chi tiết. Dự án không có blocker, tiến độ đang đi đúng hướng."
      />
    </div>
  );
}

function AIProjectCard({ project, bas, summary }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="mb-4 pb-4 border-b border-gray-200">
        <h3 className="text-base font-bold text-gray-900">{project}</h3>
        <p className="text-sm text-gray-600 mt-1">BA phụ trách: {bas}</p>
      </div>

      <div>
        <div className="text-xs text-[#9CA3AF] mb-2">Tóm tắt AI</div>
        <p className="text-sm text-[#374151] leading-relaxed">{summary}</p>
      </div>
    </div>
  );
}

function PresaleReportTab({ onOpenModal, onEdit, onDelete }: any) {
  const presales = [
    {
      id: 1,
      project: 'Presale Project X',
      receivedDate: '01/05/2025',
      submissionDate: '—',
      status: 'In Progress',
      summary: 'Đề xuất giải pháp CRM cho khách hàng...',
      baInCharge: 'Lê Văn C',
      pmInCharge: 'Nguyễn PM A',
    },
    {
      id: 2,
      project: 'Presale Project Y',
      receivedDate: '20/04/2025',
      submissionDate: '05/05/2025',
      status: 'Submitted',
      summary: 'Hệ thống quản lý kho cho...',
      baInCharge: 'Phạm D',
      pmInCharge: 'Trần PM B',
    },
    {
      id: 3,
      project: 'Presale Project Z',
      receivedDate: '10/04/2025',
      submissionDate: '25/04/2025',
      status: 'Won',
      summary: 'Mobile app cho chuỗi bán lẻ...',
      baInCharge: 'Hoàng E',
      pmInCharge: 'Lê PM C',
    },
    {
      id: 4,
      project: 'Presale Project W',
      receivedDate: '05/04/2025',
      submissionDate: '20/04/2025',
      status: 'Lost',
      summary: 'Platform e-learning...',
      baInCharge: 'Nguyễn Văn A',
      pmInCharge: 'Phạm PM D',
    },
  ];

  const getStatusStyle = (status: string) => {
    const styles: Record<string, string> = {
      'In Progress': 'bg-[#DBEAFE] text-[#1E40AF]',
      'Submitted': 'bg-[#DCFCE7] text-[#166534]',
      'Lost': 'bg-[#FEE2E2] text-[#991B1B]',
      'Won': 'bg-[#FEF9C3] text-[#854D0E]',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm dự án presale..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={onOpenModal}
          className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">Thêm Presale</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[180px]">Project</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[110px]">Received Date</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[110px]">Submission Date</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[120px]">Status</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[220px]">Summary</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[130px]">BA in Charge</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[130px]">PM in Charge</th>
              <th className="px-4 py-3 text-center text-xs uppercase text-gray-600 font-medium w-[80px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {presales.map((presale) => (
              <tr key={presale.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{presale.project}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.receivedDate}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.submissionDate}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(presale.status)}`}>
                    {presale.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 truncate">{presale.summary}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.baInCharge}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.pmInCharge}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onEdit(presale)}
                      className="text-gray-500 hover:text-[#2563EB] transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(presale)}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
