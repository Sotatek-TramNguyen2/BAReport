import { Sparkles, ChevronDown } from 'lucide-react';

export function DivisionMetrics() {
  const unreportedBAs = [
    { gex: 'GEX1', name: 'Nguyễn Văn H', email: 'h.nguyen@sotatek.com' },
    { gex: 'GEX2', name: 'Trần Thị I', email: 'i.tran@sotatek.com' },
    { gex: 'GEX3', name: 'Lê Văn J', email: 'j.le@sotatek.com' },
    { gex: 'GEX3', name: 'Phạm Thị K', email: 'k.pham@sotatek.com' },
    { gex: 'GEX4', name: 'Hoàng Văn L', email: 'l.hoang@sotatek.com' },
    { gex: 'GEX4', name: 'Đặng Thị M', email: 'm.dang@sotatek.com' },
  ];

  const gexProgress = [
    { gex: 'GEX1', reported: 6, total: 8, percentage: 75 },
    { gex: 'GEX2', reported: 7, total: 7, percentage: 100 },
    { gex: 'GEX3', reported: 5, total: 8, percentage: 63 },
    { gex: 'GEX4', reported: 6, total: 7, percentage: 86 },
  ];

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return '#16A34A';
    if (percentage >= 50) return '#EAB308';
    return '#DC2626';
  };

  return (
    <div className="space-y-4">
      {/* Summary Banner */}
      <div className="bg-gradient-to-r from-[#0F766E] to-[#134E4A] rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-white">
            <div className="text-sm mb-2">Tổng BA đã báo cáo</div>
            <div className="text-4xl font-bold">24/30</div>
          </div>
        </div>
        <button className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI Insight</span>
        </button>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-4 gap-4">
        {gexProgress.map((gex) => (
          <button
            key={gex.gex}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-left cursor-pointer"
          >
            <div className="font-bold text-sm text-gray-900 mb-2">{gex.gex}</div>
            <div className="text-xl font-bold text-gray-900 mb-3">
              {gex.reported}/{gex.total} BA
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${gex.percentage}%`,
                  backgroundColor: getProgressColor(gex.percentage),
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Caption */}
      <div className="text-xs italic text-gray-500 mt-2 mb-4">
        Click vào GEX để xem chi tiết báo cáo
      </div>

      {/* Unreported BAs Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-medium text-gray-900">BA chưa báo cáo</h3>
          <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
            <span className="text-xs text-gray-700">Tất cả GEX</span>
            <ChevronDown className="w-3 h-3 text-gray-500" />
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium">GEX</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium">Tên BA</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-600 font-medium">Email</th>
            </tr>
          </thead>
          <tbody>
            {unreportedBAs.map((ba, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-4 py-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {ba.gex}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{ba.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{ba.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
