import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Briefcase, FileUp, Send, UploadCloud, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/api";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      toast.error("Please attach your CV / resume.");
      return;
    }

    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("position", formData.position);
    body.append("resume", resume);

    setIsSubmitting(true);
    try {
      await api.post("/api/careers", body);
      toast.success("Successfully submitted!");
      setFormData({ name: "", email: "", phone: "", position: "" });
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      toast.error("Something went wrong submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    if (file) {
      if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
        toast.error("Please upload a PDF, DOC or DOCX file.");
        e.target.value = "";
        return;
      }
      if (file.size > MAX_RESUME_SIZE) {
        toast.error("Resume must be 5MB or smaller.");
        e.target.value = "";
        return;
      }
    }
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
        <div className="container mx-auto max-w-2xl">
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
                      placeholder="0300000000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For *</Label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="e.g. Web Developer"
                    />
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
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6 group"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
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
