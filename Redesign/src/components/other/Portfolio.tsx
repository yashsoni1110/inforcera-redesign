import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { cn } from "../../lib/utils";

const PROJECTS = [
    {
        title: "E-comm Ecosystem",
        category: "Web Architecture",
        desc: "Headless commerce handling 50k+ daily transactions.",
        tech: ["Next.js", "Shopify Plus", "Redis"],
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "MediCare AI",
        category: "Mobile Health",
        desc: "HIPAA-compliant telemedicine with on-device AI analysis.",
        tech: ["React Native", "TensorFlow", "Node.js"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "FinTech Dashboard",
        category: "Data Analytics",
        desc: "Predictive analytics for high-frequency trading firms.",
        tech: ["Python", "ClickHouse", "D3.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "Smart Logistics",
        category: "IoT / Systems",
        desc: "Real-time fleet optimization with 500+ IoT nodes.",
        tech: ["Go", "MQTT", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    }
];

const Portfolio = () => {
    const sectionRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size to toggle animation
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    // Horizontal move only applied on Desktop
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

    return (
        <section
            ref={sectionRef}
            className={cn(
                "relative bg-background text-foreground",
                // Only make the section tall if NOT on mobile
                !isMobile ? "h-[400vh]" : "h-auto py-20"
            )}
        >
            {/* Sticky wrapper only active on Desktop */}
            <div className={cn(
                "w-full",
                !isMobile ? "sticky top-0 h-screen flex items-center overflow-hidden" : "relative h-auto block"
            )}>

                {/* --- HEADER --- */}
                <div className={cn(
                    "z-30 px-6",
                    !isMobile ? "absolute top-12 left-12" : "mb-12"
                )}>
                    <div className="flex items-center gap-3 text-primary mb-4">
                        <div className="h-[1px] w-12 bg-primary" />
                        <span className="text-xs font-mono tracking-widest uppercase">Portfolio</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight lg:leading-[0.8]">
                        Selected <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">Works.</span>
                    </h2>
                </div>

                {/* --- CONTENT TRACK --- */}
                <motion.div
                    style={!isMobile ? { x } : {}}
                    className={cn(
                        "flex gap-8",
                        !isMobile ? "px-[10vw]" : "flex-col px-6"
                    )}
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            isMobile={isMobile}
                        />
                    ))}

                    {/* Final CTA Card */}
                    <div className={cn(
                        "relative shrink-0 flex flex-col justify-center rounded-[2.5rem] bg-primary/5 border border-primary/10 p-10",
                        !isMobile ? "w-[40vw] h-[60vh]" : "w-full h-64"
                    )}>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">Ready to build the <span className="text-primary italic">Next</span> thing?</h3>
                        <button className="w-fit px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                            Start a Project <ExternalLink className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* --- PROGRESS BAR (Desktop Only) --- */}
                {!isMobile && (
                    <div className="absolute bottom-12 left-12 right-12 z-40 flex items-center gap-8">
                        <span className="text-xs font-mono text-muted-foreground">01</span>
                        <div className="flex-1 h-[2px] bg-border/20 rounded-full overflow-hidden">
                            <motion.div style={{ scaleX }} className="h-full bg-primary origin-left" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">04</span>
                    </div>
                )}
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index, isMobile }) => {
    return (
        <div className={cn(
            "relative shrink-0 group",
            !isMobile ? "w-[65vw] h-[65vh]" : "w-full h-[500px]"
        )}>
            {/* Index Background Label */}
            <div className="absolute -top-10 -left-4 text-[8rem] md:text-[12rem] font-bold text-foreground/5 pointer-events-none italic select-none z-0">
                0{index + 1}
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border/50 bg-secondary/5 backdrop-blur-sm">
                {/* Image */}
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 p-6 md:p-16 flex flex-col justify-end">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-xl">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest mb-4 border border-white/20">
                                {project.category}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed">
                                {project.desc}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all bg-black/40">
                                <Github className="w-5 h-5" />
                            </button>
                            <button className="px-6 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2 group/btn shadow-lg">
                                View <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Tech List (Simplified for mobile) */}
                    <div className="flex gap-4 mt-6 border-t border-white/10 pt-6">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[9px] md:text-[10px] font-mono uppercase text-white/50">
                                // {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;