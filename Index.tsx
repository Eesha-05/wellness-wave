
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardView from "@/components/garbage/DashboardView";
import CollectionSchedule from "@/components/garbage/CollectionSchedule";
import WasteReporting from "@/components/garbage/WasteReporting";
import RecyclingGuide from "@/components/garbage/RecyclingGuide";

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">EcoTrack Waste Management System</h1>
        <p className="text-muted-foreground">Monitor, manage, and optimize your waste collection and recycling efforts</p>
      </header>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="schedule">Collection</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
          <TabsTrigger value="recycling">Recycling</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="mt-0">
          <DashboardView />
        </TabsContent>
        
        <TabsContent value="schedule" className="mt-0">
          <CollectionSchedule />
        </TabsContent>
        
        <TabsContent value="reporting" className="mt-0">
          <WasteReporting />
        </TabsContent>
        
        <TabsContent value="recycling" className="mt-0">
          <RecyclingGuide />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
