
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ComplianceCardProps {
  title: string;
  value: string;
  total: string;
  percentage: number;
  color: string;
  action: string;
}

const ComplianceCard: React.FC<ComplianceCardProps> = ({ 
  title, 
  value, 
  total, 
  percentage, 
  color,
  action
}) => {
  return (
    <div className="dashboard-card animate-scale-in">
      <h3 className="dashboard-header">{title}</h3>
      
      <div className="flex flex-col items-center justify-center py-6">
        <div className={`w-36 h-36 relative rounded-full flex items-center justify-center border-8 ${color}`}>
          <div className="text-center">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground">{total}</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">{percentage}% Completed</p>
        </div>
      </div>
      
      <button className="dashboard-btn w-full mt-2">
        <span>{action}</span>
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ComplianceCard;
