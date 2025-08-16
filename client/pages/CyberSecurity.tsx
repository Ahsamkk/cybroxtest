import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, CheckCircle, ArrowRight, AlertTriangle, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function CyberSecurity() {
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
            backgroundImage: `url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/90"></div>
        </div>
        
        {/* Animated Security Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-20 w-3 h-3 bg-primary rounded-full animate-move-up-down"></div>
          <div className="absolute bottom-1/3 left-24 w-2 h-2 bg-primary rounded-full animate-move-up-down-delayed"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary rounded-full animate-move-up-down-reverse"></div>
          <div className="absolute bottom-1/4 right-24 w-3 h-3 bg-primary rounded-full animate-move-up-down-fast"></div>

          {/* Security Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-16 gap-4 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-primary/30 rounded animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 container mx-auto text-center max-w-full w-full">
          <div className="animate-fade-in-up px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Cyber Security Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Protect Your</span>
              <span className="block bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Digital Assets
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity solutions to safeguard your business from threats, ensure compliance, and build digital resilience in an ever-evolving threat landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection strategies tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "VAPT Services",
                description: "Vulnerability Assessment & Penetration Testing to identify and fix security weaknesses",
                features: ["Network Security Testing", "Web Application Testing", "Mobile App Security", "Infrastructure Assessment"]
              },
              {
                icon: Eye,
                title: "GRC Solutions",
                description: "Governance, Risk, and Compliance management to meet industry standards",
                features: ["Compliance Audits", "Risk Management", "Policy Development", "Regulatory Adherence"]
              },
              {
                icon: Users,
                title: "Security Awareness",
                description: "Training programs to build a security-conscious workforce",
                features: ["Phishing Simulations", "Security Training", "Awareness Campaigns", "Best Practices"]
              },
              {
                icon: AlertTriangle,
                title: "Social Engineering",
                description: "Testing and protection against human-based security threats",
                features: ["Social Engineering Tests", "Employee Training", "Security Protocols", "Incident Response"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 bg-background border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

      {/* Why Choose Our Security Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Security Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our cybersecurity experts use cutting-edge tools and methodologies to protect your organization from evolving cyber threats.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "24/7 Monitoring",
                    description: "Round-the-clock security monitoring and rapid incident response"
                  },
                  {
                    icon: Shield,
                    title: "Certified Experts",
                    description: "Team of certified security professionals with industry expertise"
                  },
                  {
                    icon: CheckCircle,
                    title: "Proven Track Record",
                    description: "Successfully protected businesses across various industries"
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
            
            {/* Security Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-red-500/20 rounded-3xl p-8 relative overflow-hidden">
                {/* Animated Security Icons */}
                {/* <div className="absolute top-8 left-8 p-4 bg-primary/20 rounded-lg animate-float-slow">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-8 right-8 p-4 bg-primary/20 rounded-lg animate-float-reverse">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute bottom-8 left-8 p-4 bg-primary/20 rounded-lg animate-float-fast">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute bottom-8 right-8 p-4 bg-primary/20 rounded-lg animate-float-slow">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div> */}
                
                {/* Central Security Hub */}
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Security First</h3>
                    <p className="text-muted-foreground">Your protection is our priority</p>
                  </div>
                  
                  {/* Security Scan Lines */}
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl"></div>
                  <div className="absolute inset-4 border border-primary/10 rounded-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-red-500/10 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto text-center max-w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ready to Secure Your
              <span className="block bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Digital Infrastructure?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Get a comprehensive security assessment and protect your business from cyber threats today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 group">
                  Get Security Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Emergency Support
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
