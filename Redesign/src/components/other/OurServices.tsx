import { useState } from "react";
import { 
  Monitor, Code, Smartphone, TrendingUp, 
  Palette, Users, Brain, Bug,
  ArrowRight, Sparkles
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

/**
 * Services Data Configuration
 * Each service with icon, title, description, and features
 */
const SERVICES = [
  {
    id: "software",
    icon: Monitor,
    title: "Software Products",
    description: "Enterprise software including CRM, HR, and management systems.",
    features: ["CRM Solutions", "HR & Payroll", "Inventory Management", "Custom ERP"],
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
    iconBg: "bg-blue-500",
    delay: "0ms",
  },
  {
    id: "webdev",
    icon: Code,
    title: "Web Design & Development",
    description: "Custom websites, web applications, and specialized portal development.",
    features: ["Responsive Design", "Web Applications", "Portal Development", "E-commerce"],
    gradient: "from-violet-500/20 via-purple-500/20 to-violet-500/20",
    iconBg: "bg-violet-500",
    delay: "100ms",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native, hybrid, and cross-platform mobile app development solutions.",
    features: ["iOS Development", "Android Apps", "Cross-Platform", "PWA Solutions"],
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20",
    iconBg: "bg-emerald-500",
    delay: "200ms",
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Online Marketing",
    description: "Comprehensive digital marketing and social media marketing.",
    features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics"],
    gradient: "from-orange-500/20 via-amber-500/20 to-orange-500/20",
    iconBg: "bg-orange-500",
    delay: "300ms",
  },
  {
    id: "design",
    icon: Palette,
    title: "Creative Design",
    description: "UI/UX design, logo design, and creative brochure design services.",
    features: ["UI/UX Design", "Brand Identity", "Print Design", "Illustrations"],
    gradient: "from-pink-500/20 via-rose-500/20 to-pink-500/20",
    iconBg: "bg-pink-500",
    delay: "400ms",
  },
  {
    id: "consulting",
    icon: Users,
    title: "Consulting Services",
    description: "Expert consulting for NetSuite, recruitment, and software solutions.",
    features: ["NetSuite ERP", "IT Strategy", "Tech Recruitment", "Business Analysis"],
    gradient: "from-indigo-500/20 via-blue-500/20 to-indigo-500/20",
    iconBg: "bg-indigo-500",
    delay: "500ms",
  },
  {
    id: "datascience",
    icon: Brain,
    title: "Data Science",
    description: "AI, machine learning, and advanced data analytics solutions.",
    features: ["Machine Learning", "Data Analytics", "AI Solutions", "Predictive Models"],
    gradient: "from-cyan-500/20 via-sky-500/20 to-cyan-500/20",
    iconBg: "bg-cyan-500",
    delay: "600ms",
  },
  {
    id: "testing",
    icon: Bug,
    title: "Testing Services",
    description: "Comprehensive software, security, and performance testing solutions.",
    features: ["QA Automation", "Security Testing", "Performance", "Manual Testing"],
    gradient: "from-red-500/20 via-rose-500/20 to-red-500/20",
    iconBg: "bg-red-500",
    delay: "700ms",
  },
];

/**
 * Individual Service Card Component
 */
interface ServiceCardProps {
  service: typeof SERVICES[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ServiceCard = ({ service, onHover, onLeave }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <Card
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        animationDelay: service.delay,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {/* Gradient Background - Appears on Hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

      <CardContent className="relative p-6 space-y-6">
        {/* Icon Section */}
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl ${service.iconBg} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          {/* Decorative Badge */}
          <Badge 
            variant="outline" 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-primary/20 text-primary"
          >
            Popular
          </Badge>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="pt-4 border-t border-border/50">
          <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/btn">
            <span>View More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </CardContent>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive IT solutions tailored to meet your business needs and drive 
            digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isHovered={hoveredCard === service.id}
              onHover={() => setHoveredCard(service.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all group"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
    </section>
  );
};

// Keyframes for fadeInUp animation
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default OurServices;