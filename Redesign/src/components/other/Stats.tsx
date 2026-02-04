import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, CheckCircle, Trophy, Globe2 } from "lucide-react";

const stats = [
  { label: "Happy Clients", value: 100, suffix: "+", icon: Users },
  { label: "Projects Completed", value: 250, suffix: "+", icon: CheckCircle },
  { label: "Success Rate", value: 98, suffix: "%", icon: Trophy },
  { label: "Countries Served", value: 20, suffix: "+", icon: Globe2 },
];

const Stats = () => {
  return (
    <section className="relative py-12 -mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 relative z-10">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat }: { stat: any }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
        <div ref={ref} className="p-8 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors duration-300">
            <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="w-6 h-6" />
            </div>
            
            <div className="text-3xl lg:text-4xl font-bold font-mono tracking-tight text-foreground flex items-baseline gap-1">
                {isInView ? (
                    <Counter from={0} to={stat.value} duration={2} />
                ) : (
                    <span>0</span>
                )}
                <span className="text-primary">{stat.suffix}</span>
            </div>
            
            <span className="text-sm font-medium text-muted-foreground mt-2 uppercase tracking-wider">
                {stat.label}
            </span>
        </div>
    )
}

const Counter = ({ from, to, duration }: { from: number, to: number, duration: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: duration,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = Math.round(value).toString();
            }
        });

        return () => controls.stop();
    }, [from, to, duration]);

    return <span ref={nodeRef} />;
}

export default Stats;
