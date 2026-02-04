import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
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
  ArrowRight
} from "lucide-react";
import { cn } from "../../lib/utils";

const industries = [
  { name: "Automotive", icon: Car, desc: "Smart mobility solutions" },
  { name: "Ecommerce", icon: ShoppingCart, desc: "Next-gen digital retail" },
  { name: "Education", icon: GraduationCap, desc: "EdTech platforms" },
  { name: "Finance", icon: Landmark, desc: "Secure fintech systems" },
  { name: "Gaming", icon: Gamepad2, desc: "Immersive experiences" },
  { name: "Healthcare", icon: Stethoscope, desc: "Digital health innovations" },
  { name: "Manufacturing", icon: Factory, desc: "Industry 4.0 automation" },
  { name: "Real Estate", icon: Building2, desc: "PropTech solutions" },
  { name: "Retail", icon: Store, desc: "Omnichannel strategies" },
  { name: "Logistics", icon: Truck, desc: "Supply chain optimization" },
];

const Industry = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden perspective-1000">
      {/* Meteor Effect & Dynamic Background */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-20" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <Meteors number={15} />

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
          >
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             Specialized Domains
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight"
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Revolutionize</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Empowering businesses with domain-specific expertise and future-ready technology.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((item, index) => (
            <TiltCard key={item.name} item={item} index={index} />
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center flex justify-center">
             <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-lg font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all"
             >
                <span className="relative z-10">Discover Our Solutions</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
             </motion.a>
        </div>
      </div>
    </section>
  );
};

// 3D Tilt Card Component
const TiltCard = ({ item, index }: { item: any, index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 50 }}
            className="group relative h-56 perspective-500"
            onMouseMove={handleMouseMove}
        >
            <div
                className={cn(
                  "relative h-full w-full p-6 rounded-2xl border border-white/5",
                  "bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md", // Subtle glass
                  "group-hover:bg-white/10 group-hover:border-primary/20 transition-all duration-300",
                  "flex flex-col items-center justify-center gap-3 text-center cursor-pointer",
                  "overflow-hidden"
                )}
            >
                 {/* Spotlight Gradient */}
                <Highlight mouseX={mouseX} mouseY={mouseY} />

                {/* Icon Container */}
                <div 
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-500 ease-out relative z-10"
                >
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                {/* Text */}
                <div className="relative z-10 space-y-1">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

// Spotlight Effect Helper
function Highlight({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      style={style}
      className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    />
  );
}

// Meteor Effect Component
const Meteors = ({ number = 20 }: { number?: number }) => {
  const [meteors, setMeteors] = useState<number[]>([]);

  useEffect(() => {
    const meteorStyles = new Array(number).fill(0).map(() => Math.random());
    setMeteors(meteorStyles);
  }, [number]);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor opacity-0"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
            backgroundImage: "linear-gradient(to right, #a9a9a9, transparent)",
          }}
        />
      ))}
      <style>{`
        @keyframes meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
        }
        .animate-meteor {
          animation: meteor 5s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Industry;
