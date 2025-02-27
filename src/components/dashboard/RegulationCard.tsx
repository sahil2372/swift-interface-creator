
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const RegulationCard = () => {
  return (
    <div className="dashboard-card animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <Select defaultValue="css">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select report" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="css">CSS REPORTS CHECK</SelectItem>
            <SelectItem value="pci">PCI DSS</SelectItem>
            <SelectItem value="hipaa">HIPAA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <Checkbox id="default" />
        <Label htmlFor="default" className="text-sm text-muted-foreground">
          Mark this as default Dashboard
        </Label>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">Regulation: PCI DSS 4.0, HITRUST S.</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground">Start Date:</p>
            <p className="font-medium">Dec 12, 2024</p>
          </div>
          <div>
            <p className="text-muted-foreground">End Date:</p>
            <p className="font-medium">Dec 12, 2026</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground">Last Compliance Date:</p>
            <p className="font-medium">Dec 12, 2024</p>
          </div>
          <div>
            <p className="text-muted-foreground">Target Compliance Date:</p>
            <p className="font-medium">Dec 12, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationCard;
