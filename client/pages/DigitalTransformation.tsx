import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Eye,
  Layers,
  Link2,
  CheckCircle,
  ArrowRight,
  Brush,
  Image,
  Warehouse,
  Sparkles,
  Dumbbell,
  School,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function DigitalTransformation() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full pt-28 sm:pt-32">
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-background/85"></div>
        </div>

        {/* Animated Design Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-20 w-4 h-4 bg-primary rounded-full animate-move-up-down"></div>
          <div className="absolute bottom-1/3 left-24 w-3 h-3 bg-primary rounded-full animate-move-up-down-delayed"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary rounded-full animate-move-up-down-reverse"></div>
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
              <span className="text-primary text-sm font-medium">
                Digital Transformation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Digital Solutions</span>
              <span className="block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                That Transform
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Upgrade your organization with powerful mobile and web-based
              applications built to automate workflows, streamline operations,
              and unlock real-time insights. Cybrox helps businesses move from
              manual processes to complete digital ecosystems — fast, secure,
              and scalable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group"
                >
                  Start Your Digital Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full"
        ref={addToRefs}
      >
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Digital Transformation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end strategies that drive innovation and optimize your
              digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Iron Manager",
                description:
                  "A smart, lightweight mobile app for gym owners to manage members, fees, attendance, and daily operations.",
                features: [
                  "Automated Fee Reminders",
                  "Member & Attendance Tracking",
                  "Real-time Business Analytics",
                  "Streamlined Daily Operations",
                ],
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Warehouse,
                title: "Stock Byte",
                description:
                  "A complete digital solution for laptop shops and vendors to track inventory, expenses, and sales.",
                features: [
                  "Laptop stock & inventory management",
                  "Expense & sales tracking",
                  "Business insights & reports",
                  "Smooth, error-free operations",
                ],
                color: "from-orange-500 to-red-500",
              },
              {
                icon: School,
                title: "Epoint",
                description:
                  "A smart, cross-platform school management solution to manage student attendance, fees, staff, and daily academic operations.",
                features: [
                  "Student & staff attendance tracking",
                  "Automated fee challans & reminders",
                  "Academic & administrative management",
                  "Reports & school insights",
                ],
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Link2,
                title: "Linkfy",
                description:
                  "A complete ISP management solution to manage customers, billing, complaints, and network operations efficiently and accurately.",
                features: [
                  "Customer & connection management",
                  "Automated billing & expiry reminders",
                  "New connections & service requests",
                  "Complaint & support management",
                ],
                color: "from-orange-500 to-red-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 bg-background border-border relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
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
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full"
        ref={addToRefs}
      >
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">
                  Design Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From Concept to Creation
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our structured design process ensures every visual element
                serves your brand's purpose and connects with your audience.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Eye,
                    title: "Discovery & Research",
                    description:
                      "Understanding your brand, audience, and design requirements",
                  },
                  {
                    icon: Brush,
                    title: "Concept Development",
                    description:
                      "Creating initial concepts and exploring creative directions",
                  },
                  {
                    icon: Sparkles,
                    title: "Design & Refinement",
                    description:
                      "Crafting final designs with attention to every detail",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
                {/* Design Tools */}
                {/* <div className="absolute top-8 left-8 w-16 h-16 bg-card rounded-xl border border-border animate-float-slow flex items-center justify-center">
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
                </div> */}

                {/* Central Design Canvas */}
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Creative Vision</h3>
                    <p className="text-muted-foreground">
                      Bringing ideas to life
                    </p>
                  </div>

                  {/* Color Swatches */}
                  <div className="absolute top-4 left-4 flex gap-1">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
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
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full"
        ref={addToRefs}
      >
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose Cybrox
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise in digital transformation and cybersecurity—built for
              speed, scale, and security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Digital Transformation Experts",
                description:
                  "We help businesses modernize their operations with scalable, user-friendly digital solutions that drive efficiency and growth.",
              },
              {
                icon: Image,
                title: "Security by Design",
                description:
                  "Cybersecurity is built into everything we create—from applications to infrastructure—protecting your business from modern cyber threats.",
              },
              {
                icon: Brush,
                title: "Custom Web & App Development",
                description:
                  "High-performance websites and mobile apps designed for usability, speed, and seamless user experience across all platforms.",
              },
              {
                icon: Eye,
                title: "End-to-End Solutions",
                description:
                  "From ideation and design to development, deployment, and security compliance—we handle the complete digital lifecycle.",
              },
              {
                icon: Layers,
                title: "Trusted Across Industries",
                description:
                  "Serving startups, SMEs, and enterprises with tailored solutions that align with business goals and industry requirements.",
              },
              {
                icon: Sparkles,
                title: "Innovation with Reliability",
                description:
                  "We combine modern technologies, best practices, and proven frameworks to deliver secure, future-ready digital products.",
              },
            ].map((specialty, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                    <specialty.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
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
      </section> */}

      {/* Portfolio Showcase */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
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
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 w-full" ref={addToRefs}>
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
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
