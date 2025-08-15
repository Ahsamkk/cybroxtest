import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
        <div className="text-xl md:text-2xl">
          <Link to="/">
            <div className="w-20 h-20 flex items-center justify-center">
              {/* <div className="text-xl md:text-2xl"> */}
              <img src="Main-Logo.webp" alt="Logo" className="w-20 h-20" />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="hover:text-primary transition-colors text-sm lg:text-base">Home</Link>
          <div className="relative group">
            <span className="hover:text-primary transition-colors text-sm lg:text-base cursor-pointer">Services</span>
            <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link to="/services/cyber-security" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  Cyber Security Services
                </Link>
                <Link to="/services/app-development" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  App Development
                </Link>
                <Link to="/services/web-development" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  Web Development
                </Link>
                <Link to="/services/graphic-design" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  Graphic Design
                </Link>
                {/* <div className="border-t border-border my-2"></div>
                <Link to="/services" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors font-medium">
                  All Services
                </Link> */}
              </div>
            </div>
          </div>
          <a href="/#about" className="hover:text-primary transition-colors text-sm lg:text-base">About</a>
          <Link to="/contact" className="hover:text-primary transition-colors text-sm lg:text-base">Contact</Link>
        </div>
        <Link to="/contact">
          <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base px-3 md:px-4 py-2">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
