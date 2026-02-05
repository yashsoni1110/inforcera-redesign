import { motion } from "framer-motion";
import {
  Server, ShieldCheck, Feather, Cat,
  Globe, Layers, CheckCircle,
  GitBranch, Box, Code, Coffee,
  Terminal, Cpu, List, Database, Cloud
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
  { category: "Web Server", name: "Lighttpd", icon: Globe, color: "text-purple-500", bg: "bg-purple-500/10" },
  { category: "Database", name: "PostgreSQL", icon: Database, color: "text-blue-400", bg: "bg-blue-400/10" },
  { category: "Cloud", name: "AWS", icon: Cloud, color: "text-orange-400", bg: "bg-orange-400/10" }
];

// Duplicate the array for a seamless loop
const SCROLL_ITEMS = [...ALL_TECH, ...ALL_TECH];
const REVERSE_ITEMS = [...ALL_TECH].reverse().concat([...ALL_TECH].reverse());

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
    <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container relative z-10 mx-auto px-4 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-white/10 mb-6 backdrop-blur-md">
          <Cpu className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Infrastructure Stack</span>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Engine</span> Room
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
             Powering enterprise solutions with battle-tested technologies and modern frameworks.
          </p>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary gap-2 mt-4"
              >
                <List className="w-4 h-4" /> View Full Stack
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto border-l-white/10 bg-background/95 backdrop-blur-xl">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-2xl font-bold">Technology Stack</SheetTitle>
                <SheetDescription>
                  Detailed breakdown of our technical capabilities.
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-8">
                {Object.entries(groupedTech).map(([category, items]) => (
                  <div key={category} className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 border-b border-white/10 pb-2">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {items.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-colors"
                        >
                          <div className={`p-2 rounded-lg ${tech.bg} ${tech.color}`}>
                            <tech.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">{tech.name}</p>
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

      {/* --- INFINITE SCROLLER 1 --- */}
      <div className="relative flex overflow-hidden py-6 group">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {SCROLL_ITEMS.map((tech, index) => (
            <TechCard key={`row1-${index}`} tech={tech} />
          ))}
        </motion.div>
        
        {/* Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />
      </div>

      {/* --- INFINITE SCROLLER 2 (Reverse) --- */}
      <div className="relative flex overflow-hidden py-4 group -mt-2 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {REVERSE_ITEMS.map((tech, index) => (
             <div
              key={`row2-${index}`}
              className="px-6 py-3 rounded-full bg-secondary/20 border border-white/5 flex items-center gap-3 backdrop-blur-sm"
            >
              <tech.icon className={`w-4 h-4 ${tech.color}`} />
              <span className="text-sm font-mono font-medium text-foreground/80">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechCard = ({ tech }: { tech: typeof ALL_TECH[0] }) => (
    <div
        className="relative w-[260px] md:w-[300px] shrink-0 p-5 rounded-2xl bg-secondary/10 border border-white/5 backdrop-blur-sm hover:bg-secondary/20 hover:border-primary/30 transition-all duration-300 group/card z-10"
    >
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${tech.bg} ${tech.color} shrink-0 ring-1 ring-inset ring-white/10`}>
                <tech.icon className="w-6 h-6" />
            </div>

            <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-foreground truncate">
                        {tech.name}
                    </h3>
                </div>
                <Badge className="w-fit h-5 px-1.5 text-[9px] bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10">
                    {tech.category}
                </Badge>
            </div>
        </div>
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
    </div>
);

export default Techno;