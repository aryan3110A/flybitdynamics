import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, CheckCircle, Heart, Building, Users, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/website1.jpg";

const highlights = [
  {
    icon: CheckCircle,
    title: "100% Customizable Shows",
    description: "Every performance tailored to your vision"
  },
  {
    icon: Heart,
    title: "Wedding & Social Events",
    description: "Making your special moments magical"
  },
  {
    icon: Building,
    title: "Corporate & Government",
    description: "Professional brand storytelling in the sky"
  },
  {
    icon: Rocket,
    title: "Eco-Friendly & Safe",
    description: "Spectacular shows with zero environmental impact"
  }
];

const stats = [
  { number: "500+", label: "Drones in Fleet" },
  { number: "100+", label: "Shows Completed" },
  { number: "50+", label: "Cities Covered" },
  { number: "24/7", label: "Support Available" }
];

export default function Home() {
  useEffect(() => {
    document.title = "FLYBIT Dynamics - Premier Drone Light Show Company India | Best Drone Wedding Show";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'FLYBIT Dynamics - Leading drone light show company in India. Book spectacular drone wedding shows, aerial light displays, and drone animations for events. Best drone show company with custom storytelling.');
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where Wonder <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Begins</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your event with breathtaking drone light shows powered by cutting-edge technology and unforgettable creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* <Button size="lg" className="btn-glow text-lg px-8 py-4">
              Book a Show <ArrowRight className="ml-2 w-5 h-5" />
            </Button> */}

            <Link to="/contact"
            onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="btn-glow text-lg px-8 py-4">
                Book a Show <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Button 
              variant="outline" 
              size="lg" 
              className="text-[#3D473B] border-white bg-white hover:bg-primary hover:text-white text-lg px-8 py-4"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Drones in Action
            </Button>
          </div>
          <p className="text-white/80 text-lg italic">
            "Your moments are special. Let's make them unforgettable with a touch of sky magic."
          </p>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-30 float-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              India's Premier <span className="text-primary">Drone Light Show</span> Company
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just create shows, we craft experiences that touch hearts and create memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 card-gradient hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-border">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Technology. <span className="text-primary">Infinite Possibilities.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate weddings to grand corporate events, we bring your vision to life in the night sky.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Social Events",
                description: "Because love deserves to be written in the stars.",
                features: ["Custom initials", "Love stories in the sky", "Magical moments"]
              },
              {
                title: "Corporate Events", 
                description: "Your brand deserves a grand canvas.",
                features: ["Logo animations", "Brand values", "Product showcases"]
              },
              {
                title: "Government Events",
                description: "A new age of patriotic storytelling.",
                features: ["National celebrations", "Cultural showcases", "G20 events"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 italic">"{service.description}"</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Zap className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services"
            onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="btn-glow">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Light Up the Sky?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together. Your vision, our technology, unlimited possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Link to="/contact"
            onClick={() => window.scrollTo(0, 0)}>
            <Button size="lg" variant="outline" className="text-[#3D473B] border-white bg-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              <Users className="mr-2 w-5 h-5" />
              Schedule a Call
            </Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}