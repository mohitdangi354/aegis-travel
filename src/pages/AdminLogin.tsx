import { useState } from "react";
import { Shield, User, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
    window.location.href = "/admin-dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-tech border-destructive/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="h-8 w-8 text-destructive" />
            <span className="text-2xl font-bold text-destructive">
              Admin Portal
            </span>
          </div>
          <CardTitle className="text-2xl">Administrator Login</CardTitle>
          <CardDescription>
            Access the monitoring and response dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Admin Email</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter admin email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full" variant="destructive">
              Access Admin Dashboard
            </Button>
          </form>
          
          <div className="text-center">
            <Button variant="link" className="text-sm">
              Contact IT Support
            </Button>
          </div>

          <Button variant="ghost" asChild className="w-full mt-6">
            <a href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;