import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, ShieldCheck, Headphones, Users, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const HERO_DATA = [
    {
        id: "01",
        title: "Innovative IT Solutions",
        highlight: "Modern Enterprises",
        description: "Deploying scalable architectures that turn complex challenges into competitive advantages.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        colors: {
            bg: "from-blue-600/20 via-cyan-500/10 to-background",
            accent: "text-blue-500",
            button: "bg-blue-600 hover:bg-blue-700"
        }
    },
    {
        id: "02",
        title: "Seamless Global",
        highlight: "Connectivity",
        description: "Empowering distributed teams with enterprise-grade software and sub-millisecond latency.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        colors: {
            bg: "from-purple-600/20 via-pink-500/10 to-background",
            accent: "text-purple-500",
            button: "bg-purple-600 hover:bg-purple-700"
        }
    },
    {
        id: "03",
        title: "Secure & Scalable",
        highlight: "Architectures",
        description: "Bulletproof cybersecurity meets elastic cloud infrastructure for the modern digital era.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        colors: {
            bg: "from-emerald-600/20 via-teal-500/10 to-background",
            accent: "text-emerald-500",
            button: "bg-emerald-600 hover:bg-emerald-700"
        }
    },
];

const FEATURES = [
    { icon: <Sparkles />, title: "Innovation", desc: "Unified Systems" },
    { icon: <ShieldCheck />, title: "Secure", desc: "Enterprise Grade" },
    { icon: <Headphones />, title: "24/7", desc: "Expert Support" },
    { icon: <Users />, title: "Teams", desc: "Top 1% Talent" },
];

const Hero = () => {
    const [active, setActive] = useState(0);

    // Auto-rotate logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % HERO_DATA.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const activeData = HERO_DATA[active];

    return (
        <section className="relative min-h-auto w-full bg-background overflow-hidden flex items-center justify-center pt-20 lg:pt-5">
            
            {/* --- DYNAMIC BACKGROUND --- */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className={cn(
                        "absolute inset-0 bg-gradient-to-br blur-3xl opacity-40",
                        activeData.colors.bg
                    )}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* --- LEFT: TYPOGRAPHY --- */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex gap-2">
                             {HERO_DATA.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActive(idx)}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-500",
                                        active === idx ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                                    )}
                                />
                            ))}
                        </div>
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            0{active + 1} / 0{HERO_DATA.length}
                        </span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="space-y-6"
                        >
                             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-primary w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", activeData.colors.accent.replace('text', 'bg'))}></span>
                                    <span className={cn("relative inline-flex rounded-full h-2 w-2", activeData.colors.accent.replace('text', 'bg'))}></span>
                                </span>
                                Next-Gen Systems
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-foreground">
                                {activeData.title} <br/>
                                <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40 italic pr-4", )}>
                                    {activeData.highlight}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/20 pl-6">
                                {activeData.description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button 
                                    size="lg" 
                                    className={cn(
                                        "rounded-full px-8 h-14 text-base font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-white border-0",
                                        activeData.colors.button
                                    )}
                                >
                                    Start Transforming
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" className="rounded-full px-8 h-14 text-base font-medium border-primary/20 bg-background/50 hover:bg-background/80 backdrop-blur-sm">
                                    <Play className="w-4 h-4 mr-2 fill-current" />
                                    Watch Demo
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Features Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-border/40 pt-8">
                         {FEATURES.map((f, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-xl p-4 transition-all hover:bg-secondary/20 border border-transparent hover:border-white/5">
                                <div className="text-primary mb-3 opacity-70 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 origin-left duration-300">
                                    {f.icon}
                                </div>
                                <div className="font-bold text-sm text-foreground">{f.title}</div>
                                <div className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">{f.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT: VISUAL --- */}
                <div className="relative h-[40vh] lg:h-[60vh] w-full flex items-center justify-center">
                    {/* Abstract Shapes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-[100px] animate-pulse-slow" />
                    
                    <div className="relative w-full h-full max-h-[800px] max-w-[600px] perspective-1000">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
                                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                exit={{ opacity: 0, rotateY: -15, scale: 1.1 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                                className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 ring-1 ring-black/5"
                            >
                                <img 
                                    src={activeData.image} 
                                    alt={activeData.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                
                                {/* Floating Elements */}
                                <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-white transform transition-transform hover:scale-[1.02] duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-xs font-mono font-medium tracking-wider opacity-80">ACTIVE PROJECT</span>
                                        </div>
                                        <span className="text-xs font-bold opacity-60">85% COMPLETE</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="h-full bg-white" 
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;