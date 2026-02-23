import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Enroll Now</h1>
          {/* <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Spring Break Camp 2026 | April 6th - April 10th | 2:30PM - 4:00PM  
          </p> */}
          <p className="mt-2 text-sm opacity-75">We respond to all inquiries within 24 hours during business days.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="flex-1 rounded-xl bg-blue-950 text-white px-8 py-5 text-center min-w-[200px]">
              <p className="text-lg font-bold">Spring Break Camp 2026</p>
              <p className="mt-1 text-sm opacity-80">April 6th – April 10th </p>
               <p className="mt-1 text-sm opacity-80">2:30PM – 4:00PM</p>
            </div>
            <div className="flex-1 rounded-xl bg-blue-950 text-white px-8 py-5 text-center min-w-[200px]">
              <p className="text-lg font-bold">Corporate AI Training </p>
              <p className="mt-1 text-sm opacity-80">Coming Summer 2026</p>
              <p className="mt-1 text-sm opacity-80">Apply for Pilot</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-10 bg-surface">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Google Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground mt-2">Want to Enroll or Have Any Questions about our programs? Fill out the form and we'll get back to you as soon as possible.</p>
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-border shadow-sm bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScKUry-HjWXP4vg3QqyuufQfzR1Rr3Rdw8KasVwlsX8jK2Wpw/viewform?embedded=true"
                  width="100%"
                  height="876"
                  style={{ border: 0 }}
                  title="Contact Us Form"
                >
                  Loading…
                </iframe>
              </div>
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
                  <p><strong>Corporate:</strong> Nationwide (online and in-person)</p>
                </div>
              </div>

              {/* <div className="rounded-xl bg-surface-alt border border-border p-6">
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
              </div> */}

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
