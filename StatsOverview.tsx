
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { Calendar, DownloadIcon, FileBarChart2, TrendingDown, TrendingUp } from "lucide-react";

const StatsOverview = () => {
  const [timeframe, setTimeframe] = useState("monthly");
  
  // Waste trends data
  const wasteTrendsData = {
    monthly: [
      { name: "Jan", regular: 350, recyclable: 180, hazardous: 30 },
      { name: "Feb", regular: 320, recyclable: 190, hazardous: 25 },
      { name: "Mar", regular: 305, recyclable: 200, hazardous: 20 },
      { name: "Apr", regular: 290, recyclable: 210, hazardous: 22 },
      { name: "May", regular: 310, recyclable: 220, hazardous: 18 },
      { name: "Jun", regular: 280, recyclable: 230, hazardous: 15 },
    ],
    quarterly: [
      { name: "Q1", regular: 1000, recyclable: 570, hazardous: 85 },
      { name: "Q2", regular: 880, recyclable: 660, hazardous: 55 },
      { name: "Q3", regular: 920, recyclable: 710, hazardous: 50 },
      { name: "Q4", regular: 850, recyclable: 780, hazardous: 45 },
    ],
    yearly: [
      { name: "2018", regular: 3900, recyclable: 2100, hazardous: 320 },
      { name: "2019", regular: 3700, recyclable: 2300, hazardous: 290 },
      { name: "2020", regular: 3500, recyclable: 2500, hazardous: 270 },
      { name: "2021", regular: 3300, recyclable: 2700, hazardous: 230 },
      { name: "2022", regular: 3100, recyclable: 2900, hazardous: 200 },
    ],
  };
  
  // Recycling rate data
  const recyclingRateData = {
    monthly: [
      { name: "Jan", rate: 32 },
      { name: "Feb", rate: 35 },
      { name: "Mar", rate: 38 },
      { name: "Apr", rate: 39 },
      { name: "May", rate: 41 },
      { name: "Jun", rate: 43 },
    ],
    quarterly: [
      { name: "Q1", rate: 35 },
      { name: "Q2", rate: 39 },
      { name: "Q3", rate: 42 },
      { name: "Q4", rate: 45 },
    ],
    yearly: [
      { name: "2018", rate: 32 },
      { name: "2019", rate: 35 },
      { name: "2020", rate: 38 },
      { name: "2021", rate: 41 },
      { name: "2022", rate: 44 },
    ],
  };
  
  // Waste composition data
  const wasteCompositionData = [
    { name: "Organic", value: 35, color: "#4ade80" },
    { name: "Paper", value: 25, color: "#f59e0b" },
    { name: "Plastic", value: 20, color: "#60a5fa" },
    { name: "Glass", value: 10, color: "#a78bfa" },
    { name: "Metal", value: 8, color: "#94a3b8" },
    { name: "Other", value: 2, color: "#f87171" },
  ];
  
  // Carbon savings data
  const carbonSavingsData = {
    monthly: [
      { name: "Jan", savings: 12 },
      { name: "Feb", savings: 14 },
      { name: "Mar", savings: 16 },
      { name: "Apr", savings: 15 },
      { name: "May", savings: 17 },
      { name: "Jun", savings: 19 },
    ],
    quarterly: [
      { name: "Q1", savings: 42 },
      { name: "Q2", savings: 51 },
      { name: "Q3", savings: 58 },
      { name: "Q4", savings: 65 },
    ],
    yearly: [
      { name: "2018", savings: 120 },
      { name: "2019", savings: 145 },
      { name: "2020", savings: 170 },
      { name: "2021", savings: 196 },
      { name: "2022", savings: 215 },
    ],
  };
  
  // Stats summary
  const statsSummary = [
    {
      title: "Total Waste Reduction",
      value: "12.5%",
      change: "+2.3%",
      trend: "up",
      period: "vs last period",
      icon: <TrendingDown className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Recycling Rate",
      value: "43%",
      change: "+5%",
      trend: "up",
      period: "vs last period",
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Carbon Footprint Reduction",
      value: "19 tons",
      change: "+3.2 tons",
      trend: "up",
      period: "vs last period",
      icon: <TrendingDown className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Collection Efficiency",
      value: "94.3%",
      change: "+1.8%",
      trend: "up",
      period: "vs last period",
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Waste Management Analytics</h3>
          <p className="text-muted-foreground">Comprehensive waste statistics and trends</p>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="sm" className="flex gap-1 items-center">
            <Calendar className="h-4 w-4" />
            <span>June 2023</span>
          </Button>
          <Button variant="outline" size="sm" className="flex gap-1 items-center">
            <DownloadIcon className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsSummary.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                <span>{stat.title}</span>
                {stat.icon}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs flex items-center mt-1 ${
                stat.trend === "up" ? "text-green-500" : "text-red-500"
              }`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change} {stat.period}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <CardTitle>Waste Trends</CardTitle>
              <CardDescription>Tracking waste generation patterns</CardDescription>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button 
                variant={timeframe === "monthly" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframe("monthly")}
              >
                Monthly
              </Button>
              <Button 
                variant={timeframe === "quarterly" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframe("quarterly")}
              >
                Quarterly
              </Button>
              <Button 
                variant={timeframe === "yearly" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframe("yearly")}
              >
                Yearly
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={wasteTrendsData[timeframe as keyof typeof wasteTrendsData]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="regular" 
                  name="Regular Waste" 
                  stackId="1"
                  stroke="#f87171" 
                  fill="#f87171" 
                />
                <Area 
                  type="monotone" 
                  dataKey="recyclable" 
                  name="Recyclable" 
                  stackId="1"
                  stroke="#60a5fa" 
                  fill="#60a5fa" 
                />
                <Area 
                  type="monotone" 
                  dataKey="hazardous" 
                  name="Hazardous" 
                  stackId="1"
                  stroke="#fbbf24" 
                  fill="#fbbf24" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Waste Composition</CardTitle>
            <CardDescription>Current waste material breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={wasteCompositionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {wasteCompositionData.map((entry, index) => (
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
            <CardTitle>Recycling Rate</CardTitle>
            <CardDescription>Percentage of waste recycled</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={recyclingRateData[timeframe as keyof typeof recyclingRateData]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    name="Recycling Rate (%)" 
                    stroke="#4ade80" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Carbon Savings</CardTitle>
            <CardDescription>CO₂ emissions prevented</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={carbonSavingsData[timeframe as keyof typeof carbonSavingsData]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar 
                    dataKey="savings" 
                    name="Carbon Savings (tons)" 
                    fill="#4ade80" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsOverview;
