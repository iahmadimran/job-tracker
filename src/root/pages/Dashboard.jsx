import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { JobBoard } from '@/components/JobBoard';
import { Header } from '@/components/Header';
import { WelcomeSection } from '@/components/WelcomeSection';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'jobs':
        return <JobBoard />;
      case 'analytics':
        return <div className="p-4 sm:p-6">Analytics Dashboard (Coming Soon)</div>;
      case 'ai-tools':
        return <div className="p-4 sm:p-6">AI Tools (Coming Soon)</div>;
      case 'settings':
        return <div className="p-4 sm:p-6">Settings (Coming Soon)</div>;
      default:
        return <WelcomeSection />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
