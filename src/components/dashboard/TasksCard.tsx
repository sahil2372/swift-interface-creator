
import React from 'react';
import { FileText, Shield, Calendar } from 'lucide-react';

interface Task {
  id: number;
  icon: React.ElementType;
  title: string;
  count: number;
  color: string;
}

const TasksCard = () => {
  const tasks: Task[] = [
    {
      id: 1,
      icon: FileText,
      title: 'Evidence Collection | Review Evidence',
      count: 217,
      color: 'text-dashboard-blue bg-dashboard-blue/10'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Cyber Security',
      count: 3,
      color: 'text-dashboard-orange bg-dashboard-orange/10'
    },
    {
      id: 3,
      icon: Calendar,
      title: 'Milestone',
      count: 0,
      color: 'text-green-600 bg-green-600/10'
    }
  ];

  return (
    <div className="dashboard-card h-full animate-slide-in">
      <h3 className="dashboard-header">My Tasks</h3>
      
      <div className="space-y-5">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary/30 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${task.color}`}>
                <task.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{task.title}</span>
            </div>
            
            {task.count > 0 && (
              <div className="px-2 py-0.5 rounded bg-dashboard-blue text-white text-xs font-semibold">
                {task.count}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksCard;
