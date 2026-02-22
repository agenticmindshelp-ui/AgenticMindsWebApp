import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import {
  CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin,
  Clock, Linkedin, Twitter, Facebook, Instagram, Youtube, ExternalLink
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // NOTE TO USER: Replace this URL with your Google Apps Script Web App URL
    // after following the instructions I will provide.
    const SCRIPT_URL = "";

    try {
      if (!SCRIPT_URL) {
        // Mock successful submission if no URL is provided yet
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        return;
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      toast.error("Fixed backend integration: Please configure the SCRIPT_URL.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <section className="gradient-primary text-primary-foreground section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Thank You!</h1>
            <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
              Your message has been received. We'll get back to you within 24 hours.
            </p>
          </div>
        </section>
        <section className="section-padding bg-surface">
          <div className="container-narrow text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Message Sent Successfully</h2>
            <p className="text-muted-foreground mb-8 text-balance">
              We've received your inquiry and our team is already on it. Check your email for a confirmation shortly.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline">
              Send Another Message
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Have questions about our programs? Want to discuss custom solutions? We're here to help.
          </p>
          <p className="mt-2 text-sm opacity-75">We respond to all inquiries within 24 hours during business days.</p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Custom Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground mt-2">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-border shadow-sm">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select name="inquiryType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="youth">Youth Programs (5th-8th Grade)</SelectItem>
                      <SelectItem value="corporate">Corporate Training</SelectItem>
                      <SelectItem value="partnership">Partnerships / Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="newsletter" name="newsletter" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="newsletter"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Keep me updated on new programs and AI news
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full sm:w-auto px-8" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-xl bg-surface-alt border border-border p-6">
                <h3 className="font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:AgenticMindsHelp@gmail.com" className="text-primary hover:underline">
                        AgenticMindsHelp@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                      <p className="text-muted-foreground">480-296-1631 | 540-556-3262</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">Mon–Fri, 9am–6pm PT</p>
                      <p className="text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">San Francisco Bay Area, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-surface-alt border border-border p-6">
                <h3 className="font-bold mb-4">Service Area</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Youth Programs:</strong> Bay Area (online)</p>
                  <p><strong>Corporate:</strong> Nationwide (online)</p>
                </div>
              </div>

              <div className="rounded-xl bg-surface-alt border border-border p-6">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
                <h3 className="font-bold mb-2">Partnerships & Media</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Interested in collaborating? We're open to partnerships with schools, educational organizations, tech companies, and community groups.
                </p>
                <p className="text-sm text-muted-foreground">Press inquiries and interview requests welcome.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
