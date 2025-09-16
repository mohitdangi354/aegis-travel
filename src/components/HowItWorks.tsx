import { ArrowRight, UserPlus, Shield, MapPin, AlertCircle, Headphones } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Tourist Registration",
      description: "Visitors register through our mobile app or web portal with basic information and travel plans."
    },
    {
      icon: Shield,
      title: "Digital ID Generation",
      description: "Secure blockchain-based digital ID is created with encrypted personal data and travel preferences."
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "AI-powered monitoring begins with geo-fencing, location tracking, and behavioral pattern analysis."
    },
    {
      icon: AlertCircle,
      title: "Incident Detection",
      description: "Advanced algorithms detect anomalies, emergencies, or unusual patterns triggering immediate alerts."
    },
    {
      icon: Headphones,
      title: "Emergency Response",
      description: "Automated emergency services dispatch with real-time coordination and incident management."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Our{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              System Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless 5-step process that ensures comprehensive tourist safety 
            from registration to emergency response.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex justify-between items-start">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center flex-1 relative">
                {/* Step Circle */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-tech mb-6 animate-float">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center max-w-xs">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-10 -right-8 h-6 w-6 text-primary transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-secondary-foreground">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 bg-gradient-tech rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Powered by Advanced Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">🤖</div>
              <div className="font-semibold text-foreground">Artificial Intelligence</div>
              <div className="text-sm text-muted-foreground">Machine Learning & Pattern Recognition</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">⛓️</div>
              <div className="font-semibold text-foreground">Blockchain</div>
              <div className="text-sm text-muted-foreground">Secure Digital Identity</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">📍</div>
              <div className="font-semibold text-foreground">Geo-Fencing</div>
              <div className="text-sm text-muted-foreground">Location-based Alerts</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">📡</div>
              <div className="font-semibold text-foreground">IoT Integration</div>
              <div className="text-sm text-muted-foreground">Smart Wearables & Sensors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;