import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';

export function ProjectResourceOverview() {
  const projectData = [
    { name: 'Development', value: 10, percentage: 42, color: '#16A34A' },
    { name: 'Research/Presale', value: 4, percentage: 17, color: '#60A5FA' },
    { name: 'Design', value: 3, percentage: 12, color: '#A78BFA' },
    { name: 'Deployment', value: 3, percentage: 12, color: '#EAB308' },
    { name: 'Maintenance', value: 3, percentage: 12, color: '#6B7280' },
    { name: 'Pending', value: 1, percentage: 4, color: '#E5E7EB' },
  ];

  const totalProjects = projectData.reduce((sum, item) => sum + item.value, 0);

  const resourceData = [
    { gex: 'GEX 1', dungEffort: 63, dangRanh: 25, quaTai: 12 },
    { gex: 'GEX 2', dungEffort: 86, dangRanh: 14, quaTai: 0 },
    { gex: 'GEX 3', dungEffort: 50, dangRanh: 25, quaTai: 25 },
    { gex: 'GEX 4', dungEffort: 72, dangRanh: 14, quaTai: 14 },
  ];

  const handlePieClick = (data: any) => {
    console.log('Navigate to Weekly Report filtered by:', data.name);
  };

  const handleBarClick = (data: any, segment: string) => {
    console.log('Navigate to Resource Management filtered by:', segment, 'for', data.gex);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="text-xs text-gray-900 font-medium">
            {payload[0].name}: {payload[0].value} dự án
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {/* Left Card: Project Status Overview */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900">
              Tổng quan dự án theo trạng thái
            </h3>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
              <span className="text-xs text-gray-700">Tất cả GEX</span>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </button>
          </div>

          <div className="relative h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  onClick={handlePieClick}
                  cursor="pointer"
                >
                  {projectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-xs text-gray-500">Tổng dự án</div>
              <div className="text-2xl font-bold text-gray-900">{totalProjects}</div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
            {projectData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-gray-600">
                  {item.name} {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Resource Overview by GEX */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-sm font-bold text-gray-900 mb-4">
            Tổng quan nguồn lực theo GEX
          </h3>

          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={resourceData}
                layout="vertical"
                margin={{ top: 10, right: 10, left: 40, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} tickLine={false} stroke="#9CA3AF" />
                <YAxis
                  type="category"
                  dataKey="gex"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 13, fill: '#374151' }}
                />
                <Bar
                  dataKey="dungEffort"
                  stackId="a"
                  fill="#16A34A"
                  radius={0}
                  barSize={28}
                  onClick={(data) => handleBarClick(data, 'Đúng effort')}
                  cursor="pointer"
                />
                <Bar
                  dataKey="dangRanh"
                  stackId="a"
                  fill="#EAB308"
                  radius={0}
                  barSize={28}
                  onClick={(data) => handleBarClick(data, 'Đang rảnh')}
                  cursor="pointer"
                />
                <Bar
                  dataKey="quaTai"
                  stackId="a"
                  fill="#DC2626"
                  radius={[0, 4, 4, 0]}
                  barSize={28}
                  onClick={(data) => handleBarClick(data, 'Quá tải')}
                  cursor="pointer"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="text-xs text-gray-600">Đúng effort</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#EAB308]" />
              <span className="text-xs text-gray-600">Đang rảnh</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-xs text-gray-600">Quá tải</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
