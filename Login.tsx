
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Lock, User, UserPlus } from "lucide-react";

// Mock user data - in a real application, this would come from a database
const MOCK_USERS = [
  { id: 1, username: "user", password: "password", role: "user" },
  { id: 2, username: "admin", password: "admin123", role: "admin" }
];

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("user");
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (role: "user" | "admin") => {
    setIsLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Get all users from localStorage
      const savedUsers = JSON.parse(localStorage.getItem("wellnesswave_users") || "[]");
      const allUsers = [...MOCK_USERS, ...savedUsers];
      
      const user = allUsers.find(
        u => u.username === formData.username && 
        u.password === formData.password && 
        u.role === role
      );
      
      if (user) {
        // Store user info in localStorage for session management
        localStorage.setItem("wellnesswave_user", JSON.stringify({
          id: user.id,
          username: user.username,
          role: user.role
        }));
        
        // Navigate based on role
        if (role === "admin") {
          navigate("/admin-dashboard");
          toast.success("Welcome to admin dashboard!");
        } else {
          navigate("/");
          toast.success("Successfully logged in!");
        }
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    
    // Basic validation
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match!");
      setIsRegistering(false);
      return;
    }
    
    if (registerData.username.length < 3) {
      toast.error("Username must be at least 3 characters long!");
      setIsRegistering(false);
      return;
    }
    
    if (registerData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      setIsRegistering(false);
      return;
    }
    
    setTimeout(() => {
      // Check if username already exists
      const savedUsers = JSON.parse(localStorage.getItem("wellnesswave_users") || "[]");
      const allUsers = [...MOCK_USERS, ...savedUsers];
      
      if (allUsers.some(user => user.username === registerData.username)) {
        toast.error("Username already exists. Please choose another one.");
        setIsRegistering(false);
        return;
      }
      
      // Create new user
      const newUser = {
        id: Date.now(),
        username: registerData.username,
        password: registerData.password,
        role: "user" // Only allow registering as a user
      };
      
      // Save to localStorage
      savedUsers.push(newUser);
      localStorage.setItem("wellnesswave_users", JSON.stringify(savedUsers));
      
      toast.success("Account created successfully! You can now login.");
      
      // Reset form and switch to login tab
      setRegisterData({
        username: "",
        password: "",
        confirmPassword: ""
      });
      setActiveTab("user");
      setIsRegistering(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">WellnessWave</CardTitle>
          <CardDescription>
            Login to manage waste reports and sanitation concerns
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="user">Citizen Login</TabsTrigger>
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="user">
              <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin("user");
              }}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        className="pl-9"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        className="pl-9"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login as Citizen"}
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>Demo credentials: username: user, password: password</p>
                  </div>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="admin">
              <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin("admin");
              }}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-username">Admin Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-username"
                        name="username"
                        placeholder="Enter admin username"
                        className="pl-9"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Admin Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-password"
                        name="password"
                        type="password"
                        placeholder="Enter admin password"
                        className="pl-9"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login as Admin"}
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>Demo credentials: username: admin, password: admin123</p>
                  </div>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-username">Username</Label>
                    <div className="relative">
                      <UserPlus className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-username"
                        name="username"
                        placeholder="Create a username"
                        className="pl-9"
                        value={registerData.username}
                        onChange={handleRegisterInputChange}
                        required
                        minLength={3}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-password"
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        className="pl-9"
                        value={registerData.password}
                        onChange={handleRegisterInputChange}
                        required
                        minLength={6}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-9"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isRegistering}>
                    {isRegistering ? "Creating Account..." : "Create Account"}
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>Already have an account? <button 
                      type="button" 
                      className="text-primary hover:underline" 
                      onClick={() => setActiveTab("user")}
                    >
                      Login here
                    </button></p>
                  </div>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
