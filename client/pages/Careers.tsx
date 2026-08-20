import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, FileUp, Send, UploadCloud, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData, resume);
    alert("Thank you for applying! We'll review your application and get back to you soon.");
    setFormData({ name: "", email: "", phone: "", position: "" });
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResume(file);
  };

  const removeFile = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="w-full">
      <section
        className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 w-full opacity-0"
        ref={addToRefs}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-primary text-xs sm:text-sm font-medium">
                Careers
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We're always looking for talented people to help us build a
              secure, innovative digital future. Fill out the form below to
              apply.
            </p>
          </div>

          <Card className="p-8 sm:p-12 bg-card/30 border-border">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For *</Label>
                    <Select
                      value={formData.position}
                      onValueChange={(value) =>
                        setFormData({ ...formData, position: value })
                      }
                    >
                      <SelectTrigger className="bg-background/50 border-border focus:border-primary">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cyber-security-analyst">
                          Cyber Security Analyst
                        </SelectItem>
                        <SelectItem value="web-developer">
                          Web Developer
                        </SelectItem>
                        <SelectItem value="app-developer">
                          App Developer
                        </SelectItem>
                        <SelectItem value="graphic-designer">
                          Graphic Designer
                        </SelectItem>
                        <SelectItem value="digital-marketing">
                          Digital Marketing Specialist
                        </SelectItem>
                        <SelectItem value="business-development">
                          Business Development
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Upload CV / Resume *</Label>
                  <label
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg bg-background/50 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer px-6 py-8 text-center"
                  >
                    <UploadCloud className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium">
                      Click to upload your CV / Resume
                    </span>
                    <span className="text-xs text-muted-foreground">
                      PDF, DOC or DOCX (max 5MB)
                    </span>
                    <input
                      ref={fileInputRef}
                      id="resume"
                      name="resume"
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  {resume && (
                    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background/50 px-4 py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <FileUp className="h-5 w-5 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">
                            {resume.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(resume.size)}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        aria-label="Remove file"
                        className="p-1 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6 group"
                >
                  Submit Application
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
