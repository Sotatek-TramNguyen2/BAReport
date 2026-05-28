import { useState, useEffect } from 'react';
import { ChevronDown, RotateCcw, Star, Check, Clock, Info, Search, Plus, Pencil, Trash2, AlertCircle } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { PresaleModal } from './PresaleModal';

interface WeeklyReportSubmissionProps {
  onNavigate?: (page: string) => void;
}

export function WeeklyReportSubmission({ onNavigate }: WeeklyReportSubmissionProps) {
  const [activeTab, setActiveTab] = useState<'project' | 'presale'>('project');
  const [weekRating, setWeekRating] = useState(0);
  const [capacityStatus, setCapacityStatus] = useState<'available' | 'full' | 'overloaded'>('available');
  const [needSupport, setNeedSupport] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showMergeToast, setShowMergeToast] = useState(false);
  const [isPresaleModalOpen, setIsPresaleModalOpen] = useState(false);
  const [editingPresale, setEditingPresale] = useState<any>(null);
  const [deletingPresale, setDeletingPresale] = useState<any>(null);

  const [projectEfforts, setProjectEfforts] = useState<Record<number, number>>({
    1: 50,
    2: 30,
  });

  const [effortAllocation, setEffortAllocation] = useState({
    project: 0,
    interview: 10,
    training: 5,
    presales: 5,
    other: 0,
  });

  // Auto-calculate % Dự án from project efforts
  useEffect(() => {
    const totalProjectEffort = Object.values(projectEfforts).reduce((sum, val) => sum + val, 0);
    setEffortAllocation((prev) => ({ ...prev, project: totalProjectEffort }));
  }, [projectEfforts]);

  const projects = [
    {
      id: 1,
      name: 'Dự án Alpha',
      status: 'Development',
      allocatedEffort: 50,
      actualEffort: 50,
      lastWeekResults: 'Hoàn thành review SRS module Payment...',
      nextWeekPlan: 'Bắt đầu wireframe module Notification...',
      riskBlocker: 'Chờ confirm requirement từ khách hàng',
      lastEditResults: { editor: 'Trần Thị B', time: '14:30 12/05' },
      lastEditPlan: null,
      lastEditRisk: { editor: 'Trần Thị B', time: '09:15 13/05' },
    },
    {
      id: 2,
      name: 'Dự án Gamma',
      status: 'Development',
      allocatedEffort: 30,
      actualEffort: 30,
      lastWeekResults: 'Hoàn thành test case cho sprint 5...',
      nextWeekPlan: 'Review UAT feedback...',
      riskBlocker: '',
      lastEditResults: null,
      lastEditPlan: { editor: 'Trần Thị B', time: '15:20 12/05' },
      lastEditRisk: null,
    },
  ];

  const handleProjectEffortChange = (projectId: number, value: number) => {
    setProjectEfforts((prev) => ({ ...prev, [projectId]: value }));
  };

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

  const totalAllocation = Object.values(effortAllocation).reduce((sum, val) => sum + val, 0);
  const isTotalValid = totalAllocation === 100;

  const getRatingLabel = (rating: number) => {
    const labels = [
      { text: 'Rất tệ', color: 'text-[#DC2626]' },
      { text: 'Tệ', color: 'text-[#EA580C]' },
      { text: 'Bình thường', color: 'text-[#EAB308]' },
      { text: 'Tốt', color: 'text-[#16A34A]' },
      { text: 'Rất tốt', color: 'text-[#166534]' },
    ];
    return labels[rating - 1] || { text: '', color: '' };
  };

  const handleSubmit = () => {
    console.log('Submitting report...');
    setSubmitted(true);

    // Simulate concurrent submission detection
    const hasConcurrentSubmit = Math.random() > 0.5;
    if (hasConcurrentSubmit) {
      setShowMergeToast(true);
      setTimeout(() => setShowMergeToast(false), 6000);
    }

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Sidebar activePage="Tạo báo cáo tuần" onNavigate={onNavigate} />

      {/* Main Content Area */}
      <div className="ml-[240px]">
        <div className="p-8 max-w-[1200px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">Báo cáo tuần</h1>
            {activeTab === 'project' ? (
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditingPresale(null);
                  setIsPresaleModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Thêm Presale</span>
              </button>
            )}
          </div>

          {/* Tab Bar */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('project')}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === 'project' ? 'text-[#2563EB]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Báo cáo Dự án
                {activeTab === 'project' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />}
              </button>
              <button
                onClick={() => setActiveTab('presale')}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === 'presale' ? 'text-[#2563EB]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Báo cáo Presale
                {activeTab === 'presale' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'project' ? (
            <>
              {/* Section 1: Thông tin chung */}
              <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
            <h2 className="text-base font-bold text-gray-900 mb-4">Thông tin chung</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="text"
                  value="nguyenvana@sotatek.com"
                  readOnly
                  className="w-full px-3 py-2 bg-[#F9FAFB] border border-gray-300 rounded-lg text-sm text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Division</label>
                <input
                  type="text"
                  value="GEX 1"
                  readOnly
                  className="w-full px-3 py-2 bg-[#F9FAFB] border border-gray-300 rounded-lg text-sm text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tuần báo cáo</label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>W20 M05 (12/05 - 18/05/2025)</option>
                    <option>W19 M05 (05/05 - 11/05/2025)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Báo cáo theo dự án */}
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm p-5 mb-4">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-bold text-gray-900">{project.name}</h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  Effort phân bổ: {project.allocatedEffort}%
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Effort thực tế (%) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    value={projectEfforts[project.id] || 0}
                    onChange={(e) => handleProjectEffortChange(project.id, Number(e.target.value))}
                    min="0"
                    max="100"
                    step="5"
                    className="w-[120px] px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kết quả tuần qua <span className="text-red-600">*</span>
                    <RotateCcw className="inline-block w-3 h-3 ml-1 text-gray-400" title="Tự động điền từ tuần trước" />
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả kết quả công việc tuần qua..."
                    value={project.lastWeekResults}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  {project.lastEditResults && (
                    <div className="flex items-center gap-1 mt-1 text-xs text-[#9CA3AF] italic">
                      <Clock className="w-3 h-3" />
                      <span>
                        Cập nhật lần cuối bởi <strong>{project.lastEditResults.editor}</strong> lúc{' '}
                        <strong>{project.lastEditResults.time}</strong>
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kế hoạch tuần tới <span className="text-red-600">*</span>
                    <RotateCcw className="inline-block w-3 h-3 ml-1 text-gray-400" title="Tự động điền từ tuần trước" />
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả kế hoạch tuần tới..."
                    value={project.nextWeekPlan}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  {project.lastEditPlan && (
                    <div className="flex items-center gap-1 mt-1 text-xs text-[#9CA3AF] italic">
                      <Clock className="w-3 h-3" />
                      <span>
                        Cập nhật lần cuối bởi <strong>{project.lastEditPlan.editor}</strong> lúc{' '}
                        <strong>{project.lastEditPlan.time}</strong>
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Risk & Blocker
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ghi chú rủi ro hoặc blocker (nếu có)..."
                    value={project.riskBlocker}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  {project.lastEditRisk && (
                    <div className="flex items-center gap-1 mt-1 text-xs text-[#9CA3AF] italic">
                      <Clock className="w-3 h-3" />
                      <span>
                        Cập nhật lần cuối bởi <strong>{project.lastEditRisk.editor}</strong> lúc{' '}
                        <strong>{project.lastEditRisk.time}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Section 3: Phân bổ nguồn lực */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="mb-4">
              <h2 className="text-base font-bold text-gray-900">Phân bổ nguồn lực</h2>
              <p className="text-xs text-gray-600 mt-1">Tổng phân bổ phải bằng 100%</p>
            </div>

            {/* Effort Allocation */}
            <div className="mb-6">
              <div className="flex items-start gap-4 mb-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">% Dự án</label>
                  <input
                    type="number"
                    value={effortAllocation.project}
                    disabled
                    className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-sm text-[#374151] cursor-not-allowed"
                    placeholder="0"
                  />
                  <p className="text-xs text-[#9CA3AF] italic mt-1">
                    Tự động tính từ effort thực tế các dự án
                  </p>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">% Interview</label>
                  <input
                    type="number"
                    value={effortAllocation.interview}
                    onChange={(e) =>
                      setEffortAllocation({ ...effortAllocation, interview: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">% Training</label>
                  <input
                    type="number"
                    value={effortAllocation.training}
                    onChange={(e) =>
                      setEffortAllocation({ ...effortAllocation, training: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">% Presales</label>
                  <input
                    type="number"
                    value={effortAllocation.presales}
                    onChange={(e) =>
                      setEffortAllocation({ ...effortAllocation, presales: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">% Khác</label>
                  <input
                    type="number"
                    value={effortAllocation.other}
                    onChange={(e) =>
                      setEffortAllocation({ ...effortAllocation, other: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div className="flex items-end">
                  <div
                    className={`px-4 py-2 rounded-lg font-bold text-sm ${
                      isTotalValid ? 'text-[#16A34A] bg-[#DCFCE7]' : 'text-[#DC2626] bg-[#FEE2E2]'
                    }`}
                  >
                    Tổng: {totalAllocation}%
                  </div>
                </div>
              </div>

              {effortAllocation.other > 0 && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Mô tả công việc khác..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Support Request */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <label className="text-sm font-medium text-gray-700">Cần hỗ trợ?</label>
                <button
                  onClick={() => setNeedSupport(!needSupport)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    needSupport ? 'bg-[#2563EB]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      needSupport ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              {needSupport && (
                <textarea
                  rows={3}
                  placeholder="Mô tả nội dung cần hỗ trợ..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              )}
            </div>

            {/* Week Rating */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Đánh giá tuần này
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setWeekRating(rating)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        rating <= weekRating
                          ? 'fill-[#EAB308] text-[#EAB308]'
                          : 'fill-[#E5E7EB] text-[#E5E7EB]'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {weekRating > 0 && (
                <p className={`text-sm mt-2 ${getRatingLabel(weekRating).color}`}>
                  {getRatingLabel(weekRating).text}
                </p>
              )}
            </div>

            {/* Capacity Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Khả năng tiếp nhận
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setCapacityStatus('available')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                    capacityStatus === 'available'
                      ? 'border-[#16A34A] bg-[#DCFCE7] text-[#166534]'
                      : 'border-[#E5E7EB] bg-white text-gray-700'
                  }`}
                >
                  <div className="w-3 h-3 rounded-full bg-[#16A34A]" />
                  <span className="text-sm font-medium">Available</span>
                </button>
                <button
                  onClick={() => setCapacityStatus('full')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                    capacityStatus === 'full'
                      ? 'border-[#EAB308] bg-[#FEF9C3] text-[#854D0E]'
                      : 'border-[#E5E7EB] bg-white text-gray-700'
                  }`}
                >
                  <div className="w-3 h-3 rounded-full bg-[#EAB308]" />
                  <span className="text-sm font-medium">Full tải</span>
                </button>
                <button
                  onClick={() => setCapacityStatus('overloaded')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                    capacityStatus === 'overloaded'
                      ? 'border-[#DC2626] bg-[#FEE2E2] text-[#991B1B]'
                      : 'border-[#E5E7EB] bg-white text-gray-700'
                  }`}
                >
                  <div className="w-3 h-3 rounded-full bg-[#DC2626]" />
                  <span className="text-sm font-medium">Quá tải</span>
                </button>
              </div>
            </div>
              </div>
            </>
          ) : (
            <PresaleReportTab
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

      {/* Delete Presale Confirmation */}
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

      {/* Sticky Footer - Only show for Project Report tab */}
      {activeTab === 'project' && (
        <div className="fixed bottom-0 left-[240px] right-0 bg-white border-t border-gray-200 px-6 py-4">
          <div className="max-w-[1200px] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Check className="w-4 h-4 text-green-600" />
              <span>Đã tự động lưu lúc 14:32</span>
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitted}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                submitted
                  ? 'bg-[#16A34A] text-white cursor-not-allowed'
                  : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
              }`}
            >
              {submitted ? (
                <>
                  Đã submit <Check className="inline-block w-4 h-4 ml-1" />
                </>
              ) : (
                'Submit báo cáo'
              )}
            </button>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {submitted && !showMergeToast && (
        <div className="fixed top-4 right-4 bg-[#DCFCE7] text-[#166534] px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">Đã submit báo cáo tuần thành công</span>
        </div>
      )}

      {/* Merge Info Toast */}
      {showMergeToast && (
        <div className="fixed top-4 right-4 bg-[#EFF6FF] border-l-4 border-[#2563EB] text-[#1E40AF] px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
          <Info className="w-5 h-5" />
          <span className="text-sm font-medium">
            Báo cáo đã được ghi nhận. Nội dung của bạn và Trần Thị B đều được lưu.
          </span>
        </div>
      )}
    </div>
  );
}

function PresaleReportTab({ onEdit, onDelete }: any) {
  const [showMyProjectsOnly, setShowMyProjectsOnly] = useState(false);

  const presales = [
    {
      id: 1,
      project: 'Presale Project X',
      gex: 'GEX 1',
      domain: 'Fintech',
      receivedDate: '01/05/2025',
      submissionDate: '—',
      status: 'Đang thực hiện',
      baInCharge: 'Lê Văn C, Phạm D',
      pmInCharge: 'Nguyễn PM A',
      documentUrl: 'https://drive.google.com/example1',
    },
    {
      id: 2,
      project: 'Presale Project Y',
      gex: 'GEX 2',
      domain: 'E-commerce',
      receivedDate: '20/04/2025',
      submissionDate: '05/05/2025',
      status: 'Đã nộp',
      baInCharge: 'Phạm D',
      pmInCharge: 'Trần PM B',
      documentUrl: 'https://drive.google.com/example2',
    },
    {
      id: 3,
      project: 'Presale Project Z',
      gex: 'GEX 3',
      domain: 'Retail',
      receivedDate: '10/04/2025',
      submissionDate: '25/04/2025',
      status: 'Thắng',
      baInCharge: 'Hoàng E',
      pmInCharge: 'Lê PM C',
      documentUrl: '',
    },
    {
      id: 4,
      project: 'Presale Project W',
      gex: 'GEX 1',
      domain: 'Education',
      receivedDate: '05/04/2025',
      submissionDate: '20/04/2025',
      status: 'Thất bại',
      baInCharge: 'Nguyễn Văn A',
      pmInCharge: 'Phạm PM D',
      documentUrl: 'https://drive.google.com/example3',
    },
  ];

  const getStatusStyle = (status: string) => {
    const styles: Record<string, string> = {
      'Đang thực hiện': 'bg-[#DBEAFE] text-[#1E40AF]',
      'Đã nộp': 'bg-[#DCFCE7] text-[#166534]',
      'Thất bại': 'bg-[#FEE2E2] text-[#991B1B]',
      'Thắng': 'bg-[#FEF9C3] text-[#854D0E]',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="myProjectsOnly"
            checked={showMyProjectsOnly}
            onChange={(e) => setShowMyProjectsOnly(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="myProjectsOnly" className="text-sm text-[#374151] cursor-pointer">
            Chỉ dự án của tôi
          </label>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">Tất cả GEX</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">Tất cả</span>
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
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[120px]">Domain</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[100px]">Ngày nhận</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[100px]">Ngày nộp</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[120px]">Trạng thái</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[150px]">BA phụ trách</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[130px]">PM phụ trách</th>
              <th className="px-4 py-3 text-center text-xs uppercase text-gray-600 font-medium w-[80px]">Tài liệu</th>
              <th className="px-4 py-3 text-center text-xs uppercase text-gray-600 font-medium w-[80px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {presales.map((presale) => (
              <tr key={presale.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{presale.project}</td>
                <td className="px-4 py-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {presale.gex}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.domain}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.receivedDate}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.submissionDate}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(presale.status)}`}>
                    {presale.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.baInCharge}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{presale.pmInCharge}</td>
                <td className="px-4 py-3 text-center">
                  {presale.documentUrl ? (
                    <a
                      href={presale.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#2563EB] transition-colors"
                      title="Xem tài liệu"
                    >
                      📎
                    </a>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
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

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
          <span className="text-sm text-gray-600">1-4 of 12</span>
        </div>
      </div>
    </div>
  );
}
