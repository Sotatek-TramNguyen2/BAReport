import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { ProjectListTab } from './ProjectListTab';
import { BAAllocationTab } from './BAAllocationTab';
import { ProjectEditModal } from './ProjectEditModal';

interface ProjectManagementProps {
  onNavigate?: (page: string) => void;
}

export function ProjectManagement({ onNavigate }: ProjectManagementProps) {
  const [activeTab, setActiveTab] = useState<'list' | 'allocation'>('list');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activePage="Quản lý dự án" onNavigate={onNavigate} />

      {/* Main Content Area */}
      <div className="ml-[240px]">
        <div className="p-8 max-w-[1600px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900">Quản lý dự án</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Thêm dự án</span>
            </button>
          </div>

          {/* Tab Bar */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('list')}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === 'list'
                    ? 'text-[#2563EB]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                List dự án
                {activeTab === 'list' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('allocation')}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === 'allocation'
                    ? 'text-[#2563EB]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Phân bổ BA
                {activeTab === 'allocation' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'list' ? <ProjectListTab /> : <BAAllocationTab />}
        </div>
      </div>

      {/* Project Edit Modal */}
      <ProjectEditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
