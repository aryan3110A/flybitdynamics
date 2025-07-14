import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "FAQs", href: "/faqs" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="FLYBIT Dynamics" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive(item.href) 
                    ? "text-primary" 
                    : "text-[#3D473B] hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact"
            onClick={() => window.scrollTo(0, 0)}>            <Button variant="default" className="btn-glow">
              <Phone className="w-4 h-4 mr-2" />
              Book a Show
            </Button>
            </Link>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#3D473B]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-5">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black backdrop-blur-md rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    isActive(item.href) 
                      ? "text-primary" 
                      : "text-white/90 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to={"/contact"}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}>
                <Button variant="default" className="btn-glow w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Book a Show
                </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}