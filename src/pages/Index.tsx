
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import RegulationCard from '@/components/dashboard/RegulationCard';
import TasksCard from '@/components/dashboard/TasksCard';
import NistRating from '@/components/dashboard/NistRating';
import ComplianceCard from '@/components/dashboard/ComplianceCard';
import ServicesCard from '@/components/dashboard/ServicesCard';
import StatusCard from '@/components/dashboard/StatusCard';
import MilestoneCard from '@/components/dashboard/MilestoneCard';

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30 w-full overflow-hidden">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="container px-0 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">DASHBOARD</h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <RegulationCard />
              <TasksCard />
              <NistRating />
            </div>
            
            <h2 className="text-xl font-bold mb-4">Compliance Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ComplianceCard 
                title="Continuous Compliance" 
                value="0" 
                total="/217" 
                percentage={0} 
                color="border-dashboard-orange" 
                action="Manage Scope, Assessment & Evidence"
              />
              <ServicesCard />
              <StatusCard />
              <MilestoneCard />
            </div>
            
            <div className="text-center text-xs text-muted-foreground mt-8 mb-2">
              © 2025 ControlEase, All rights reserved.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
