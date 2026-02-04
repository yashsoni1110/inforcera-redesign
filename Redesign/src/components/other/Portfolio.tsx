import { motion } from "framer-motion";
import { ArrowRight, Calendar, Code2 } from "lucide-react";

// Mock Data
const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    year: "2023",
    desc: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB"],
    // Placeholder image
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    year: "2023",
    desc: "A comprehensive healthcare app for patient management and telemedicine consultations.",
    tech: ["React Native", "Firebase", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI & Analytics",
    year: "2022",
    desc: "Business intelligence dashboard with machine learning insights for predictive analytics.",
    tech: ["Python", "TensorFlow", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Portfolio = () => {
    return (
        <section className="py-24 bg-background relative">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                        Our Work
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        Our Portfolio
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover our latest projects and see how we've helped businesses achieve their digital goals.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold shadow-sm hover:shadow-md">
                        View All Projects
                    </button>
                </div>
             </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity z-10" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-20">
                     <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-bold text-primary shadow-sm">
                        {project.category}
                     </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                    </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t: string) => (
                        <span key={t} className="flex items-center gap-1 px-2 py-1 rounded-md bg-accent/50 text-[10px] font-medium text-foreground/80 border border-border/50">
                            <Code2 className="w-3 h-3 text-primary" />
                            {t}
                        </span>
                    ))}
                </div>
                
                {/* Link */}
                <div className="pt-4 border-t border-border/50 flex justify-end">
                    <button className="text-sm font-semibold text-primary flex items-center gap-2 group/btn">
                        View Case Study 
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default Portfolio;
