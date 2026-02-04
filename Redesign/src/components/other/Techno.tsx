import { motion } from "framer-motion";
import { 
  Server, ShieldCheck, Feather, Cat, 
  Globe, Layers, CheckCircle, 
  GitBranch, Box, Code, Coffee,
  Sparkles, Terminal, Cpu
} from "lucide-react";
import { Button } from "../ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const ALL_TECH = [
  // Web Server
  {
    category: "Web Server",
    name: "Apache",
    desc: "Robust & reliable open-source web server",
    icon: Feather,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    category: "Web Server",
    name: "Tomcat",
    desc: "Java Servlet Container & Web Server",
    icon: Cat,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    category: "Web Server",
    name: "Nginx",
    desc: "High-performance Load Balancer & Server",
    icon: Server,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  {
    category: "Web Server",
    name: "IIS",
    desc: "Flexible & Secure Microsoft Server",
    icon: Layers,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  
  // Testing & Process
  {
    category: "Testing",
    name: "Jest",
    desc: "Delightful JavaScript Testing Framework",
    icon: Code,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20"
  },
  {
    category: "Testing",
    name: "Selenium",
    desc: "Standard for Browser Automation",
    icon: CheckCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    category: "Process",
    name: "Git",
    desc: "Distributed Version Control System",
    icon: GitBranch,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    category: "CI/CD",
    name: "Jenkins",
    desc: "Leading Open Source Automation Server",
    icon: Box,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    category: "CI/CD",
    name: "Travis CI",
    desc: "Test and Deploy with Confidence",
    icon: Terminal,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20"
  },
  {
    category: "Testing",
    name: "Mocha",
    desc: "Feature-rich JavaScript Test Framework",
    icon: Coffee,
    color: "text-yellow-600",
    bg: "bg-yellow-600/10",
    border: "border-yellow-600/20"
  },
  {
    category: "Web Server",
    name: "Caddy",
    desc: "The Ultimate Server with Automatic HTTPS",
    icon: ShieldCheck,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  },
  {
    category: "Web Server",
    name: "Lighttpd",
    desc: "Security, Speed, Compliance, & Flexibility",
    icon: Globe,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  }
];

const Techno = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Modern Tech</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              We leverage enterprise-grade technologies to build scalable, secure, and high-performance solutions for your business.
            </p>
          </motion.div>
        </div>

        {/* Carousel Section */}
        <div className="relative px-8 lg:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {ALL_TECH.map((tech, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="h-full p-1">
                    <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${tech.bg} ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                            <tech.icon className="w-6 h-6" />
                          </div>
                          <Badge variant="outline" className="bg-background/50 text-muted-foreground border-border/50">
                            {tech.category}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="space-y-3 flex-grow">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {tech.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tech.desc}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="pt-6 mt-4 border-t border-border/50">
                          <Button 
                            variant="ghost" 
                            className="w-full text-muted-foreground hover:text-foreground hover:bg-accent justify-between group/btn p-0 h-auto font-medium"
                          >
                            Explore
                            <Sparkles className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity text-primary" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 border-border/50 text-foreground hover:text-primary hover:border-primary/50 hidden md:flex" />
            <CarouselNext className="-right-12 border-border/50 text-foreground hover:text-primary hover:border-primary/50 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Techno;
