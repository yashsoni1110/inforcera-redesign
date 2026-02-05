import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, CheckCircle, Trophy, Globe2 } from "lucide-react";
import { cn } from "../../lib/utils";

const STATS = [
  { label: "Happy Clients", value: 100, suffix: "+", icon: Users, color: "text-blue-500" },
  { label: "Projects Done", value: 250, suffix: "+", icon: CheckCircle, color: "text-emerald-500" },
  { label: "Success Rate", value: 98, suffix: "%", icon: Trophy, color: "text-yellow-500" },
  { label: "Global Presence", value: 20, suffix: "+", icon: Globe2, color: "text-purple-500" },
];

const Stats = () => {
  return (
    <section className="relative py-12 lg:py-24 z-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Main Floating Container */}
        <div className="relative rounded-[2rem] bg-card border border-border shadow-2xl overflow-hidden">

          {/* Ambient Background Glow */}
          <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent skew-x-12 pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/50">
            {STATS.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index }: { stat: any, index: number }) => {
  const ref = useRef(null);
  // use amount: 0.5 to ensure it's 50% visible before starting
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative p-6 lg:p-10 flex flex-col items-center justify-center text-center group",
      )}
    >
      {/* Icon with Pulse Effect */}
      <div className={cn(
        "mb-4 p-4 rounded-2xl bg-secondary/10 border border-border/50 group-hover:bg-secondary/20 transition-all duration-500 relative",
        stat.color
      )}>
        <stat.icon className="w-6 h-6 lg:w-8 lg:h-8" />
        {isInView && (
          <span className={cn("absolute inset-0 rounded-2xl opacity-20 animate-ping", stat.color, "bg-current")} />
        )}
      </div>

      {/* Number Display */}
      <div className="flex items-baseline gap-1">
        <div className="text-4xl lg:text-5xl font-bold font-mono text-foreground tracking-tighter">
          {isInView ? <Counter from={0} to={stat.value} duration={2.5} /> : "0"}
        </div>
        <span className={cn("text-xl lg:text-2xl font-bold", stat.color)}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-2 text-xs lg:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
        {stat.label}
      </p>
    </div>
  );
};

const Counter = ({ from, to, duration }: { from: number, to: number, duration: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: duration,
      ease: [0.32, 0.72, 0, 1], // Elegant ease-out
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      }
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef} />;
};

export default Stats;