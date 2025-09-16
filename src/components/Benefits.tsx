import { TrendingUp, Clock, Shield, Users, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Tourist Safety",
      description: "95% reduction in emergency response time with AI-powered threat detection and prevention.",
      metric: "95%",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Clock,
      title: "Faster Incident Response",
      description: "Automated emergency dispatch reduces response time from hours to minutes.",
      metric: "3x",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: TrendingUp,
      title: "Increased Tourism Revenue",
      description: "Enhanced safety reputation leads to 40% increase in tourist confidence and bookings.",
      metric: "+40%",
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10"
    },
    {
      icon: Users,
      title: "Better Resource Management",
      description: "Optimize emergency services allocation with predictive analytics and real-time insights.",
      metric: "50%",
      color: "text-tech-green",
      bgColor: "bg-tech-green/10"
    },
    {
      icon: Globe,
      title: "International Compliance",
      description: "Meets global data protection standards and tourism safety regulations.",
      metric: "100%",
      color: "text-safety-orange",
      bgColor: "bg-safety-orange/10"
    },
    {
      icon: Award,
      title: "Award-Winning Platform",
      description: "Recognized by international tourism and technology organizations.",
      metric: "5+",
      color: "text-foreground",
      bgColor: "bg-muted"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Measurable Impact on{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Tourism Safety
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform delivers tangible benefits for tourism departments, emergency services, 
            and most importantly, tourist safety and satisfaction.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="group hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 bg-card border-border/50"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: "fade-in 0.6s ease-out forwards"
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-full ${benefit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <benefit.icon className={`h-7 w-7 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <div className={`text-2xl font-bold ${benefit.color}`}>
                        {benefit.metric}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-tech rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="font-semibold text-foreground">Tourism Boards</div>
              <div className="text-sm text-muted-foreground">Successfully implemented across India</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-secondary">1M+</div>
              <div className="font-semibold text-foreground">Tourists Protected</div>
              <div className="text-sm text-muted-foreground">Active users on the platform</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-safety-orange">99.9%</div>
              <div className="font-semibold text-foreground">Uptime</div>
              <div className="text-sm text-muted-foreground">Reliable 24/7 monitoring</div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card shadow-card">
            <CardContent className="p-8">
              <blockquote className="text-xl text-foreground text-center italic mb-6">
                "The SafeTourism AI platform has revolutionized how we handle tourist safety. 
                Response times have improved dramatically, and tourist confidence has never been higher."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground">Dr. Rajesh Kumar</div>
                <div className="text-muted-foreground">Director, Himachal Pradesh Tourism Board</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;