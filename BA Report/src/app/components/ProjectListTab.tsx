import { useState } from 'react';
import { Search, Pencil, Trash2, ChevronDown, ArrowUpDown, ArrowUp, ArrowDown, AlertCircle } from 'lucide-react';
import { ProjectEditModal } from './ProjectEditModal';

export function ProjectListTab() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [sortStartDate, setSortStartDate] = useState<'none' | 'asc' | 'desc'>('none');
  const [sortEndDate, setSortEndDate] = useState<'none' | 'asc' | 'desc'>('none');
  const [editingProject, setEditingProject] = useState<any>(null);
  const [deletingProject, setDeletingProject] = useState<any>(null);
  const projects = [
    {
      name: 'Dự án Alpha',
      division: 'GEX 1',
      contractType: 'ODC - T&M',
      status: 'Development',
      startDate: '01/03/2026',
      endDate: '30/06/2026',
      country: 'Japan',
      baCount: 3,
    },
    {
      name: 'Dự án Beta',
      division: 'GEX 2',
      contractType: 'Fixed Price',
      status: 'Design',
      startDate: '15/04/2026',
      endDate: '15/07/2026',
      country: 'Singapore',
      baCount: 2,
    },
    {
      name: 'Dự án Gamma',
      division: 'GEX 1',
      contractType: 'ODC - T&M',
      status: 'Development',
      startDate: '01/01/2026',
      endDate: '30/04/2026',
      country: 'Korea',
      baCount: 2,
    },
    {
      name: 'Dự án Delta',
      division: 'GEX 3',
      contractType: 'Fixed Price',
      status: 'Research/Presale',
      startDate: '01/05/2026',
      endDate: '—',
      country: 'Vietnam',
      baCount: 1,
    },
    {
      name: 'Dự án Epsilon',
      division: 'GEX 4',
      contractType: 'ODC - T&M',
      status: 'Maintenance',
      startDate: '01/06/2025',
      endDate: '01/06/2026',
      country: 'Japan',
      baCount: 2,
    },
    {
      name: 'Dự án Zeta',
      division: 'GEX 2',
      contractType: 'ODC - T&M',
      status: 'Deployment',
      startDate: '01/02/2026',
      endDate: '30/05/2026',
      country: 'USA',
      baCount: 3,
    },
  ];

  const statusOptions = ['Research/Presale', 'Design', 'Development', 'Deployment', 'Maintenance', 'Pending'];

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

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const handleSortStartDate = () => {
    if (sortStartDate === 'none') setSortStartDate('asc');
    else if (sortStartDate === 'asc') setSortStartDate('desc');
    else setSortStartDate('none');
    setSortEndDate('none');
  };

  const handleSortEndDate = () => {
    if (sortEndDate === 'none') setSortEndDate('asc');
    else if (sortEndDate === 'asc') setSortEndDate('desc');
    else setSortEndDate('none');
    setSortStartDate('none');
  };

  const getSortIcon = (sortState: 'none' | 'asc' | 'desc') => {
    if (sortState === 'none') return <ArrowUpDown className="w-4 h-4 text-[#9CA3AF]" />;
    if (sortState === 'asc') return <ArrowUp className="w-4 h-4 text-[#2563EB]" />;
    return <ArrowDown className="w-4 h-4 text-[#2563EB]" />;
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
            <span className="text-sm text-gray-700">Tất cả GEX</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {/* Multi-select Status Filter */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors min-w-[160px]">
              <span className="text-sm text-gray-700">
                {selectedStatuses.length === 0 ? 'Tất cả' : `${selectedStatuses.length} selected`}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Contract Type Filter */}
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
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[200px]">
                Tên dự án
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[80px]">
                Division
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[120px]">
                Contract Type
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[130px]">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[100px]">
                <button
                  onClick={handleSortStartDate}
                  className="flex items-center gap-2 hover:text-gray-900"
                >
                  Start Date
                  {getSortIcon(sortStartDate)}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[100px]">
                <button
                  onClick={handleSortEndDate}
                  className="flex items-center gap-2 hover:text-gray-900"
                >
                  End Date
                  {getSortIcon(sortEndDate)}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[100px]">
                Country
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[60px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#2563EB]">
                  {project.name}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {project.division}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{project.contractType}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{project.startDate}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{project.endDate}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{project.country}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="text-gray-500 hover:text-[#2563EB] transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeletingProject(project)}
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
          <span className="text-sm text-gray-600">1-6 of 24</span>
        </div>
      </div>

      {/* Edit Modal */}
      <ProjectEditModal
        isOpen={!!editingProject}
        onClose={() => setEditingProject(null)}
        project={editingProject}
      />

      {/* Delete Confirmation Modal */}
      {deletingProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-[400px] p-6 m-4">
            {/* Warning Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-gray-900 text-center mb-2">
              Xác nhận xóa
            </h3>

            {/* Message */}
            <p className="text-sm text-gray-600 text-center mb-6">
              Bạn có chắc chắn muốn xóa <span className="font-medium">{deletingProject.name}</span>? Hành động này không thể hoàn tác.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeletingProject(null)}
                className="px-4 py-2 border border-[#D1D5DB] text-[#374151] bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  console.log('Deleting project:', deletingProject.name);
                  setDeletingProject(null);
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
