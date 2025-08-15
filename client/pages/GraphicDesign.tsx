import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Eye, Layers, Zap, CheckCircle, ArrowRight, Image, Brush, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function GraphicDesign() {
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
            backgroundImage: `url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        {/* Animated Design Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-20 w-4 h-4 bg-pink-500 rounded-full animate-move-up-down"></div>
          <div className="absolute bottom-1/3 left-24 w-3 h-3 bg-purple-500 rounded-full animate-move-up-down-delayed"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-yellow-500 rounded-full animate-move-up-down-reverse"></div>
          <div className="absolute bottom-1/4 right-24 w-4 h-4 bg-primary rounded-full animate-move-up-down-fast"></div>

          {/* Design Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-16 gap-4 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 container mx-auto text-center max-w-full w-full">
          <div className="animate-fade-in-up px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <Palette className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Graphic Design</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Visual Stories</span>
              <span className="block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                That Inspire
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Creative visual solutions that communicate your message powerfully, engage your audience, and elevate your brand identity across all platforms and media.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                  Start Your Design Project
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

      {/* Design Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Design Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visual communication solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brush,
                title: "Marketing Materials",
                description: "Eye-catching designs for brochures, flyers, banners, and promotional content",
                features: ["Print Design", "Digital Banners", "Social Media Graphics", "Brochures & Flyers"],
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Eye,
                title: "UI/UX Design",
                description: "User-centered design for websites and applications that convert",
                features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Image,
                title: "Print Design",
                description: "Professional print materials from business cards to large format displays",
                features: ["Business Cards", "Letterheads", "Posters", "Packaging Design"],
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: Sparkles,
                title: "Digital Assets",
                description: "Digital graphics for websites, social media, and online marketing",
                features: ["Social Media Kits", "Email Templates", "Web Graphics", "Digital Illustrations"],
                color: "from-emerald-500 to-teal-500"
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

      {/* Design Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Design Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From Concept to Creation
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our structured design process ensures every visual element serves your brand's purpose and connects with your audience.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Eye,
                    title: "Discovery & Research",
                    description: "Understanding your brand, audience, and design requirements"
                  },
                  {
                    icon: Brush,
                    title: "Concept Development",
                    description: "Creating initial concepts and exploring creative directions"
                  },
                  {
                    icon: Sparkles,
                    title: "Design & Refinement",
                    description: "Crafting final designs with attention to every detail"
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
            
            {/* Design Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
                {/* Design Tools */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-card rounded-xl border border-border animate-float-slow flex items-center justify-center">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-card rounded-xl border border-border animate-float-reverse flex items-center justify-center">
                  <Brush className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-card rounded-xl border border-border animate-float-fast flex items-center justify-center">
                  <Image className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-card rounded-xl border border-border animate-float-slow flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                
                {/* Central Design Canvas */}
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Creative Vision</h3>
                    <p className="text-muted-foreground">Bringing ideas to life</p>
                  </div>
                  
                  {/* Color Swatches */}
                  <div className="absolute top-4 left-4 flex gap-1">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Design Elements */}
                  <div className="absolute bottom-4 right-4 space-y-1">
                    <div className="w-8 h-1 bg-primary/30 rounded"></div>
                    <div className="w-6 h-1 bg-primary/20 rounded"></div>
                    <div className="w-10 h-1 bg-primary/40 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Specialties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Design Specialties</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise across multiple design disciplines and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Brand Identity",
                description: "Complete brand systems including logos, colors, and guidelines"
              },
              {
                icon: Image,
                title: "Digital Marketing",
                description: "Social media graphics, web banners, and digital advertisements"
              },
              {
                icon: Brush,
                title: "Print Materials",
                description: "Business cards, brochures, posters, and packaging design"
              },
              {
                icon: Eye,
                title: "User Interface",
                description: "Clean, intuitive interfaces for web and mobile applications"
              },
              {
                icon: Layers,
                title: "Illustration",
                description: "Custom illustrations and iconography for various purposes"
              },
              {
                icon: Sparkles,
                title: "Motion Graphics",
                description: "Animated graphics and visual effects for digital media"
              }
            ].map((specialty, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                    <specialty.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{specialty.title}</h3>
                  <p className="text-muted-foreground text-sm">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Design Tools & Software</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade tools for exceptional design quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Sketch", "Adobe XD",
              "After Effects", "Canva Pro", "Procreate", "Blender", "Cinema 4D", "CorelDRAW"
            ].map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Palette className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-sm">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Recent Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A glimpse of our creative solutions across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Brand Identity", title: "Tech Startup Logo", color: "from-blue-500 to-cyan-500" },
              { category: "Web Design", title: "E-commerce Platform", color: "from-purple-500 to-pink-500" },
              { category: "Print Design", title: "Restaurant Menu", color: "from-emerald-500 to-teal-500" },
              { category: "Marketing", title: "Social Media Campaign", color: "from-orange-500 to-red-500" },
              { category: "UI/UX", title: "Mobile App Interface", color: "from-indigo-500 to-purple-500" },
              { category: "Packaging", title: "Product Packaging", color: "from-pink-500 to-rose-500" }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Palette className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">{project.category}</span>
                  <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto text-center max-w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ready to Create
              <span className="block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Visual Magic?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's bring your creative vision to life with stunning designs that captivate and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 group">
                  Start Your Design
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Full Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
