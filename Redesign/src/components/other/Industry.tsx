import type { useRef, useState, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  Car,
  ShoppingCart,
  GraduationCap,
  Landmark,
  Gamepad2,
  Stethoscope,
  Factory,
  Building2,
  Store,
  Truck,
} from "lucide-react";
import { cn } from "../../lib/utils";

const industries = [
  { name: "Automotive", icon: Car },
  { name: "Ecommerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Landmark },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Manufacturing", icon: Factory },
  { name: "Real Estate", icon: Building2 },
  { name: "Retail", icon: Store },
  { name: "Logistics", icon: Truck },
];

const Industry = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden perspective-1000">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 opacity-60 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 backdrop-blur-md mb-6"
          >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Our Expertise
             </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="text-4xl md:text-7xl font-bold text-foreground tracking-tight"
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 animate-gradient-x">Empower</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Transforming businesses across sectors with next-generation technology and tailored digital solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((item, index) => (
            <TiltCard key={item.name} item={item} index={index} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="group relative px-8 py-4 bg-foreground text-background font-bold rounded-full text-lg shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all overflow-hidden"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Explore All Industries
                    <Truck className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.button>
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ item, index }: { item: any, index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 50 }}
            className="group relative h-48 perspective-500"
            onMouseMove={handleMouseMove}
        >
             <div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 group-hover:scale-95" 
             />

            <div
                className={cn(
                  "relative h-full w-full p-6 rounded-2xl border border-white/5",
                  "bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl", // Premium glass
                  "group-hover:border-primary/30 transition-colors duration-300",
                  "flex flex-col items-center justify-center gap-5 text-center cursor-pointer",
                  "overflow-hidden shadow-sm"
                )}
            >
                 {/* Spotlight Gradient using Motion Templates for performance */}
                <Highlight mouseX={mouseX} mouseY={mouseY} />

                <div 
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-all duration-400 ease-out relative z-10"
                >
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-semibold text-lg text-foreground/90 group-hover:text-primary transition-colors relative z-10">
                  {item.name}
                </h3>
            </div>
        </motion.div>
    )
}

function Highlight({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      style={style}
      className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    />
  );
}

export default Industry;
