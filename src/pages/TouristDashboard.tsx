import { useState } from "react";
import { 
  Shield, 
  AlertTriangle, 
  MapPin, 
  Phone, 
  User, 
  QrCode, 
  Battery, 
  Wifi,
  LogOut,
  Bell,
  Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TouristDashboard = () => {
  const [sosActive, setSosActive] = useState(false);

  const handleSOS = () => {
    setSosActive(true);
    // TODO: Implement SOS functionality
    setTimeout(() => setSosActive(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b shadow-card p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SafeTourism AI
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Online</Badge>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* SOS Emergency Button */}
        <Card className="border-safety-orange/20 bg-gradient-to-r from-safety-orange/5 to-destructive/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-safety-orange flex items-center justify-center">
              <AlertTriangle className="mr-2 h-6 w-6" />
              Emergency SOS
            </CardTitle>
            <CardDescription>
              Press and hold for 3 seconds in case of emergency
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              variant="safety"
              size="lg"
              className={`w-32 h-32 rounded-full text-xl font-bold transition-all duration-300 ${
                sosActive ? 'animate-pulse bg-destructive' : ''
              }`}
              onClick={handleSOS}
            >
              {sosActive ? (
                <div className="flex flex-col items-center">
                  <AlertTriangle className="h-8 w-8 mb-1" />
                  <span className="text-sm">ACTIVATED</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Phone className="h-8 w-8 mb-1" />
                  <span className="text-sm">SOS</span>
                </div>
              )}
            </Button>
            {sosActive && (
              <p className="mt-4 text-destructive font-semibold">
                Emergency services have been notified!
              </p>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Digital ID */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <QrCode className="mr-2 h-5 w-5 text-primary" />
                Digital Tourist ID
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                    <QrCode className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">ID: TID-2024-001</p>
                  <Badge variant="outline" className="text-green-600">Verified</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Manali, Himachal Pradesh</p>
                  <p className="text-sm text-muted-foreground">Adventure Zone - Level 2</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Safe Zone</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Device Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wifi className="mr-2 h-5 w-5 text-primary" />
                Device Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">GPS Signal</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Strong</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <Battery className="mr-1 h-4 w-4" />
                    Battery
                  </span>
                  <Badge variant="secondary">85%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Network</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Connected</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5 text-primary" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">Weather Alert</p>
                  <p className="text-xs text-blue-600">Rain expected in your area</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-800">Safety Update</p>
                  <p className="text-xs text-green-600">Area security enhanced</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  Local Police: 100
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  Tourist Helpline: 1363
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  Medical Emergency: 108
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Check-in</p>
                  <p className="font-medium">Jan 15, 2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">5 days</p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Update Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TouristDashboard;