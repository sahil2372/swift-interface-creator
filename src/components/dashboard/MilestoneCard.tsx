
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const MilestoneCard = () => {
  return (
    <div className="dashboard-card h-full animate-slide-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="dashboard-header">SOC 2 Milestones</h3>
        
        <div className="flex items-center gap-1">
          <div className="h-6 w-6 rounded-full bg-dashboard-blue flex items-center justify-center text-white text-xs">
            2
          </div>
          <span className="text-sm font-medium">PHASE 2</span>
        </div>
      </div>
      
      <div className="relative pl-6 mb-8">
        <div className="absolute top-0 left-0 h-full">
          <div className="milestone-line"></div>
        </div>
        
        <div className="relative mb-8">
          <div className="milestone-dot top-0"></div>
          <div className="mb-2">
            <span className="inline-block text-sm font-medium"># Scoping Uploaded</span>
          </div>
          
          <div className="border border-border rounded-lg p-3 ml-4">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="col-span-1 text-muted-foreground">Status:</div>
              <div className="col-span-2">
                <span className="px-2 py-0.5 bg-dashboard-blue text-white text-xs rounded">Open</span>
              </div>
              
              <div className="col-span-1 text-muted-foreground">Actual Date:</div>
              <div className="col-span-2"></div>
              
              <div className="col-span-1 text-muted-foreground">Target Date:</div>
              <div className="col-span-2 font-medium">Aug 11, 2025</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground mb-4">
          <div>Jul 22, 2025</div>
          <div>Sep 05, 2025</div>
        </div>
      </div>
      
      <button className="dashboard-btn w-full">
        <span>View Milestones</span>
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MilestoneCard;
