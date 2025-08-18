import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Server, Zap, CheckCircle, ArrowRight, Database, Layers, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full pt-28 sm:pt-32">
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        {/* Animated Code Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-20 w-3 h-3 bg-primary rounded-full animate-move-up-down"></div>
          <div className="absolute bottom-1/3 left-24 w-2 h-2 bg-primary rounded-full animate-move-up-down-delayed"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary rounded-full animate-move-up-down-reverse"></div>
          <div className="absolute bottom-1/4 right-24 w-3 h-3 bg-primary rounded-full animate-move-up-down-fast"></div>

          {/* Code Matrix Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-20 gap-2 h-full text-xs text-primary/30">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 container mx-auto text-center max-w-full w-full">
          <div className="animate-fade-in-up px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Web Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Craft Digital</span>
              <span className="block bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Custom websites and web applications built with modern technologies, delivering exceptional performance, scalability, and user experience across all devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Start Your Web Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Web Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development services from concept to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "React & Next.js",
                description: "Modern frontend frameworks for dynamic, high-performance web applications",
                features: ["Server-Side Rendering", "Static Generation", "SEO Optimized", "Fast Loading"],
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Server,
                title: "Full-Stack Solutions",
                description: "Complete web applications with robust backend architecture",
                features: ["API Development", "Database Design", "Authentication", "Cloud Integration"],
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Globe,
                title: "E-commerce Platforms",
                description: "Custom online stores with payment integration and inventory management",
                features: ["Payment Gateway", "Inventory System", "Admin Dashboard", "Mobile Responsive"],
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Zap,
                title: "SEO Optimized",
                description: "Websites built for search engine visibility and performance",
                features: ["Technical SEO", "Page Speed", "Meta Optimization", "Schema Markup"],
                color: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 bg-background border-border relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Modern Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built with Latest Technologies
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We use cutting-edge technologies and frameworks to deliver fast, scalable, and maintainable web solutions.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Code,
                    title: "Frontend Excellence",
                    description: "React, Next.js, TypeScript for modern user interfaces"
                  },
                  {
                    icon: Server,
                    title: "Backend Power",
                    description: "Node.js, Python, PostgreSQL for robust server solutions"
                  },
                  {
                    icon: Database,
                    title: "Cloud Infrastructure",
                    description: "AWS, Vercel, Docker for scalable deployment"
                  }
                ].map((tech, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{tech.title}</h4>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Web Development Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
                {/* Browser Windows */}
                <div className="absolute top-8 left-8 w-20 h-16 bg-card rounded-lg border border-border animate-float-slow">
                  <div className="flex gap-1 p-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="px-2">
                    <div className="w-full h-1 bg-primary/20 rounded mb-1"></div>
                    <div className="w-3/4 h-1 bg-primary/10 rounded"></div>
                  </div>
                </div>
                
                <div className="absolute top-8 right-8 w-16 h-20 bg-card rounded-lg border border-border animate-float-reverse flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                
                <div className="absolute bottom-8 left-8 w-24 h-16 bg-card rounded-lg border border-border animate-float-fast flex items-center justify-center">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                
                {/* Central Development Hub */}
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Full-Stack</h3>
                    <p className="text-muted-foreground">End-to-end solutions</p>
                  </div>
                  
                  {/* Code Lines */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="space-y-1">
                      <div className="h-1 bg-primary/20 rounded animate-pulse"></div>
                      <div className="h-1 bg-primary/10 rounded w-3/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="h-1 bg-primary/15 rounded w-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose Cybrox</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering excellence in every aspect of web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed with modern performance techniques"
              },
              {
                icon: Globe,
                title: "Responsive Design",
                description: "Perfect experience across all devices and screen sizes"
              },
              {
                icon: CheckCircle,
                title: "SEO Optimized",
                description: "Built for search engine visibility and ranking"
              },
              {
                icon: Server,
                title: "Scalable Architecture",
                description: "Designed to grow with your business needs"
              },
              {
                icon: Database,
                title: "Secure & Reliable",
                description: "Enterprise-level security and data protection"
              },
              {
                icon: Rocket,
                title: "Fast Deployment",
                description: "Quick launch with modern CI/CD pipelines"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-emerald-500/10 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto text-center max-w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Web Solution?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's create a powerful web presence that drives your business forward with modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
