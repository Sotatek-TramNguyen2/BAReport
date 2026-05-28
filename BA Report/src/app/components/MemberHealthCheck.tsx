import { Frown, Hand, Flame, ArrowRight } from 'lucide-react';

export function MemberHealthCheck() {
  const badWeekBAs = [
    { name: 'Nguyễn Văn A', gex: 'GEX2', rating: '1/5' },
    { name: 'Trần Thị B', gex: 'GEX3', rating: '2/5' },
  ];

  const needSupportBAs = [
    { name: 'Lê Văn C', gex: 'GEX1', project: 'Dự án Alpha', issue: 'Cần hỗ trợ review SRS' },
    { name: 'Phạm D', gex: 'GEX4', project: 'Dự án Delta', issue: 'Blocked bởi khách hàng' },
    { name: 'Hoàng E', gex: 'GEX2', project: 'Dự án Beta', issue: 'Cần pair với senior' },
  ];

  const overloadedBAs = [
    { name: 'Nguyễn F', gex: 'GEX1', effort: '130%' },
    { name: 'Trần G', gex: 'GEX3', effort: '115%' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Member Health Check</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bad Week Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Frown className="w-5 h-5 text-red-500" />
              <h3 className="font-medium text-gray-900">BA having a bad week</h3>
            </div>
            <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-bold">
              {badWeekBAs.length}
            </span>
          </div>
          <div className="p-4 space-y-3">
            {badWeekBAs.map((ba, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{ba.name}</div>
                  <div className="text-gray-600">
                    {ba.gex} — Rating: {ba.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Need Support Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hand className="w-5 h-5 text-orange-500" />
              <h3 className="font-medium text-gray-900">BA cần hỗ trợ</h3>
            </div>
            <span className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-bold">
              {needSupportBAs.length}
            </span>
          </div>
          <div className="p-4 space-y-3">
            {needSupportBAs.map((ba, idx) => (
              <button
                key={idx}
                className="w-full flex items-start gap-2 text-left hover:text-[#2563EB] transition-colors cursor-pointer group"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                <div className="text-sm flex-1">
                  <div className="font-medium text-gray-900 group-hover:text-[#2563EB]">
                    {ba.name}
                  </div>
                  <div className="text-gray-600 group-hover:text-[#2563EB]">
                    {ba.gex} — {ba.project} — {ba.issue}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2563EB] mt-1 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Overloaded Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-red-500" />
              <h3 className="font-medium text-gray-900">BA quá tải</h3>
            </div>
            <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-bold">
              {overloadedBAs.length}
            </span>
          </div>
          <div className="p-4 space-y-3">
            {overloadedBAs.map((ba, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{ba.name}</div>
                  <div className="text-gray-600">
                    {ba.gex} — <span className="text-red-600 font-medium">Effort: {ba.effort}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
