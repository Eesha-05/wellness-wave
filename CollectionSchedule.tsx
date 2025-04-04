
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon, Plus, TrashIcon, RecycleIcon, AlertTriangleIcon } from "lucide-react";

const CollectionSchedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Sample schedule data
  const scheduleItems = [
    { id: 1, date: "Monday, Oct 16", time: "9:00 AM", type: "Regular Waste", status: "Scheduled", icon: <TrashIcon className="h-4 w-4 text-amber-500" /> },
    { id: 2, date: "Thursday, Oct 19", time: "10:00 AM", type: "Recyclables", status: "Scheduled", icon: <RecycleIcon className="h-4 w-4 text-green-500" /> },
    { id: 3, date: "Saturday, Oct 21", time: "8:30 AM", type: "Regular Waste", status: "Scheduled", icon: <TrashIcon className="h-4 w-4 text-amber-500" /> },
    { id: 4, date: "Monday, Oct 23", time: "9:00 AM", type: "Hazardous Waste", status: "Scheduled", icon: <AlertTriangleIcon className="h-4 w-4 text-red-500" /> },
    { id: 5, date: "Thursday, Oct 26", time: "10:00 AM", type: "Recyclables", status: "Scheduled", icon: <RecycleIcon className="h-4 w-4 text-green-500" /> },
  ];

  const handleScheduleCollection = () => {
    toast({
      title: "Collection Scheduled",
      description: "Your waste collection has been scheduled successfully.",
    });
    setDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view scheduled collections</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full gap-1">
                <Plus className="h-4 w-4" />
                Schedule New Collection
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Schedule Collection</DialogTitle>
                <DialogDescription>
                  Set up a new waste collection. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Collection Date</Label>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <Input id="date" type="date" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Collection Time</Label>
                  <Input id="time" type="time" defaultValue="09:00" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Waste Type</Label>
                  <Select defaultValue="regular">
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select waste type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">Regular Waste</SelectItem>
                      <SelectItem value="recyclable">Recyclables</SelectItem>
                      <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                      <SelectItem value="organic">Organic Waste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Input id="notes" placeholder="Any special instructions" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleScheduleCollection}>Save Schedule</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Collections</CardTitle>
              <CardDescription>All scheduled waste pickups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.type}</h4>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span>{item.date}</span>
                          <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground"></span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                        {item.status}
                      </span>
                      <Button variant="outline" size="sm">Reschedule</Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">Cancel</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollectionSchedule;
