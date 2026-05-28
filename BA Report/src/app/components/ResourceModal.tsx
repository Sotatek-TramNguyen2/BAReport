import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource?: any;
}

export function ResourceModal({ isOpen, onClose, resource }: ResourceModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    division: '',
    rank: '',
    noReport: false,
    note: '',
  });

  const [emailError, setEmailError] = useState('');
  const [requiredErrors, setRequiredErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (resource) {
      setFormData({
        name: resource.name || '',
        email: resource.email || '',
        division: resource.division || '',
        rank: resource.rank || '',
        noReport: resource.noReport || false,
        note: resource.note || '',
      });
    } else {
      setFormData({
        name: '',
        email: '',
        division: '',
        rank: '',
        noReport: false,
        note: '',
      });
    }
    setEmailError('');
    setRequiredErrors({});
  }, [resource, isOpen]);

  if (!isOpen) return null;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });

    if (email && !email.endsWith('@sotatek.com')) {
      setEmailError('Email phải có đuôi @sotatek.com');
    } else {
      setEmailError('');
    }
  };

  const handleSave = () => {
    const errors: Record<string, boolean> = {};

    if (!formData.name) errors.name = true;
    if (!formData.email) errors.email = true;
    if (!formData.division) errors.division = true;
    if (!formData.rank) errors.rank = true;

    setRequiredErrors(errors);

    if (Object.keys(errors).length > 0 || emailError) {
      return;
    }

    console.log('Saving resource:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[560px] max-h-[90vh] overflow-y-auto m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-[#111827]">
            {resource ? 'Sửa BA' : 'Thêm BA'}
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
          {/* Tên */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Nhập họ tên"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {requiredErrors.name && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="email@sotatek.com"
              value={formData.email}
              onChange={handleEmailChange}
              className={`w-full px-3 py-2 border ${
                requiredErrors.email || emailError ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {requiredErrors.email && !emailError && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
            {emailError && (
              <p className="text-xs text-[#DC2626] mt-1">{emailError}</p>
            )}
          </div>

          {/* Division */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Division <span className="text-red-600">*</span>
            </label>
            <select
              value={formData.division}
              onChange={(e) => setFormData({ ...formData, division: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.division ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Chọn GEX</option>
              <option value="GEX 1">GEX 1</option>
              <option value="GEX 2">GEX 2</option>
              <option value="GEX 3">GEX 3</option>
              <option value="GEX 4">GEX 4</option>
            </select>
            {requiredErrors.division && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* Rank */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rank <span className="text-red-600">*</span>
            </label>
            <select
              value={formData.rank}
              onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
              className={`w-full px-3 py-2 border ${
                requiredErrors.rank ? 'border-red-500' : 'border-gray-300'
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Chọn rank</option>
              <option value="Intern">Intern</option>
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Middle">Middle</option>
              <option value="Senior">Senior</option>
              <option value="Lead">Lead</option>
              <option value="Manager">Manager</option>
            </select>
            {requiredErrors.rank && (
              <p className="text-xs text-[#DC2626] mt-1">Trường này là bắt buộc</p>
            )}
          </div>

          {/* Không cần báo cáo */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="noReport"
              checked={formData.noReport}
              onChange={(e) => setFormData({ ...formData, noReport: e.target.checked })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="noReport" className="text-sm font-medium text-gray-700">
              Không cần báo cáo
            </label>
          </div>

          {/* Ghi chú */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ghi chú
            </label>
            <textarea
              rows={2}
              placeholder="Nhập ghi chú..."
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
