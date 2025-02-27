
import React from 'react';
import { Home, Shield, FileText, BarChart2, Settings, BookOpen, Calendar, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Shield, label: 'Compliance' },
    { icon: FileText, label: 'Documents' },
    { icon: BarChart2, label: 'Reports' },
    { icon: Calendar, label: 'Calendar' },
    { icon: BookOpen, label: 'Training' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
  ];

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative", 
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-sidebar-border bg-sidebar-accent p-4">
          <span className="text-xl font-bold text-white">ControlEase</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent px-3 py-6 h-auto",
                item.active && "bg-sidebar-accent text-sidebar-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
              {item.active && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-sidebar-primary rounded-l-md" />
              )}
            </Button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-sidebar-accent rounded-lg p-4 text-center">
            <p className="text-sm text-sidebar-foreground mb-2">Need help?</p>
            <Button variant="default" className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
