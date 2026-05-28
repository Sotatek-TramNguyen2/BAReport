import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function BAAllocationTab() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGex, setSelectedGex] = useState('GEX 1');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const baNames = ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C', 'Phạm D', 'Hoàng E'];

  const baTotals = [80, 100, 50, 120, 100];

  const projects = [
    { name: 'Dự án Alpha', status: 'Development', efforts: [50, null, 20, 100, null] },
    { name: 'Dự án Beta', status: 'Design', efforts: [null, 40, 30, null, 30] },
    { name: 'Dự án Gamma', status: 'Development', efforts: [30, null, null, null, 70] },
    { name: 'Dự án Epsilon', status: 'Maintenance', efforts: [null, 60, null, 20, null] },
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

  const getTotalStyle = (total: number) => {
    if (total < 70) return 'bg-[#FEF9C3] text-[#EAB308]';
    if (total <= 100) return 'bg-[#DCFCE7] text-[#16A34A]';
    return 'bg-[#FEE2E2] text-[#DC2626]';
  };

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3">
          {/* GEX Filter */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">{selectedGex}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {/* Status Filter */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors min-w-[160px]">
            <span className="text-sm text-gray-700">
              {selectedStatuses.length === 0 ? 'Chọn trạng thái' : `${selectedStatuses.length} selected`}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 border border-[#D1D5DB] text-[#374151] bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Sửa
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
            >
              Lưu
            </button>
          )}
        </div>
      </div>

      {/* Matrix Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            {/* BA Names Row */}
            <tr>
              <th className="sticky left-0 z-20 bg-gray-50 px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[180px] border-r border-gray-200">
                Dự án
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[130px] border-r border-gray-200">
                Status
              </th>
              {baNames.map((ba, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium min-w-[100px] border-r border-gray-200"
                  title={ba}
                >
                  <div className="truncate">{ba}</div>
                </th>
              ))}
            </tr>
            {/* Tổng Row */}
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="sticky left-0 z-20 bg-gray-100 px-4 py-2 text-left text-xs uppercase text-gray-600 font-medium border-r border-gray-200">
                Tổng
              </th>
              <th className="px-4 py-2 bg-gray-100 border-r border-gray-200"></th>
              {baTotals.map((total, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-2 text-center text-sm font-bold border-r border-gray-200 ${getTotalStyle(
                    total
                  )}`}
                >
                  {total}%
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project, projectIdx) => (
              <tr key={projectIdx} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="sticky left-0 z-10 bg-white hover:bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-200">
                  {project.name}
                </td>
                <td className="px-4 py-3 border-r border-gray-200">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>
                {project.efforts.map((effort, effortIdx) => (
                  <td
                    key={effortIdx}
                    className="px-4 py-3 text-sm text-center text-gray-700 border-r border-gray-200"
                  >
                    {effort !== null ? (
                      isEditing ? (
                        <input
                          type="number"
                          value={effort}
                          className="w-16 px-2 py-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          min="0"
                          max="100"
                          step="5"
                        />
                      ) : (
                        <span>{effort}%</span>
                      )
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
