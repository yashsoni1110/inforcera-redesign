import { useState } from "react";
import {
  Monitor, Code, Smartphone, TrendingUp,
  Palette, Users, Brain, Bug,
  ArrowRight, Sparkles, Plus, Minus
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const SERVICES = [
  { id: "software", icon: Monitor, title: "Software Products", description: "Enterprise CRM, HR, and management systems built for scale.", features: ["CRM Solutions", "HR & Payroll", "Inventory", "Custom ERP"], color: "from-blue-500 to-blue-600", span: "md:col-span-2" },
  { id: "webdev", icon: Code, title: "Web Development", description: "Custom websites and portals.", features: ["Responsive", "Web Apps", "E-commerce"], color: "from-violet-500 to-violet-600", span: "md:col-span-1" },
  { id: "mobile", icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile solutions.", features: ["iOS/Android", "Cross-Platform", "PWA"], color: "from-emerald-500 to-emerald-600", span: "md:col-span-1" },
  { id: "marketing", icon: TrendingUp, title: "Online Marketing", description: "Comprehensive digital and social media marketing.", features: ["SEO", "Content Strategy", "Analytics"], color: "from-orange-500 to-orange-600", span: "md:col-span-1" },
  { id: "design", icon: Palette, title: "Creative Design", description: "UI/UX, logo, and brand identity services.", features: ["UI/UX", "Branding", "Illustrations"], color: "from-pink-500 to-pink-600", span: "md:col-span-2" },
  { id: "consulting", icon: Users, title: "Consulting", description: "Expert NetSuite and IT strategy consulting.", features: ["NetSuite", "IT Strategy", "Recruitment"], color: "from-indigo-500 to-indigo-600", span: "md:col-span-1" },
  { id: "datascience", icon: Brain, title: "Data Science", description: "AI, ML, and advanced analytics solutions.", features: ["Machine Learning", "AI Models", "Predictive"], color: "from-cyan-500 to-cyan-600", span: "md:col-span-1" },
  { id: "testing", icon: Bug, title: "Testing Services", description: "Security and performance testing solutions.", features: ["QA Automation", "Security", "Manual"], color: "from-red-500 to-red-600", span: "md:col-span-1" },
];

const OurServices = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleServices = isExpanded ? SERVICES : SERVICES.slice(0, 5);

  return (
    <section className="relative py-24 bg-background text-foreground overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl relative">
             <div className="absolute -left-12 -top-12 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent blur-2xl rounded-full" />
            <div className="flex items-center gap-3 text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4 pl-1">
              <Sparkles className="w-4 h-4" />
              <span>Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]">
              Solving complex problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">elegant code.</span>
            </h2>
          </div>

          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost"
            className="rounded-full border border-white/10 hover:bg-white/5 hover:text-foreground transition-all group"
          >
            {isExpanded ? (
              <><Minus className="mr-2 w-4 h-4" /> Show Less</>
            ) : (
              <><Plus className="mr-2 w-4 h-4 group-hover:rotate-90 transition-transform" /> View All Services</>
            )}
          </Button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={cn(
                  "group relative p-8 rounded-[2rem] border border-white/5 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 overflow-hidden flex flex-col hover:border-white/10",
                  service.span
                )}
              >
                 {/* Background Number */}
                <span className="absolute -right-4 -top-8 text-[10rem] font-bold text-foreground/[0.05] pointer-events-none select-none group-hover:scale-110 transition-transform duration-700">
                    0{index + 1}
                </span>

                {/* Icon Circle */}
                <div className={cn(
                  "shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-gradient-to-br",
                  service.color
                )}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase font-bold tracking-wider text-muted-foreground group-hover:bg-white/10 group-hover:text-foreground transition-colors">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Action */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;