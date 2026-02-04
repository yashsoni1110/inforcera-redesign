import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles, ShieldCheck, Headphones, Users } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

// Carousel Data
const HERO_SLIDES = [
    {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        title: "Innovative IT Solutions for Modern Enterprises",
        subtitle: "Leading IT Services Provider",
        description: "We deliver innovative technology solutions to help your business thrive in a digital world.",
    },
    {
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        title: "Seamless Connections for Global Growth",
        subtitle: "Future-Ready Technology",
        description: "Empowering businesses with scalable architectures and enterprise-grade software products.",
    },
    {
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        title: "Secure & Reliable Scalable Architectures",
        subtitle: "Elite Cybersecurity",
        description: "Protecting your digital assets with cutting-edge security and round-the-clock monitoring.",
    },
];

const FEATURES = [
    { icon: <Sparkles className="w-5 h-5" />, title: "Innovation", desc: "Creative Solutions, Unified Systems" },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Secure & Reliable", desc: "Enterprise-grade security" },
    { icon: <Headphones className="w-5 h-5" />, title: "24/7 Support", desc: "Round-the-clock assistance" },
    { icon: <Users className="w-5 h-5" />, title: "Expert Team", desc: "Industry professionals" },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden flex flex-col justify-center">
            {/* --- BACKGROUND CAROUSEL --- */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                        <img
                            src={HERO_SLIDES[currentSlide].image}
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-20">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md text-primary-foreground text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        {HERO_SLIDES[currentSlide].subtitle}
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        key={`title-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
                    >
                        {HERO_SLIDES[currentSlide].title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        key={`desc-${currentSlide}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed"
                    >
                        {HERO_SLIDES[currentSlide].description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 items-center"
                    >
                        <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-xl hover:scale-105 transition-all">
                            Get Started <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold backdrop-blur-sm bg-white/5 border-white/20 text-white hover:bg-white/10">
                            <Play className="mr-2 w-5 h-5 fill-white" /> Watch Demo
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* --- FEATURE CARDS (Bottom Overlay) --- */}
            <div className="mt-20 lg:absolute lg:bottom-12 lg:left-0 lg:right-0 z-30">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {FEATURES.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + idx * 0.1 }}
                                className="group p-6 rounded-2xl bg-background/20 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
                {HERO_SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={cn(
                            "w-1 h-12 rounded-full transition-all duration-500",
                            currentSlide === idx ? "bg-primary w-2" : "bg-white/20 hover:bg-white/40"
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;