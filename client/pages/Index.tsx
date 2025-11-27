import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Palette, Zap, Users, Star, CheckCircle, Globe, Rocket, Eye, Monitor, Database, Shield, ChartColumnIncreasing } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

export default function Index() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="w-full">{/* Content wrapper without min-h-screen since Layout handles that */}

      {/* Hero Section */}
     <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full pt-28 sm:pt-32">
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/28428588/pexels-photo-28428588.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-20 w-2 h-2 bg-red-800 rounded-full animate-move-up-down"></div>
          <div className="absolute bottom-1/3 left-24 w-2 h-2 bg-red-800 rounded-full animate-move-up-down-delayed"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-red-800 rounded-full animate-move-up-down-reverse"></div>
          <div className="absolute bottom-1/4 right-24 w-2 h-2 bg-red-800 rounded-full animate-move-up-down-fast"></div>

          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="border-r border-b border-primary/20 animate-grid-fade"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 container mx-auto text-center max-w-full w-full">
          <div className="animate-fade-in-up px-4 sm:px-6 lg:px-8">
            {/* <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-xs sm:text-sm font-medium">Digital Agency</span>
            </div> */}

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pb-4 mb-4 sm:mb-6 leading-tight">
              <span className="block text-foreground">Secure Path To </span>
              {/* <span className="block bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent"> */}
              <span className="block text-red-400">
                Digital Growth
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              We protect your online presence with cutting-edge cybersecurity solutions, while also crafting innovative web and mobile applications to drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground group w-full sm:w-auto">
                  {/* <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> */}
                  Book Meeting
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              {[
                { number: "25+", label: "Projects Completed" },
                { number: "25+", label: "Happy Clients" },
                { number: "24/7", label: "Support" },
                { number: "99%", label: "On-Time Delivery" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/50 opacity-0 w-full"
        ref={addToRefs}
      >
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-primary text-xs sm:text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Services We Provide</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Comprehensive digital solutions designed to elevate your brand and accelerate your growth in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Cyber Security Services",
                description: "Protecting your digital assets and ensuring compliance with industry standards",
                features: ["VAPT", "GRC","Security Awareness","Social Engineering"],
                color: "from-orange-500 to-red-500",
                link: "/cyber-security"
              },
              {
                icon: Smartphone,
                title: "App Development", 
                description: "Native and cross-platform mobile applications for iOS and Android platforms",
                features: ["React Native", "Flutter Development", "Native iOS/Android", "Progressive Web Apps"],
                color: "from-orange-500 to-red-500",
                link: "/app-development"
              },
              {
                icon: Code,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices",
                features: ["React & Next.js", "Full-Stack Solutions", "E-commerce Platforms", "SEO Optimized"],
                color: "from-orange-500 to-red-500",
                link: "/web-development"
              },
              {
                icon: Eye,
                title: "Digital Transformation",
                description: "Transforming your business through innovative digital solutions that engages your audience.",
                features: ["Iron Manager", "Stock Byte", "Linkfy", "EPoint"],
                color: "from-orange-500 to-red-500",
                link: "/graphic-design"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 bg-background border-border relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <Link to={service.link}>
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <service.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Why Choose CYBROX</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Deliver Digital Excellence
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our team combines technical expertise with creative vision to deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Rocket,
                    title: "Fast Delivery",
                    description: "Quick turnaround times without compromising on quality"
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Skilled professionals with years of industry experience"
                  },
                  {
                    icon: ChartColumnIncreasing,
                    title: "Value Added",
                    description: "Securing your digital future"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Visual Section */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-red-500/20 rounded-3xl p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 gap-2 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="border border-primary/30 rounded animate-pulse"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Tech Icons Floating */}
                  <div className="absolute top-8 left-8 p-3 bg-primary/10 rounded-lg animate-float-slow">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-8 right-8 p-3 bg-primary/10 rounded-lg animate-float-reverse">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-8 left-8 p-3 bg-primary/10 rounded-lg animate-float-fast">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-8 right-8 p-3 bg-primary/10 rounded-lg animate-float-slow">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Central Content */}
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                    <p className="text-muted-foreground">Let's build something amazing together</p>
                  </div>
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <path
                      d="M 50 50 Q 100 80 150 50"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-primary/20 animate-pulse"
                    />
                    <path
                      d="M 50 150 Q 100 120 150 150"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-primary/20 animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-red-500/10 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto text-center max-w-full">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
              Let's collaborate to bring your vision to life with innovative design and development solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 group w-full sm:w-auto">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/923148197060?text=${encodeURIComponent("Hello! I want to know more.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[99] bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.355 5.514 0 12.057 0c3.198 0 6.2 1.248 8.477 3.524a11.89 11.89 0 0 1 3.521 8.477c-.001 6.542-5.355 11.897-11.898 11.897-2.091 0-4.132-.547-5.918-1.588L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.437 9.889-9.885.002-5.449-4.435-9.887-9.884-9.889-5.449-.002-9.886 4.435-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.745-.984zm11.387-5.464c-.074-.123-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413z"/>
        </svg>
      </a>


    </div>
  );
}
