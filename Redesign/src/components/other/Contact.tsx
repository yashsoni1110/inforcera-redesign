import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../../lib/utils";

const Contact = () => {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
             {/* Background Effects */}
             <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/2" />
             
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Content */}
                    <div className="space-y-8">
                         <div className="space-y-4">
                             <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Business?</span>
                             </h2>
                             <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                                Let's discuss how our innovative IT solutions can drive your business forward. Get in touch with our experts today.
                             </p>
                         </div>

                         <div className="space-y-6">
                             <ContactItem 
                                icon={Phone} 
                                title="Call Us" 
                                value="+91 8882824948" 
                                href="tel:+918882824948" 
                             />
                             <ContactItem 
                                icon={Mail} 
                                title="Email Us" 
                                value="info@infocera.in" 
                                href="mailto:info@infocera.in" 
                             />
                             <ContactItem 
                                icon={MapPin} 
                                title="Visit Us" 
                                value="First Floor, L29-L34, Block L, Connaught Place, New Delhi, Delhi - 110001" 
                             />
                         </div>
                    </div>

                    {/* Right: Glass Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                    >
                         <h3 className="text-2xl font-bold mb-6 text-foreground">Get Started Today</h3>
                         
                         <form className="space-y-5">
                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                                 <input 
                                    type="text" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="John Doe"
                                 />
                             </div>
                             
                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                                 <input 
                                    type="email" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="john@example.com"
                                 />
                             </div>
                             
                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-muted-foreground ml-1">Phone Number</label>
                                 <input 
                                    type="tel" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="+91 9999999999"
                                 />
                             </div>
                             
                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-muted-foreground ml-1">Tell us about your project</label>
                                 <textarea 
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                    placeholder="I need a web application for..."
                                 />
                             </div>
                             
                             <div className="pt-2">
                                <button type="button" className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 group">
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                             </div>
                         </form>
                    </motion.div>
                </div>
             </div>
        </section>
    );
};

const ContactItem = ({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href?: string }) => {
    const Component = href ? 'a' : 'div';
    return (
        <Component href={href} className={cn("flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 group cursor-default", href && "cursor-pointer")}>
             <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                 <Icon className="w-6 h-6" />
             </div>
             <div>
                 <h4 className="font-semibold text-foreground text-lg mb-0.5">{title}</h4>
                 <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {value}
                 </p>
             </div>
        </Component>
    )
}

export default Contact;
