import { LayoutDashboard, FolderKanban, Users, FileText, BarChart3, PresentationIcon, Download, Settings } from 'lucide-react';

interface SidebarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
}

export function Sidebar({ activePage = 'Dashboard', onNavigate }: SidebarProps) {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Tạo báo cáo tuần', icon: FileText },
    { name: 'Xem báo cáo tuần', icon: BarChart3 },
    { name: 'Quản lý dự án', icon: FolderKanban },
    { name: 'Quản lý nhân sự', icon: Users },
  ];

  return (
    <aside className="w-[240px] bg-[#1E293B] h-screen flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6">
        <div className="text-white font-bold text-xl">SotaTek</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.name === activePage;
          return (
            <button
              key={item.name}
              onClick={() => onNavigate?.(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-[#EFF6FF] text-[#2563EB]'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">BH</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm truncate">buihuong@sotatek.c...</div>
          </div>
          <button className="text-white/70 hover:text-white">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
