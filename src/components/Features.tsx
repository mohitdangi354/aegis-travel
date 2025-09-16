import { 
  Smartphone, 
  Shield, 
  Brain, 
  Activity, 
  AlertTriangle, 
  MapPin,
  Lock,
  Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Digital Tourist ID Generation",
      description: "Blockchain-based secure digital identity system for tourists with tamper-proof verification and instant authentication.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Smartphone,
      title: "Smart Mobile App",
      description: "Geo-fencing alerts, safety scoring, panic button, and real-time location tracking with offline capabilities.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Advanced machine learning algorithms detect missing persons, distress behavior, and unusual activity patterns.",
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10"
    },
    {
      icon: Activity,
      title: "Real-time Dashboard",
      description: "Police and tourism boards get live heat maps, automated E-FIR generation, and comprehensive incident management.",
      color: "text-safety-orange",
      bgColor: "bg-safety-orange/10"
    },
    {
      icon: MapPin,
      title: "IoT Wearables Integration",
      description: "Smart wearable devices for high-risk zones with environmental monitoring and emergency communication.",
      color: "text-tech-green",
      bgColor: "bg-tech-green/10"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response System",
      description: "Instant alert system with automated emergency service dispatch and real-time incident coordination.",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: Lock,
      title: "Data Privacy & Security",
      description: "End-to-end encryption, blockchain security, and compliance with international data protection regulations.",
      color: "text-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: Zap,
      title: "Multi-language Support",
      description: "Voice and text emergency access in 10+ Indian languages with instant translation capabilities.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cutting-Edge Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Complete Safety
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines AI, blockchain, IoT, and geo-fencing 
            technologies to create the most advanced tourist safety system available.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: "fade-in 0.6s ease-out forwards"
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-card rounded-full shadow-card">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <span className="text-foreground font-medium">
              Trusted by 50+ Tourism Boards Worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;