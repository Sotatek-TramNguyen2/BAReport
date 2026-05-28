import { X, Plus } from 'lucide-react';

interface ProjectEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: any;
}

export function ProjectEditModal({ isOpen, onClose, project }: ProjectEditModalProps) {
  if (!isOpen) return null;

  const baMembers: any[] = [];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-[#111827]">
            {project ? 'Sửa dự án' : 'Thêm dự án'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Section A: Thông tin chung */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Thông tin chung</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Tên dự án - Full width */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên dự án <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên dự án"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Division */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Division <span className="text-red-600">*</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Chọn GEX</option>
                  <option>GEX 1</option>
                  <option>GEX 2</option>
                  <option>GEX 3</option>
                  <option>GEX 4</option>
                </select>
              </div>

              {/* Contract Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contract Type <span className="text-red-600">*</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Chọn loại hợp đồng</option>
                  <option>ODC - T&M</option>
                  <option>Fixed Price</option>
                  <option>ODC - Fixed Price</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status <span className="text-red-600">*</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Chọn trạng thái</option>
                  <option>Research/Presale</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>Deployment</option>
                  <option>Maintenance</option>
                  <option>Pending</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Nhập quốc gia"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Summary - Full width */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Summary
                </label>
                <textarea
                  rows={3}
                  placeholder="Mô tả tóm tắt dự án..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section B: BA tham gia */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">BA tham gia</h3>
              <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm">
                <Plus className="w-4 h-4" />
                <span>Thêm BA</span>
              </button>
            </div>

            {/* BA Table or Empty State */}
            {baMembers.length === 0 ? (
              <div className="border border-dashed border-[#E5E7EB] rounded-lg py-8 text-center">
                <p className="text-sm text-[#9CA3AF]">Không có dữ liệu</p>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs uppercase text-gray-600 font-medium">
                        Tên BA
                      </th>
                      <th className="px-4 py-2 text-left text-xs uppercase text-gray-600 font-medium">
                        Email
                      </th>
                      <th className="px-4 py-2 text-left text-xs uppercase text-gray-600 font-medium w-24">
                        Effort %
                      </th>
                      <th className="px-4 py-2 text-center text-xs uppercase text-gray-600 font-medium w-20">
                        Is Lead
                      </th>
                      <th className="px-4 py-2 text-center text-xs uppercase text-gray-600 font-medium w-16">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {baMembers.map((ba, idx) => (
                      <tr key={idx} className="border-t border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-900">{ba.name}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{ba.email}</td>
                        <td className="px-4 py-2">
                          <input
                            type="number"
                            value={ba.effort}
                            min="0"
                            max="100"
                            step="5"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </td>
                        <td className="px-4 py-2 text-center">
                          <input
                            type="checkbox"
                            checked={ba.isLead}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </td>
                        <td className="px-4 py-2 text-center">
                          <button className="text-gray-400 hover:text-red-600 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8] transition-colors">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
