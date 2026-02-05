import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, ShieldCheck, Headphones, Users, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const HERO_DATA = [
    {
        id: "01",
        title: "Innovative IT Solutions",
        highlight: "Modern Enterprises",
        description: "Deploying scalable architectures that turn complex challenges into competitive advantages.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        color: "from-blue-600 to-cyan-500"
    },
    {
        id: "02",
        title: "Seamless Global",
        highlight: "Connectivity",
        description: "Empowering distributed teams with enterprise-grade software and sub-millisecond latency.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        color: "from-purple-600 to-pink-500"
    },
    {
        id: "03",
        title: "Secure & Scalable",
        highlight: "Architectures",
        description: "Bulletproof cybersecurity meets elastic cloud infrastructure for the modern digital era.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        color: "from-emerald-600 to-teal-500"
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
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen w-full bg-background overflow-hidden pb-12 flex items-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* --- LEFT: NAVIGATION & INDICATORS --- */}
                <div className="hidden lg:flex lg:col-span-1 flex-col gap-8">
                    {HERO_DATA.map((item, idx) => (
                        <button
                            key={item.id}
                            onClick={() => setActive(idx)}
                            className={cn(
                                "group flex flex-col items-start transition-all duration-300",
                                active === idx ? "opacity-100" : "opacity-30 hover:opacity-50"
                            )}
                        >
                            <span className="text-xs font-mono text-primary mb-1">{item.id}</span>
                            <div className={cn(
                                "h-[2px] bg-primary transition-all duration-500",
                                active === idx ? "w-12" : "w-6 group-hover:w-8"
                            )} />
                        </button>
                    ))}
                </div>

                {/* --- CENTER: CONTENT --- */}
                <div className="lg:col-span-6 flex flex-col pt-8 lg:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/50 border border-border/50 text-foreground text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                System Operational
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] mb-6">
                                {HERO_DATA[active].title} <br />
                                <span className={cn("text-transparent bg-clip-text ", HERO_DATA[active].color)}>
                                    {HERO_DATA[active].highlight}
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                                {HERO_DATA[active].description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-12 sm:h-14 text-base group shadow-lg shadow-primary/20">
                                    Start Project
                                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button variant="ghost" className="text-foreground hover:bg-secondary/80 gap-2 h-12 sm:h-14 px-6 rounded-xl">
                                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-background">
                                        <Play className="w-3 h-3 fill-foreground ml-0.5" />
                                    </div>
                                    View Method
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Features Grid (Responsive) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 sm:mt-16 border-t border-border pt-8">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="flex flex-col gap-2 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                                <div className="text-primary w-5 h-5">{f.icon}</div>
                                <div className="text-foreground font-semibold text-sm">{f.title}</div>
                                <div className="text-muted-foreground text-xs">{f.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT: INTERACTIVE IMAGE WINDOW --- */}
                <div className="lg:col-span-5 relative group mt-8 lg:mt-0">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50 rounded-[3rem]" />
                    <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[2rem] border border-border shadow-2xl bg-card">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={active}
                                src={HERO_DATA[active].image}
                                initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                                animate={{ scale: 1, filter: "grayscale(0%)" }}
                                exit={{ scale: 1.1, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Floating Micro-Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-xl bg-background/80 border border-border rounded-2xl flex items-center justify-between shadow-lg"
                        >
                            <div>
                                <p className="text-foreground text-sm font-bold">Industry Standard</p>
                                <p className="text-muted-foreground text-xs">ISO 27001 Certified</p>
                            </div>
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;