
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { CalendarIcon, TrashIcon, RecycleIcon, AlertCircleIcon, TruckIcon } from "lucide-react";

const DashboardView = () => {
  // Sample data for waste composition
  const wasteData = [
    { name: "Organic", value: 35, color: "#4ade80" },
    { name: "Recyclable", value: 25, color: "#60a5fa" },
    { name: "Non-Recyclable", value: 30, color: "#f87171" },
    { name: "Hazardous", value: 10, color: "#fbbf24" },
  ];

  // Sample data for collection stats
  const collectionData = [
    { name: "Mon", regular: 12, recyclable: 8 },
    { name: "Tue", regular: 8, recyclable: 10 },
    { name: "Wed", regular: 15, recyclable: 12 },
    { name: "Thu", regular: 10, recyclable: 7 },
    { name: "Fri", regular: 13, recyclable: 9 },
    { name: "Sat", regular: 18, recyclable: 14 },
    { name: "Sun", regular: 5, recyclable: 3 },
  ];

  // Quick stats
  const quickStats = [
    { 
      title: "Next Collection", 
      value: "Tomorrow, 9:00 AM", 
      description: "Regular Waste", 
      icon: <CalendarIcon className="h-5 w-5 text-blue-500" />,
      color: "blue"
    },
    { 
      title: "Monthly Waste", 
      value: "1,240 kg", 
      description: "12% less than last month", 
      icon: <TrashIcon className="h-5 w-5 text-red-500" />,
      color: "red"
    },
    { 
      title: "Recycling Rate", 
      value: "42%", 
      description: "5% increase from last month", 
      icon: <RecycleIcon className="h-5 w-5 text-green-500" />,
      color: "green"
    },
    { 
      title: "Active Alerts", 
      value: "2", 
      description: "Pending resolution", 
      icon: <AlertCircleIcon className="h-5 w-5 text-amber-500" />,
      color: "amber"
    }
  ];

  // Recent collections
  const recentCollections = [
    { date: "Oct 15, 2023", type: "Regular Waste", amount: "85 kg", status: "Completed" },
    { date: "Oct 12, 2023", type: "Recyclables", amount: "32 kg", status: "Completed" },
    { date: "Oct 10, 2023", type: "Regular Waste", amount: "78 kg", status: "Completed" },
    { date: "Oct 8, 2023", type: "Hazardous", amount: "5 kg", status: "Completed" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Waste Composition</CardTitle>
            <CardDescription>Distribution of waste by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={wasteData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {wasteData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Collection Stats</CardTitle>
            <CardDescription>Waste collected over the week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={collectionData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="regular" name="Regular Waste" fill="#f87171" />
                  <Bar dataKey="recyclable" name="Recyclable" fill="#60a5fa" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Collections</CardTitle>
          <CardDescription>Latest waste pickups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left font-medium">Date</th>
                  <th className="pb-2 text-left font-medium">Type</th>
                  <th className="pb-2 text-left font-medium">Amount</th>
                  <th className="pb-2 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentCollections.map((collection, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 text-sm">{collection.date}</td>
                    <td className="py-3 text-sm">{collection.type}</td>
                    <td className="py-3 text-sm">{collection.amount}</td>
                    <td className="py-3 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {collection.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardView;
