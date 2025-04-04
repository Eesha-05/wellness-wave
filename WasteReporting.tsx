
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Camera, MapPin, X, User, LogOut, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Types for the complaints
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

const WasteReporting = () => {
  const navigate = useNavigate();
  const [reportImages, setReportImages] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [userComplaints, setUserComplaints] = useState<Complaint[]>([]);
  const [user, setUser] = useState<{ id: number; username: string; role: string } | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const userString = localStorage.getItem("wellnesswave_user");
    
    if (!userString) {
      navigate("/login");
      toast.error("Please login to report issues");
      return;
    }
    
    const userData = JSON.parse(userString);
    setUser(userData);
    
    // Load user's complaints
    loadUserComplaints(userData.username);
  }, [navigate]);
  
  const loadUserComplaints = (username: string) => {
    const storedComplaints = localStorage.getItem("complaints");
    if (storedComplaints) {
      const allComplaints = JSON.parse(storedComplaints);
      const userSpecificComplaints = allComplaints.filter(
        (complaint: Complaint) => complaint.reportedBy === username
      );
      setUserComplaints(userSpecificComplaints);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        if (reader.result) {
          setReportImages(prev => [...prev, reader.result as string]);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveImage = (index: number) => {
    setReportImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
          toast.success("Location detected");
        },
        () => {
          toast.error("Unable to get your current location");
        }
      );
    } else {
      toast.error("Your browser doesn't support geolocation");
    }
  };
  
  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please login to report issues");
      navigate("/login");
      return;
    }
    
    if (!issueType) {
      toast.error("Please select an issue type");
      return;
    }
    
    setIsSubmitting(true);
    
    // Create a new complaint
    const newComplaint: Complaint = {
      id: Math.floor(Math.random() * 10000),
      type: issueType,
      description,
      location,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      status: "pending",
      reportedBy: user.username,
      images: reportImages
    };
    
    // Get existing complaints or initialize empty array
    const existingComplaints = localStorage.getItem("complaints");
    const allComplaints = existingComplaints 
      ? JSON.parse(existingComplaints) 
      : [];
    
    // Add new complaint
    allComplaints.push(newComplaint);
    
    // Save to localStorage
    localStorage.setItem("complaints", JSON.stringify(allComplaints));
    
    // Update user's complaints
    setUserComplaints(prev => [...prev, newComplaint]);
    
    // Reset form
    setIsSubmitting(false);
    setReportImages([]);
    setLocation("");
    setIssueType("");
    setDescription("");
    
    toast.success("Your report has been submitted successfully");
  };
  
  const handleLogout = () => {
    localStorage.removeItem("wellnesswave_user");
    navigate("/login");
    toast.success("Successfully logged out");
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>;
      case "in-progress":
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">In Progress</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">Pending</span>;
    }
  };

  if (!user) {
    return <div className="text-center p-6">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <span>Welcome, {user.username}</span>
        </div>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Report Waste Issue</CardTitle>
              <CardDescription>Submit a new waste-related problem or sanitation concern</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReport} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="issue-type">Issue Type</Label>
                    <Select value={issueType} onValueChange={setIssueType} required>
                      <SelectTrigger id="issue-type">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="illegal-dumping">Illegal Dumping</SelectItem>
                        <SelectItem value="missed-collection">Missed Collection</SelectItem>
                        <SelectItem value="bin-damage">Bin Damage</SelectItem>
                        <SelectItem value="hazardous-waste">Hazardous Waste</SelectItem>
                        <SelectItem value="sewage-issue">Sewage Issue</SelectItem>
                        <SelectItem value="drainage-problem">Drainage Problem</SelectItem>
                        <SelectItem value="contaminated-water">Contaminated Water</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date">Date of Observation</Label>
                    <Input id="date" type="date" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address/Location</Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="address" 
                      placeholder="Enter location details" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)} 
                      required 
                      className="flex-1"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon"
                      onClick={handleGetLocation}
                    >
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the issue in detail" 
                    required 
                    className="min-h-[120px]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Add Photos</Label>
                  <div className="grid grid-cols-4 gap-4">
                    {reportImages.map((img, index) => (
                      <div key={index} className="relative rounded-md overflow-hidden h-24 bg-muted">
                        <img src={img} alt="Report" className="w-full h-full object-cover" />
                        <button 
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-1 right-1 bg-black/50 p-1 rounded-full"
                        >
                          <X className="h-3 w-3 text-white" />
                        </button>
                      </div>
                    ))}
                    {reportImages.length < 4 && (
                      <div className="flex items-center justify-center h-24 border-2 border-dashed border-muted-foreground/25 rounded-md">
                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                          <Camera className="h-6 w-6 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground mt-1">Add Photo</span>
                          <Input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Up to 4 photos. Each photo should be under 5MB.
                  </p>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Report"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Your Recent Reports</CardTitle>
              <CardDescription>Track the status of your reports</CardDescription>
            </CardHeader>
            <CardContent>
              {userComplaints.length === 0 ? (
                <div className="text-center py-6">
                  <ClipboardList className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">No reports yet</h3>
                  <p className="text-muted-foreground">
                    You haven't submitted any reports yet
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {userComplaints.map((complaint) => (
                    <div key={complaint.id} className="p-3 border rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-sm">{complaint.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                        {getStatusBadge(complaint.status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{complaint.location}</p>
                      <p className="text-xs text-muted-foreground">Reported: {complaint.date}</p>
                      <Button variant="ghost" size="sm" className="w-full text-xs mt-1">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WasteReporting;
