
import React from 'react';
import { Bell, Search, Menu, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-white border-b border-border shadow-sm animate-fade-in z-10">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">ControlEase</span>
          </div>
        </div>
        
        <div className="flex-1 flex justify-end md:justify-center">
          <div className="relative hidden md:flex w-full max-w-sm items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-10 py-2 w-full rounded-full bg-secondary/50 border-border focus:outline-none focus:ring-1 focus:ring-primary/20"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block px-3 py-1 rounded-full bg-dashboard-orange/10 text-dashboard-orange font-medium animate-pulse-glow">
            NEXT: 12/12/2024
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive flex items-center justify-center text-[10px] text-white">3</span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col text-sm">
              <span className="font-medium">Welcome, Sailee Pawar</span>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
