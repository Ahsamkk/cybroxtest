import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Tablet, Monitor, Zap, CheckCircle, ArrowRight, Code, Layers, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function AppDevelopment() {
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
            backgroundImage: `url('https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        {/* Animated Mobile Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-20 w-3 h-3 bg-blue-500 rounded-full animate-move-up-down"></div>
          <div className="absolute bottom-1/3 left-24 w-2 h-2 bg-green-500 rounded-full animate-move-up-down-delayed"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-purple-500 rounded-full animate-move-up-down-reverse"></div>
          <div className="absolute bottom-1/4 right-24 w-3 h-3 bg-primary rounded-full animate-move-up-down-fast"></div>

          {/* App Icons Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-primary/20 rounded animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 container mx-auto text-center max-w-full w-full">
          <div className="animate-fade-in-up px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <Smartphone className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">App Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Build Your</span>
              <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Mobile Vision
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Start Your App Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mobile solutions from concept to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "React Native",
                description: "Cross-platform apps with native performance and shared codebase",
                features: ["iOS & Android", "Fast Development", "Code Reusability", "Native Performance"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Code,
                title: "Flutter Development",
                description: "Google's UI toolkit for beautiful, natively compiled applications",
                features: ["Single Codebase", "Hot Reload", "Rich Widgets", "High Performance"],
                color: "from-blue-600 to-indigo-600"
              },
              {
                icon: Layers,
                title: "Native iOS/Android",
                description: "Platform-specific apps leveraging full native capabilities",
                features: ["Swift/Kotlin", "Platform Optimization", "Full API Access", "Best Performance"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Monitor,
                title: "Progressive Web Apps",
                description: "Web apps that work like native mobile applications",
                features: ["Offline Support", "Push Notifications", "App-like Experience", "Cross-Platform"],
                color: "from-green-500 to-emerald-500"
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

      {/* Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Development Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From Idea to App Store
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our proven development process ensures your app delivers exceptional user experience and meets market demands.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Layers,
                    title: "Discovery & Planning",
                    description: "Understanding your vision and creating a comprehensive project roadmap"
                  },
                  {
                    icon: Code,
                    title: "Design & Development",
                    description: "Creating intuitive UI/UX and building robust, scalable applications"
                  },
                  {
                    icon: Zap,
                    title: "Testing & Launch",
                    description: "Comprehensive testing and seamless deployment to app stores"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Development Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl p-8 relative overflow-hidden">
                {/* Device Mockups */}
                <div className="absolute top-8 left-8 w-16 h-24 bg-card rounded-lg border border-border animate-float-slow flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute top-8 right-8 w-20 h-16 bg-card rounded-lg border border-border animate-float-reverse flex items-center justify-center">
                  <Tablet className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute bottom-8 left-8 w-24 h-16 bg-card rounded-lg border border-border animate-float-fast flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-primary" />
                </div>
                
                {/* Central App Icon */}
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Cross-Platform</h3>
                    <p className="text-muted-foreground">One code, multiple platforms</p>
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <path
                      d="M 50 50 Q 100 80 150 50"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-primary/30 animate-pulse"
                    />
                    <path
                      d="M 50 150 Q 100 120 150 150"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-primary/30 animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for exceptional mobile experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Node.js",
              "Firebase", "AWS", "MongoDB", "PostgreSQL", "Redux", "GraphQL"
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Code className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-sm">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto text-center max-w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ready to Launch Your
              <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Mobile App?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Turn your app idea into reality with our expert development team and proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
