
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const NistRating = () => {
  const data = [
    { name: 'GOVERN', value: 5, color: '#ef4444' },
    { name: 'IDENTIFY', value: 9, color: '#ef4444' },
    { name: 'PROTECT', value: 7, color: '#ef4444' },
    { name: 'DETECT', value: 6, color: '#f97316' },
    { name: 'RESPOND', value: 8, color: '#ef4444' },
    { name: 'RECOVER', value: 5, color: '#ef4444' },
  ];

  const legendItems = [
    { name: 'Fully Aligned', color: '#10b981' },
    { name: 'Mostly Aligned', color: '#f97316' },
    { name: 'Partially Aligned', color: '#f59e0b' },
    { name: 'Not Aligned', color: '#ef4444' },
    { name: 'Not Reviewed', color: '#6b7280' },
  ];

  return (
    <div className="dashboard-card h-full animate-fade-in">
      <h3 className="dashboard-header">NIST CSF Rating</h3>
      
      <div className="flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-4">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <div 
                className="w-3 h-3 rounded" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs">{item.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex-1 w-full min-h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
              barSize={35}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} />
              <YAxis hide={true} />
              <Tooltip 
                cursor={false}
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                }}
              />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 0, 0]}
                fill="#ef4444"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NistRating;
