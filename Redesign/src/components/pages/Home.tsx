import Nav from "../layout/Nav";
import Hero from "../other/Hero";
import OurServices from "../other/OurServices";
import Techno from "../other/Techno";


function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Nav />
            {/* Hero Section */}
            <Hero />
            {/* Our services */}
            <OurServices />
            {/* Technology Stack */}
            <Techno />
            {/* Features Grid */}
            <section className="py-20 px-6 bg-accent/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Centered Search",
                                description: "Prominent search bar in the center for easy access on desktop, toggleable on mobile"
                            },
                            {
                                title: "Theme Toggle",
                                description: "Seamless light/dark mode switching with smooth transitions"
                            },
                            {
                                title: "Mega Menu",
                                description: "Three-column organized service menu with icons and categories"
                            },
                            {
                                title: "Mobile Optimized",
                                description: "Accordion-style hamburger menu with all links and sublinks"
                            },
                            {
                                title: "Professional Design",
                                description: "Clean, modern aesthetic with subtle animations and hover effects"
                            },
                            {
                                title: "Organized Links",
                                description: "Minimal main links with additional content in hamburger menu"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-6 rounded-xl bg-background border border-border/50 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Services Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Navigate through our comprehensive suite of software products, web development
                            services, and mobile solutions. Each category is thoughtfully organized in the
                            mega menu with visual icons and clear hierarchy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Navigation Structure</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong className="text-foreground">Desktop View:</strong> Clean horizontal
                                navigation with Home, Services (mega menu), About Us, Portfolio, centered search,
                                theme toggle, user icon, and Get Started CTA.
                            </p>
                            <p>
                                <strong className="text-foreground">Mobile View:</strong> Hamburger menu
                                containing all links including Services (accordion), Industries, Technologies,
                                Resources, Careers, and Contact Us with organized sublinks.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Software Products</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• HR & Payroll Management</li>
                                <li>• Jewellery Software</li>
                                <li>• CRM Software</li>
                                <li>• Real Estate Solutions</li>
                                <li>• Inventory Management</li>
                                <li>• Hospital Management</li>
                                <li>• School Management</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Web & Development</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Website Design</li>
                                <li>• Web Development</li>
                                <li>• CRM Development</li>
                                <li>• Software Development</li>
                                <li>• Educational Portals</li>
                                <li>• Health Care Portals</li>
                                <li>• E-commerce Solutions</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Mobile Solutions</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• iOS Development</li>
                                <li>• Android Development</li>
                                <li>• Cross-Platform Apps</li>
                                <li>• Progressive Web Apps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Spacer */}
            <div className="h-20" />
        </div>
    );
}

export default Home;