import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-card/30 w-full">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="Main-Logo.webp" alt="Logo" className="w-20 h-20" />
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Transforming ideas into digital reality through innovative design and development solutions that drive growth.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/cybrox_s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                  <span className="text-xs sm:text-sm font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25-.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/>
                  </svg></span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/cybrox-solution/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                  <span className="text-xs sm:text-sm font-bold">in</span>
                </div>
              </a>
              </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
              <li><Link to="cyber-security" className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Cyber Security Services</Link></li>
              <li><Link to="app-development" className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">App Development</Link></li>
              <li><Link to="web-development" className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Web Development</Link></li> 
              <li><Link to="graphic-design" className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Graphic Design</Link></li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base break-all">Info@cybrox.com</li>
              <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">03278423909</li>
              <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">E7/12, jahangir road karachi, 74800</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm sm:text-base text-center md:text-left">
            © 2025 Cybrox. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
