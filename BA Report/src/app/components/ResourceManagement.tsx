import { useState } from 'react';
import { Plus, Search, ChevronDown, Pencil, Trash2, ChevronRight, ChevronDown as ChevronDownIcon, AlertCircle } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { ResourceModal } from './ResourceModal';

interface Resource {
  id: number;
  name: string;
  email: string;
  division: string;
  rank: string;
  noReport: boolean;
  note: string;
  totalEffort: number;
  effortStatus: 'Under-allocated' | 'OK' | 'Overloaded';
  projects: Array<{
    name: string;
    effort: number;
    role: 'Lead' | 'Member';
  }>;
}

interface ResourceManagementProps {
  onNavigate?: (page: string) => void;
}

export function ResourceManagement({ onNavigate }: ResourceManagementProps) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [deletingResource, setDeletingResource] = useState<Resource | null>(null);

  const resources: Resource[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@sotatek.com',
      division: 'GEX 1',
      rank: 'Middle',
      noReport: false,
      note: '',
      totalEffort: 80,
      effortStatus: 'OK',
      projects: [
        { name: 'Dự án Alpha', effort: 50, role: 'Lead' },
        { name: 'Dự án Gamma', effort: 30, role: 'Member' },
      ],
    },
    {
      id: 2,
      name: 'Trần Thị B',
      email: 'tranthib@sotatek.com',
      division: 'GEX 2',
      rank: 'Lead',
      noReport: false,
      note: '',
      totalEffort: 100,
      effortStatus: 'OK',
      projects: [
        { name: 'Dự án Beta', effort: 40, role: 'Lead' },
        { name: 'Dự án Epsilon', effort: 60, role: 'Member' },
      ],
    },
    {
      id: 3,
      name: 'Lê Văn C',
      email: 'levanc@sotatek.com',
      division: 'GEX 1',
      rank: 'Junior',
      noReport: false,
      note: '',
      totalEffort: 50,
      effortStatus: 'Under-allocated',
      projects: [
        { name: 'Dự án Alpha', effort: 20, role: 'Member' },
        { name: 'Dự án Beta', effort: 30, role: 'Member' },
      ],
    },
    {
      id: 4,
      name: 'Phạm D',
      email: 'phamd@sotatek.com',
      division: 'GEX 3',
      rank: 'Middle',
      noReport: false,
      note: '',
      totalEffort: 120,
      effortStatus: 'Overloaded',
      projects: [
        { name: 'Dự án Alpha', effort: 100, role: 'Lead' },
        { name: 'Dự án Epsilon', effort: 20, role: 'Member' },
      ],
    },
    {
      id: 5,
      name: 'Hoàng E',
      email: 'hoange@sotatek.com',
      division: 'GEX 4',
      rank: 'Fresher',
      noReport: true,
      note: 'Đang onboard',
      totalEffort: 0,
      effortStatus: 'Under-allocated',
      projects: [],
    },
    {
      id: 6,
      name: 'Vũ F',
      email: 'vuf@sotatek.com',
      division: 'GEX 2',
      rank: 'Senior',
      noReport: false,
      note: '',
      totalEffort: 95,
      effortStatus: 'OK',
      projects: [
        { name: 'Dự án Beta', effort: 30, role: 'Member' },
        { name: 'Dự án Gamma', effort: 65, role: 'Lead' },
      ],
    },
  ];

  const getEffortStatusStyle = (status: string) => {
    const styles: Record<string, string> = {
      'Under-allocated': 'bg-[#FEF9C3] text-[#854D0E]',
      'OK': 'bg-[#DCFCE7] text-[#166534]',
      'Overloaded': 'bg-[#FEE2E2] text-[#991B1B]',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  const getEffortColor = (effort: number) => {
    if (effort < 70) return 'text-[#EAB308]';
    if (effort <= 100) return 'text-[#16A34A]';
    return 'text-[#DC2626]';
  };

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleEdit = (resource: Resource) => {
    setEditingResource(resource);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingResource(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingResource(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activePage="Quản lý nhân sự" onNavigate={onNavigate} />

      {/* Main Content Area */}
      <div className="ml-[240px]">
        <div className="p-8 max-w-[1600px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">Quản lý nguồn lực</h1>
            <button
              onClick={handleAddNew}
              className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Thêm BA</span>
            </button>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm BA..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                  <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[180px]">
                    Tên
                  </th>
                  <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[200px]">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[80px]">
                    Division
                  </th>
                  <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[100px]">
                    Rank
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase text-gray-600 font-medium w-[130px]">
                    Không cần báo cáo
                  </th>
                  <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[180px]">
                    Ghi chú
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase text-gray-600 font-medium w-[100px]">
                    Tổng Effort
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase text-gray-600 font-medium w-[130px]">
                    Trạng thái Effort
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase text-gray-600 font-medium w-[80px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <>
                    <tr
                      key={resource.id}
                      className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                      onClick={() => toggleRow(resource.id)}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        <div className="flex items-center gap-2">
                          {expandedRow === resource.id ? (
                            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                          {resource.name}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{resource.email}</td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {resource.division}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                          {resource.rank}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <input
                          type="checkbox"
                          checked={resource.noReport}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 truncate" title={resource.note}>
                        {resource.note || '—'}
                      </td>
                      <td className={`px-4 py-3 text-sm text-center font-medium ${getEffortColor(resource.totalEffort)}`}>
                        {resource.totalEffort}%
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getEffortStatusStyle(
                            resource.effortStatus
                          )}`}
                        >
                          {resource.effortStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(resource);
                            }}
                            className="text-gray-500 hover:text-[#2563EB] transition-colors"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeletingResource(resource);
                            }}
                            className="text-gray-500 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Expandable Row */}
                    {expandedRow === resource.id && (
                      <tr>
                        <td colSpan={9} className="bg-[#F9FAFB] border-l-4 border-[#2563EB] p-4">
                          {resource.projects.length > 0 ? (
                            <table className="w-full">
                              <thead>
                                <tr className="text-left text-xs text-gray-600">
                                  <th className="pb-2">Dự án</th>
                                  <th className="pb-2 text-center w-32">Effort %</th>
                                  <th className="pb-2 text-center w-32">Role</th>
                                </tr>
                              </thead>
                              <tbody className="text-sm">
                                {resource.projects.map((project, idx) => (
                                  <tr key={idx} className="border-t border-gray-200">
                                    <td className="py-2 text-gray-900">{project.name}</td>
                                    <td className="py-2 text-center text-gray-700">{project.effort}%</td>
                                    <td className="py-2 text-center">
                                      <span
                                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                          project.role === 'Lead'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}
                                      >
                                        {project.role}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                                <tr className="border-t-2 border-gray-300 font-bold">
                                  <td className="py-2">Tổng</td>
                                  <td className="py-2 text-center">{resource.totalEffort}%</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          ) : (
                            <p className="text-sm text-[#9CA3AF] italic">Chưa được phân bổ dự án</p>
                          )}
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
              <span className="text-sm text-gray-600">1-6 of 30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <ResourceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        resource={editingResource}
      />

      {/* Delete Confirmation Modal */}
      {deletingResource && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-[400px] p-6 m-4">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-base font-bold text-gray-900 text-center mb-2">Xác nhận xóa</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Bạn có chắc chắn muốn xóa <span className="font-medium">{deletingResource.name}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeletingResource(null)}
                className="px-4 py-2 border border-[#D1D5DB] text-[#374151] bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  console.log('Deleting resource:', deletingResource.name);
                  setDeletingResource(null);
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
