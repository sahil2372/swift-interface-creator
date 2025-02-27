
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const StatusCard = () => {
  return (
    <div className="dashboard-card animate-scale-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="dashboard-header">SOC 2 Compliance Status</h3>
        <Select defaultValue="soc2">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="soc2">SOC 2</SelectItem>
            <SelectItem value="soc1">SOC 1</SelectItem>
            <SelectItem value="iso">ISO</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              className="text-muted stroke-current" 
              strokeWidth="10" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
            />
            <circle 
              className="text-dashboard-red stroke-current" 
              strokeWidth="10" 
              strokeLinecap="round" 
              strokeDasharray="251.2"
              strokeDashoffset="251.2" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
              style={{ 
                strokeDashoffset: 200.96, // 251.2 - (251.2 * 20 / 100)
                transition: 'stroke-dashoffset 1s ease-in-out'
              }}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-4xl font-bold">0%</div>
            <div className="text-sm text-muted-foreground">Compliant</div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-4">
        <h4 className="text-sm text-muted-foreground mb-1">Compliance Status</h4>
      </div>
      
      <button className="dashboard-btn w-full">
        <span>View More Regulations</span>
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default StatusCard;
