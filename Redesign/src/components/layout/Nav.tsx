import { useState, useEffect } from "react";
import {
  Menu, Search, User, ChevronDown, Moon, Sun,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "../../lib/utils";
import { ADDITIONAL_LINKS, Logo, SERVICES_DATA } from "../../lib/NavData";
import { useTheme } from "../ui/theme-provider";


const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50"
            : "bg-background/60 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LEFT: Logo */}
            <Logo />

            {/* CENTER: Desktop Navigation + Search */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-center max-w-2xl mx-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className={cn(navigationMenuTriggerStyle(), "font-medium")}
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Services Mega Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent font-medium">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[720px] p-6 bg-popover/95 backdrop-blur-xl shadow-2xl border border-border/50">
                        <div className="grid grid-cols-3 gap-6">
                          {SERVICES_DATA.map((section) => (
                            <div key={section.category} className="space-y-4">
                              <div className="flex items-center gap-2 pb-3 border-b border-border/50">
                                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                                  {section.icon}
                                </div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                                  {section.category}
                                </h4>
                              </div>
                              <div className="flex flex-col gap-1">
                                {section.items.map((item) => (
                                  <NavigationMenuLink key={item.name} asChild>
                                    <a
                                      href={item.href}
                                      className="group flex items-center gap-2 px-2 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                                    >
                                      <span className="text-primary/60 group-hover:text-primary transition-colors">
                                        {item.icon}
                                      </span>
                                      <span>{item.name}</span>
                                    </a>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-border/50">
                          <a
                            href="/services/all"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                          >
                            View All Services
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </a>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {mainNavLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink
                        href={link.href}
                        className={cn(navigationMenuTriggerStyle(), "font-medium")}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Centered Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  className="w-full h-10 pl-10 pr-4 rounded-full bg-accent/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                />
              </div>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full hover:bg-accent"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-4 h-4" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* User Profile */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent"
              >
                <User className="w-4 h-4" />
              </Button>

              {/* CTA Button */}
              <Button className="hidden md:flex ml-2 rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all">
                Get Started
              </Button>

              {/* Hamburger Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden rounded-full border-border/50 hover:bg-accent"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[440px] p-0 bg-background border-border/50">
                  <MobileMenu close={() => setIsOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Mobile Search Bar (appears when toggled) */}
          {searchOpen && (
            <div className="lg:hidden pb-4 animate-in slide-in-from-top-2 duration-300">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  className="w-full h-10 pl-10 pr-4 rounded-full bg-accent/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
};



/**
 * Mobile/Tablet Menu with All Links and Categories
 */
const MobileMenu = ({ close }: { close: () => void }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-border/50">
        <Logo />

      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* Home */}
        <a
          href="/"
          onClick={close}
          className="block px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
        >
          Home
        </a>

        {/* Services Accordion */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection("services")}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
          >
            <span>Services</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                expandedSection === "services" && "rotate-180"
              )}
            />
          </button>
          {expandedSection === "services" && (
            <div className="ml-4 space-y-4 py-3 animate-in slide-in-from-top-2 duration-300">
              {SERVICES_DATA.map((category) => (
                <div key={category.category} className="space-y-2">
                  <div className="flex items-center gap-2 px-4 py-2">
                    <div className="p-1 rounded bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                      {category.category}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={close}
                        className="flex items-center gap-2 px-4 py-2 ml-4 rounded-md text-sm text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors"
                      >
                        <span className="text-primary/60">{item.icon}</span>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Nav Links */}
        <a
          href="/about"
          onClick={close}
          className="block px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
        >
          About Us
        </a>
        <a
          href="/portfolio"
          onClick={close}
          className="block px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
        >
          Portfolio
        </a>

        {/* Additional Links with Sub-menus */}
        {ADDITIONAL_LINKS.map((link) => (
          <div key={link.name} className="space-y-1">
            <button
              onClick={() => toggleSection(link.name)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
            >
              <span>{link.name}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  expandedSection === link.name && "rotate-180"
                )}
              />
            </button>
            {expandedSection === link.name && (
              <div className="ml-4 space-y-1 py-2 animate-in slide-in-from-top-2 duration-300">
                {link.subLinks.map((subLink) => (
                  <a
                    key={subLink.name}
                    href={subLink.href}
                    onClick={close}
                    className="block px-4 py-2 rounded-md text-sm text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    {subLink.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Remaining Links */}
        <a
          href="/careers"
          onClick={close}
          className="block px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
        >
          Careers
        </a>
        <a
          href="/contact"
          onClick={close}
          className="block px-4 py-3 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-border/50 space-y-4">
        <Button className="w-full rounded-full font-semibold shadow-lg">
          Get Started
        </Button>
        <div className="text-center text-xs text-muted-foreground">
          <p>hello@infocera.in</p>
          <p className="mt-1">© 2026 INFOCERA IT SOLUTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;