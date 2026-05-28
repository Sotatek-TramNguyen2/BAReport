import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PresaleModalProps {
  isOpen: boolean;
  onClose: () => void;
  presale?: any;
}

export function PresaleModal({ isOpen, onClose, presale }: PresaleModalProps) {
  const [formData, setFormData] = useState({
    project: '',
    gex: '',
    domain: '',
    receivedDate: '',
    submissionDate: '',
    status: '',
    summary: '',
    baInCharge: [] as string[],
    pmInCharge: '',
    documentUrl: '',
  });

  const [requiredErrors, setRequiredErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (presale) {
      setFormData({
        project: presale.project || '',
        gex: presale.gex || '',
        domain: presale.domain || '',
        receivedDate: presale.receivedDate || '',
        submissionDate: presale.submissionDate || '',
        status: presale.status || '',
        summary: presale.summary || '',
        baInCharge: presale.baInCharge ? presale.baInCharge.split(', ') : [],
        pmInCharge: presale.pmInCharge || '',
        documentUrl: presale.documentUrl || '',
      });
    } else {
      setFormData({
        project: '',
        gex: '',
        domain: '',
        receivedDate: '',
        submissionDate: '',
        status: '',
        summary: '',
        baInCharge: [],
        pmInCharge: '',
        documentUrl: '',
      });
    }
    setRequiredErrors({});
  }, [presale, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    const errors: Record<string, boolean> = {};

    if (!formData.project) errors.project = true;
    if (!formData.gex) errors.gex = true;
    if (!formData.domain) errors.domain = true;
    if (!formData.receivedDate) errors.receivedDate = true;
    if (!formData.status) errors.status = true;
    if (formData.baInCharge.length === 0) errors.baInCharge = true;

    setRequiredErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    console.log('Saving presale:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-[#111827]">
            {presale ? 'Sửa Presale Report' : 'Thêm Presale Report'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Dự án */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dự án <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Nhập tên dự án presale"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.project ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {requiredErrors.project && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* GEX */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GEX <span className="text-red-600">*</span>
            </label>
            <select
              value={formData.gex}
              onChange={(e) => setFormData({ ...formData, gex: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.gex ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Chọn GEX</option>
              <option value="GEX 1">GEX 1</option>
              <option value="GEX 2">GEX 2</option>
              <option value="GEX 3">GEX 3</option>
              <option value="GEX 4">GEX 4</option>
            </select>
            {requiredErrors.gex && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* Domain */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Domain <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Nhập domain (VD: Fintech, E-commerce...)"
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.domain ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {requiredErrors.domain && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* Ngày nhận */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày nhận <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              value={formData.receivedDate}
              onChange={(e) => setFormData({ ...formData, receivedDate: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.receivedDate ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {requiredErrors.receivedDate && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* Ngày nộp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày nộp
            </label>
            <input
              type="date"
              value={formData.submissionDate}
              onChange={(e) => setFormData({ ...formData, submissionDate: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Trạng thái */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trạng thái <span className="text-red-600">*</span>
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.status ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Chọn trạng thái</option>
              <option value="Đang thực hiện">Đang thực hiện</option>
              <option value="Đã nộp">Đã nộp</option>
              <option value="Thất bại">Thất bại</option>
              <option value="Thắng">Thắng</option>
            </select>
            {requiredErrors.status && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* Tóm tắt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tóm tắt
            </label>
            <textarea
              rows={4}
              placeholder="Mô tả tóm tắt dự án presale..."
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* BA phụ trách */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              BA phụ trách <span className="text-red-600">*</span>
            </label>
            <select
              multiple
              value={formData.baInCharge}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, option => option.value);
                setFormData({ ...formData, baInCharge: selected });
              }}
              className={`w-full px-3 py-2 border ${
                requiredErrors.baInCharge ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]`}
            >
              <option value="Nguyễn Văn A">Nguyễn Văn A</option>
              <option value="Trần Thị B">Trần Thị B</option>
              <option value="Lê Văn C">Lê Văn C</option>
              <option value="Phạm D">Phạm D</option>
              <option value="Hoàng E">Hoàng E</option>
            </select>
            {formData.baInCharge.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.baInCharge.map((ba) => (
                  <span key={ba} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    {ba}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, baInCharge: formData.baInCharge.filter(b => b !== ba) })}
                      className="hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
            {requiredErrors.baInCharge && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* PM phụ trách */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PM phụ trách
            </label>
            <input
              type="text"
              placeholder="Nhập tên PM"
              value={formData.pmInCharge}
              onChange={(e) => setFormData({ ...formData, pmInCharge: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tài liệu (Drive) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tài liệu (Drive)
            </label>
            <input
              type="url"
              placeholder="Paste Google Drive link..."
              value={formData.documentUrl}
              onChange={(e) => setFormData({ ...formData, documentUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
