import { ChevronDown, ArrowRight } from 'lucide-react';

export function RiskTracking() {
  const projects = [
    {
      name: 'Dự án Alpha',
      gex: 'GEX1',
      severity: 'RED',
      riskFromBA: 'Bug nghiêm trọng ảnh hưởng UAT, khách hàng phàn nàn',
    },
    {
      name: 'Dự án Delta',
      gex: 'GEX3',
      severity: 'RED',
      riskFromBA: 'Quality output không đạt, cần rework sprint 3',
    },
    {
      name: 'Dự án Beta',
      gex: 'GEX2',
      severity: 'YELLOW',
      riskFromBA: 'Delay response từ khách hàng, tiến độ chệch nhẹ',
    },
    {
      name: 'Dự án Gamma',
      gex: 'GEX1',
      severity: 'YELLOW',
      riskFromBA: 'Miss 2 edge cases, cần review lại spec',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'RED':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'YELLOW':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getSeverityLabel = (severity: string) => {
    return severity === 'RED' ? 'Nghiêm trọng' : 'Rủi ro';
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Theo dõi rủi ro dự án</h2>
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
          <span className="text-xs text-gray-700">Tất cả GEX</span>
          <ChevronDown className="w-3 h-3 text-gray-500" />
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[200px]">
                Dự án
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[80px]">
                GEX
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium w-[150px]">
                Mức độ
              </th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium">
                Risk từ BA
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-[#F3F4F6] transition-colors h-[52px] cursor-pointer group"
              >
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {project.name}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {project.gex}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(
                      project.severity
                    )}`}
                  >
                    {project.severity === 'RED' ? '🔴' : '🟡'} {getSeverityLabel(project.severity)}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between">
                    <span>{project.riskFromBA}</span>
                    <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#2563EB] transition-colors flex-shrink-0 ml-2" />
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
