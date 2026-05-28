import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { DivisionMetrics } from './components/DivisionMetrics';
import { MemberHealthCheck } from './components/MemberHealthCheck';
import { ProjectResourceOverview } from './components/ProjectResourceOverview';
import { RiskTracking } from './components/RiskTracking';
import { ProjectManagement } from './components/ProjectManagement';
import { ResourceManagement } from './components/ResourceManagement';
import { WeeklyReportSubmission } from './components/WeeklyReportSubmission';
import { ReportAIView } from './components/ReportAIView';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('Dashboard');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Show Login page if not logged in
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  if (currentPage === 'Quản lý dự án') {
    return <ProjectManagement onNavigate={handleNavigate} />;
  }

  if (currentPage === 'Quản lý nhân sự') {
    return <ResourceManagement onNavigate={handleNavigate} />;
  }

  if (currentPage === 'Tạo báo cáo tuần') {
    return <WeeklyReportSubmission onNavigate={handleNavigate} />;
  }

  if (currentPage === 'Xem báo cáo tuần') {
    return <ReportAIView onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activePage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <div className="ml-[240px]">
        <div className="p-8 max-w-[1600px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">Tổng quan</h1>
            <div className="flex items-center gap-3">
              {/* Team Dropdown */}
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">Team: BA</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {/* Week Dropdown */}
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">Tuần 20 (12/05/2025 - 18/05/2025)</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Section 1: Division Metrics */}
          <div className="mb-6">
            <DivisionMetrics />
          </div>

          {/* Section 2: Project & Resource Overview */}
          <div className="mb-6">
            <ProjectResourceOverview />
          </div>

          {/* Section 3: Member Health Check */}
          <div className="mb-6">
            <MemberHealthCheck />
          </div>

          {/* Section 4: Risk Tracking */}
          <div className="mb-6">
            <RiskTracking />
          </div>
        </div>
      </div>
    </div>
  );
}