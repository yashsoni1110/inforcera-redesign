import { useState } from "react";
import {
  Monitor, Code, Smartphone, TrendingUp,
  Palette, Users, Brain, Bug,
  ArrowRight, Sparkles, Plus, Minus
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const SERVICES = [
  { id: "software", icon: Monitor, title: "Software Products", description: "Enterprise CRM, HR, and management systems.", features: ["CRM Solutions", "HR & Payroll", "Inventory", "Custom ERP"], color: "bg-blue-500" },
  { id: "webdev", icon: Code, title: "Web Development", description: "Custom websites and specialized portal development.", features: ["Responsive", "Web Apps", "E-commerce"], color: "bg-violet-500" },
  { id: "mobile", icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile solutions.", features: ["iOS/Android", "Cross-Platform", "PWA"], color: "bg-emerald-500" },
  { id: "marketing", icon: TrendingUp, title: "Online Marketing", description: "Comprehensive digital and social media marketing.", features: ["SEO", "Content Strategy", "Analytics"], color: "bg-orange-500" },
  { id: "design", icon: Palette, title: "Creative Design", description: "UI/UX, logo, and brand identity services.", features: ["UI/UX", "Branding", "Illustrations"], color: "bg-pink-500" },
  { id: "consulting", icon: Users, title: "Consulting", description: "Expert NetSuite and IT strategy consulting.", features: ["NetSuite", "IT Strategy", "Recruitment"], color: "bg-indigo-500" },
  { id: "datascience", icon: Brain, title: "Data Science", description: "AI, ML, and advanced analytics solutions.", features: ["Machine Learning", "AI Models", "Predictive"], color: "bg-cyan-500" },
  { id: "testing", icon: Bug, title: "Testing Services", description: "Security and performance testing solutions.", features: ["QA Automation", "Security", "Manual"], color: "bg-red-500" },
];

const OurServices = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine which cards to show based on state
  const visibleServices = isExpanded ? SERVICES : SERVICES.slice(0, 4);

  return (
    <section className="relative py-20 bg-background text-foreground overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto md:px-20 px-4 max-w-max-w-screen">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Solving complex problems with <span className="text-gray-500">elegant code.</span>
            </h2>
          </div>

          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="rounded-full border-border/50 hover:bg-secondary hover:text-foreground transition-all"
          >
            {isExpanded ? (
              <><Minus className="mr-2 w-4 h-4" /> Show Less</>
            ) : (
              <><Plus className="mr-2 w-4 h-4" /> View All Services</>
            )}
          </Button>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={cn(
                  "group relative p-5 md:p-8 rounded-[2rem] border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all duration-500",
                  "flex flex-col md:flex-row gap-6 items-start"
                )}
              >
                {/* Icon Circle */}
                <div className={cn(
                  "shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3",
                  service.color
                )}>
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                  </div>

                  <p className="text-muted-foreground text-sm md:text-base mb-6 line-clamp-2 md:line-clamp-none">
                    {service.description}
                  </p>

                  {/* Bullet Points - Hidden on Mobile unless expanded */}
                  <div className={cn(
                    "hidden md:flex flex-wrap gap-2 mt-auto",
                    isExpanded ? "flex" : "md:flex"
                  )}>
                    {service.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Background Accent */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-[2rem] transition-all pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Mobile */}
        {!isExpanded && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => setIsExpanded(true)}
              className="text-primary font-bold text-sm flex items-center gap-2"
            >
              Expand All {SERVICES.length} Services <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;