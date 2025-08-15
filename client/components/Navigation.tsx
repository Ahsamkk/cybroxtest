import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
        <div className="text-xl md:text-2xl">
          <Link to="/">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">C</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="hover:text-primary transition-colors text-sm lg:text-base">Home</Link>
          <a href="/#services" className="hover:text-primary transition-colors text-sm lg:text-base">Services</a>
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
