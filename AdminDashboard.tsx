
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { CheckCircle, ClipboardList, LogOut, Search, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

// Types for the complaints data
interface Complaint {
  id: number;
  type: string;
  description: string;
  location: string;
  date: string;
  status: "pending" | "in-progress" | "completed";
  reportedBy: string;
  images?: string[];
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [filteredComplaints, setFilteredComplaints] = useState<Complaint[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in and is an admin
    const userString = localStorage.getItem("wellnesswave_user");
    if (!userString) {
      navigate("/login");
      toast.error("Please login to access the admin dashboard");
      return;
    }

    const user = JSON.parse(userString);
    if (user.role !== "admin") {
      navigate("/");
      toast.error("You don't have permission to access the admin dashboard");
      return;
    }

    // Load complaints - in a real app, this would be an API call
    // For this demo, we'll use localStorage
    const storedComplaints = localStorage.getItem("complaints");
    if (storedComplaints) {
      const parsedComplaints = JSON.parse(storedComplaints);
      setComplaints(parsedComplaints);
      setFilteredComplaints(parsedComplaints);
    }
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    // Filter complaints based on search term
    const filtered = complaints.filter(
      complaint =>
        complaint.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComplaints(filtered);
  }, [searchTerm, complaints]);

  const handleLogout = () => {
    localStorage.removeItem("wellnesswave_user");
    navigate("/login");
    toast.success("Successfully logged out");
  };

  const handleStatusChange = (complaintId: number, newStatus: "pending" | "in-progress" | "completed") => {
    const updatedComplaints = complaints.map(complaint => 
      complaint.id === complaintId 
        ? { ...complaint, status: newStatus } 
        : complaint
    );
    
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
    
    toast.success(`Complaint status updated to ${newStatus}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>;
      default:
        return <Badge className="bg-amber-500">Pending</Badge>;
    }
  };

  const complaintStats = {
    total: complaints.length,
    pending: complaints.filter(c => c.status === "pending").length,
    inProgress: complaints.filter(c => c.status === "in-progress").length,
    completed: complaints.filter(c => c.status === "completed").length,
  };

  if (loading) {
    return <div className="container mx-auto p-6 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage waste management complaints and reports</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-xl">Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{complaintStats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-xl text-amber-500">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{complaintStats.pending}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-xl text-blue-500">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{complaintStats.inProgress}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-xl text-green-500">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{complaintStats.completed}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>All Complaints</CardTitle>
          <CardDescription>
            View and manage all reported waste management issues
          </CardDescription>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search complaints..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          {filteredComplaints.length === 0 ? (
            <div className="text-center py-6">
              <ClipboardList className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-2 text-lg font-medium">No complaints found</h3>
              <p className="text-muted-foreground">
                {complaints.length === 0 
                  ? "There are no complaints reported yet" 
                  : "No complaints match your search criteria"}
              </p>
            </div>
          ) : (
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Reported On</TableHead>
                    <TableHead>Reported By</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredComplaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell className="font-medium">#{complaint.id}</TableCell>
                      <TableCell>{complaint.type}</TableCell>
                      <TableCell>{complaint.location}</TableCell>
                      <TableCell>{complaint.date}</TableCell>
                      <TableCell>{complaint.reportedBy}</TableCell>
                      <TableCell>{getStatusBadge(complaint.status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleStatusChange(complaint.id, "in-progress")}
                            disabled={complaint.status === "in-progress"}
                          >
                            In Progress
                          </Button>
                          <Button 
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                            onClick={() => handleStatusChange(complaint.id, "completed")}
                            disabled={complaint.status === "completed"}
                          >
                            <CheckCircle className="mr-1 h-4 w-4" />
                            Complete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
