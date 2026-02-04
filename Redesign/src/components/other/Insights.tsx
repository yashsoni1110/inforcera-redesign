import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const insights = [
  {
    category: "Technology",
    date: "17-06-2025",
    title: "Logistics for Leaders: Smart Strategies For Vehicle Relocation",
    excerpt: "For business leaders and fleet managers, vehicle relocation is a recurring challenge that requires business intelligence...",
    tags: ["Logistics", "Vehicle", "Strategy"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Software Training",
    date: "12-06-2025",
    title: "Discover Key Insights About The Automation Software Testing...",
    excerpt: "Key Things To Know About Automation Software Testing Course. There has been a huge demand for automation testing...",
    tags: ["Testing", "Automation", "Training"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Development",
    date: "05-06-2025",
    title: "The Future of Web Development: Trends to Watch in 2026",
    excerpt: "Exploring the rise of AI-driven development, WebAssembly, and edge computing in modern web apps...",
    tags: ["Web", "Future", "Trends"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Insights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = 400; // Card width approx
        current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 -skew-x-12 -z-10 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/3 space-y-8">
                <div className="p-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-xl shadow-primary/20">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                        Our <span className="block text-primary">Insights</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-primary rounded-full" />
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Stay updated with the latest trends, strategies, and technological advancements from our experts.
                    </p>
                </div>
                
                <div className="flex gap-4">
                    <button onClick={() => scroll("left")} className="p-3 rounded-full border border-border bg-background hover:bg-accent hover:text-primary transition-all">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => scroll("right")} className="p-3 rounded-full border border-border bg-background hover:bg-accent hover:text-primary transition-all">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <button className="hidden lg:flex px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25 transition-all">
                    View All Articles
                </button>
            </div>

            {/* Right Carousel */}
            <div className="lg:w-2/3">
                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {insights.map((item, index) => (
                        <InsightCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
            
             <button className="lg:hidden w-full px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg">
                    View All Articles
             </button>
        </div>
      </div>
    </section>
  );
};

const InsightCard = ({ item, index }: { item: any, index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] sm:w-[350px] snap-center group rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
        >
             <div className="relative h-48 overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 rounded-full bg-primary text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                        {item.category}
                     </span>
                </div>
             </div>
             
             <div className="p-6 flex flex-col h-[280px]">
                 <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                     <span className="w-2 h-2 rounded-full bg-primary/50" />
                     {item.date}
                 </div>
                 
                 <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                     {item.title}
                 </h3>
                 
                 <p className="text-sm text-muted-foreground line-clamp-3 mb-auto">
                     {item.excerpt}
                 </p>
                 
                 <div className="pt-4 mt-4 border-t border-border/50 flex flex-wrap gap-2">
                     {item.tags.map((tag: string) => (
                         <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-accent text-muted-foreground">
                             #{tag}
                         </span>
                     ))}
                 </div>
                 
                 <div className="mt-4 flex justify-end">
                     <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                         Read More <ArrowRight className="w-4 h-4" />
                     </span>
                 </div>
             </div>
        </motion.div>
    )
}

export default Insights;
