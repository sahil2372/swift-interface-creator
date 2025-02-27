
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServicesCard = () => {
  return (
    <div className="dashboard-card animate-scale-in">
      <h3 className="dashboard-header">Cyber Security Services</h3>
      
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-36 h-36 relative rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
          <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-dashboard-orange animate-spin-slow"></div>
          <div className="text-center">
            <div className="text-4xl font-bold">0%</div>
            <div className="text-sm text-muted-foreground">Compliant</div>
          </div>
        </div>
      </div>
      
      <button className="dashboard-btn w-full">
        <span>View Services</span>
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ServicesCard;
