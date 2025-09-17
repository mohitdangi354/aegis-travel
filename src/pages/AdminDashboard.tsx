import { useState } from "react";
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  MapPin, 
  Phone, 
  Activity,
  TrendingUp,
  LogOut,
  Bell,
  Settings,
  Eye,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const [activeAlerts] = useState([
    { id: 1, type: 'SOS', location: 'Manali Valley', time: '2 min ago', severity: 'high' },
    { id: 2, type: 'Missing', location: 'Rohtang Pass', time: '15 min ago', severity: 'medium' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-muted/20">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b shadow-card p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-destructive" />
            <span className="text-xl font-bold text-destructive">
              Admin Control Center
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="destructive">Live Monitoring</Badge>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
              {activeAlerts.length > 0 && (
                <span className="absolute top-2 right-2 h-2 w-2 bg-destructive rounded-full" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tourists</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{activeAlerts.length}</div>
              <p className="text-xs text-muted-foreground">Requires immediate attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">2.3m</div>
              <p className="text-xs text-muted-foreground">Average response time</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Safety Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94.2%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alerts" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-destructive" />
                  Emergency Alerts
                </CardTitle>
                <CardDescription>
                  Real-time incidents requiring immediate response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg bg-destructive/5">
                      <div className="flex items-center space-x-4">
                        <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                          {alert.type}
                        </Badge>
                        <div>
                          <p className="font-medium">{alert.location}</p>
                          <p className="text-sm text-muted-foreground">{alert.time}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Phone className="mr-2 h-4 w-4" />
                          Dispatch Unit
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {activeAlerts.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                      <p>No active alerts. All systems normal.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monitoring" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Live Heat Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Heat Map</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tourist Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Manali Valley</span>
                      <Badge variant="secondary">342 tourists</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rohtang Pass</span>
                      <Badge variant="secondary">189 tourists</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Solang Valley</span>
                      <Badge variant="secondary">156 tourists</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Other Areas</span>
                      <Badge variant="secondary">560 tourists</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Incident Reports</CardTitle>
                <CardDescription>
                  Daily incident summary and analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-2xl font-bold text-green-600">23</h3>
                      <p className="text-sm text-muted-foreground">Incidents Resolved</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-600">5.2m</h3>
                      <p className="text-sm text-muted-foreground">Avg Response Time</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-2xl font-bold text-purple-600">98.7%</h3>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>
                  Manage system settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start h-auto p-4">
                      <Settings className="mr-2 h-4 w-4" />
                      <div className="text-left">
                        <p className="font-medium">Alert Thresholds</p>
                        <p className="text-sm text-muted-foreground">Configure alert triggers</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4">
                      <Users className="mr-2 h-4 w-4" />
                      <div className="text-left">
                        <p className="font-medium">User Management</p>
                        <p className="text-sm text-muted-foreground">Manage admin accounts</p>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;