import { motion } from "framer-motion";
import {
  Server, ShieldCheck, Feather, Cat,
  Globe, Layers, CheckCircle,
  GitBranch, Box, Code, Coffee,
  Terminal, Cpu, List
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const ALL_TECH = [
  { category: "Web Server", name: "Apache", icon: Feather, color: "text-orange-500", bg: "bg-orange-500/10" },
  { category: "Web Server", name: "Tomcat", icon: Cat, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { category: "Web Server", name: "Nginx", icon: Server, color: "text-green-500", bg: "bg-green-500/10" },
  { category: "Web Server", name: "IIS", icon: Layers, color: "text-blue-500", bg: "bg-blue-500/10" },
  { category: "Testing", name: "Jest", icon: Code, color: "text-pink-500", bg: "bg-pink-500/10" },
  { category: "Testing", name: "Selenium", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { category: "Process", name: "Git", icon: GitBranch, color: "text-red-500", bg: "bg-red-500/10" },
  { category: "CI/CD", name: "Jenkins", icon: Box, color: "text-amber-500", bg: "bg-amber-500/10" },
  { category: "CI/CD", name: "Travis CI", icon: Terminal, color: "text-teal-500", bg: "bg-teal-500/10" },
  { category: "Testing", name: "Mocha", icon: Coffee, color: "text-yellow-600", bg: "bg-yellow-600/10" },
  { category: "Web Server", name: "Caddy", icon: ShieldCheck, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { category: "Web Server", name: "Lighttpd", icon: Globe, color: "text-purple-500", bg: "bg-purple-500/10" }
];

// Duplicate the array for a seamless loop
const SCROLL_ITEMS = [...ALL_TECH, ...ALL_TECH];

// Group tech by category
const groupedTech = ALL_TECH.reduce((acc, tech) => {
  if (!acc[tech.category]) {
    acc[tech.category] = [];
  }
  acc[tech.category].push(tech);
  return acc;
}, {} as Record<string, typeof ALL_TECH>);

const Techno = () => {
  return (
    <section className="relative py-16 bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 mb-4">
          <Cpu className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] uppercase tracking-tighter font-bold text-muted-foreground">Infrastructure Stack</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Enterprise <span className="text-primary">Tooling</span>
          </h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 border-border/50 bg-secondary/20 hover:bg-secondary/40"
              >
                <List className="w-4 h-4 text-muted-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader className="mb-6">
                <SheetTitle>Technology Stack</SheetTitle>
                <SheetDescription>
                  A comprehensive list of our enterprise-grade infrastructure and tooling.
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-8">
                {Object.entries(groupedTech).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {items.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-border/50"
                        >
                          <div className={`p-2 rounded-md ${tech.bg} ${tech.color}`}>
                            <tech.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm">{tech.name}</p>
                            {/* <p className="text-xs text-muted-foreground">Industry standard</p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* --- INFINITE SCROLLER --- */}
      <div className="relative flex overflow-hidden py-4 group">
        <motion.div
          className="flex gap-4 md:gap-6 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          // Tracking: Pause animation on hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {SCROLL_ITEMS.map((tech, index) => (
            <div
              key={index}
              className="w-[240px] md:w-[280px] shrink-0 p-4 rounded-2xl bg-secondary/20 border border-border/50 backdrop-blur-md hover:bg-secondary/40 hover:border-primary/30 transition-all duration-300 group/card"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl ${tech.bg} ${tech.color} shrink-0`}>
                  <tech.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm md:text-base font-bold text-foreground truncate">
                      {tech.name}
                    </h3>
                    <Badge className="h-4 px-1.5 text-[8px] bg-primary/10 text-primary border-none">
                      {tech.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">
                    Industry standard deployment
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Masking Gradients for smooth fade-in/out edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-20" />
      </div>

      {/* Optional: Second row moving in opposite direction */}
      <div className="relative flex overflow-hidden py-4 group mt-2">
        <motion.div
          className="flex gap-4 md:gap-6 whitespace-nowrap"
          animate={{
            x: ["-50%", "0%"]
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {SCROLL_ITEMS.map((tech, index) => (
            <div
              key={`reverse-${index}`}
              className="px-6 py-3 rounded-full bg-secondary/20 border border-border/50 flex items-center gap-3 hover:border-primary/40 transition-colors"
            >
              <tech.icon className={`w-4 h-4 ${tech.color}`} />
              <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Techno;