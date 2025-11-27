import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesOpen(false); // Close services menu when main menu toggles
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
        <div className="text-xl md:text-2xl">
          <Link to="/">
            <div className="w-20 h-20 flex items-center justify-center">
              <img src="Main-Logo.webp" alt="Logo" className="w-20 h-20" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="hover:text-primary transition-colors text-sm lg:text-base">Home</Link>
          <div className="relative group">
            <span className="hover:text-primary transition-colors text-sm lg:text-base cursor-pointer">Services</span>
            <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link to="/cyber-security" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  Cyber Security Services
                </Link>
                <Link to="/app-development" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  App Development
                </Link>
                <Link to="/web-development" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  Web Development
                </Link>
                <Link to="/digital-transformation" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
                  Digital Transformation
                </Link>
              </div>
            </div>
          </div>
          <a href="/#about" className="hover:text-primary transition-colors text-sm lg:text-base">About</a>
          <Link to="/contact" className="hover:text-primary transition-colors text-sm lg:text-base">Contact</Link>
        </div>

        {/* Mobile Menu Button & Desktop Get Started Button */}
        <div className="flex items-center">
          {/* Get Started Button - Hidden on smaller than tablet */}
          <Link to="/contact" className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base px-3 md:px-4 py-2">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Toggle - Visible on smaller than tablet */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/cyber-security"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cyber Security Services
                  </Link>
                  <Link
                    to="/app-development"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    App Development
                  </Link>
                  <Link
                    to="/web-development"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/graphic-design"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Graphic Design
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/#about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>

            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Get Started Button */}
            <div className="pt-4 border-t border-border">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-base py-3">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


// export function Header() {
//   return (
//     <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
//         <div className="text-xl md:text-2xl">
//           <Link to="/">
//             <div className="w-20 h-20 flex items-center justify-center">
//               {/* <div className="text-xl md:text-2xl"> */}
//               <img src="Main-Logo.webp" alt="Logo" className="w-20 h-20" />
//             </div>
//           </Link>
//         </div>
//         <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//           <Link to="/" className="hover:text-primary transition-colors text-sm lg:text-base">Home</Link>
//           <div className="relative group">
//             <span className="hover:text-primary transition-colors text-sm lg:text-base cursor-pointer">Services</span>
//             <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//               <div className="p-2">
//                 <Link to="/services/cyber-security" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
//                   Cyber Security Services
//                 </Link>
//                 <Link to="/services/app-development" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
//                   App Development
//                 </Link>
//                 <Link to="/services/web-development" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
//                   Web Development
//                 </Link>
//                 <Link to="/services/graphic-design" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors">
//                   Graphic Design
//                 </Link>
//                 {/* <div className="border-t border-border my-2"></div>
//                 <Link to="/services" className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary rounded transition-colors font-medium">
//                   All Services
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//           <a href="/#about" className="hover:text-primary transition-colors text-sm lg:text-base">About</a>
//           <Link to="/contact" className="hover:text-primary transition-colors text-sm lg:text-base">Contact</Link>
//         </div>
//         <Link to="/contact">
//           <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base px-3 md:px-4 py-2">
//             Get Started
//           </Button>
//         </Link>
//       </div>
//     </nav>
//   );
// }
