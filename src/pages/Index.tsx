import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap, Monitor, Users, Brain, ShieldCheck, FolderOpen,
  Building2, Lightbulb, Target, BarChart3, Briefcase, Rocket,
  CheckCircle2, ArrowRight, Zap, BookOpen, Award,
  Eye
} from "lucide-react";
import heroImg from "@/assets/Hero-adultsnstudents2.jpg";
import corpImg from "@/assets/corporate-team.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(187_72%_44%/0.12),transparent_60%)]" />
        <div className="container-narrow relative px-4 py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" className="text-primary-foreground">
              <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold md:text-5xl lg:text-6xl text-balance leading-tight">
                Become AI Native.<br />Own Your Future.
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="mt-6 text-lg opacity-90 max-w-xl">
                Get hands-on learning from AI industry experts who build with AI every day.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-wrap gap-4">

                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6">
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
                {[
                  { icon: Award, text: "AI Industry Expert Instructors" },
                  { icon: Monitor, text: "Live Online Learning" },
                  { icon: Eye, text: "Ethical AI Foundations" },
                   { icon: Target, text: "Results-Focused Learning" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm opacity-85">
                    <Icon size={18} className="shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <img src={heroImg} alt="Diverse middle school students collaborating on AI projects" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY AI NATIVE ===== */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What Does <span className="gradient-text">"AI Native"</span> Mean?</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Most people use AI tools, but being "AI native" means thinking differently—understanding how to work WITH AI to solve problems, not just using it as a better search engine.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Traditional Approach",
                items: ["Manual research", "Individual work", "Linear thinking"],
                color: "border-border bg-muted/50",
              },
              {
                title: "Using AI Tools",
                items: ["Copy-paste prompts", "Surface-level usage", "Dependency on tutorials"],
                color: "border-border bg-muted/50",
              },
              {
                title: "AI Native Thinking",
                items: ["Problem-solving partnerships", "Workflow integration", "Agentic Intelligence"],
                color: "bg-primary text-primary-foreground ring-2 ring-secondary",
                highlight: true,
              },
            ].map((col) => (
              <div key={col.title} className={`rounded-xl border-2 p-6 ${col.color}`}>
                <h3 className={`text-lg font-bold ${col.highlight ? "text-primary-foreground" : ""}`}>{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className={col.highlight ? "text-secondary" : "text-muted-foreground"} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 mb-0 text-center font-heading text-lg font-semibold text-primary">
            <p>Think beyond Chat GPT.</p>
            <p className="mt-1">We teach AI-native thinking: how to leverage AI agents to bring your boldest ideas to life in hours, not months.</p>
          </div>
        </div>
      </section>

      {/* ===== YOUTH PROGRAMS ===== */}
      <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">For 5th–8th Graders</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Youth Programs: Real Problems, Real Solutions</h2>
          </div>

          {/* Middle School - Primary */}
          <div className="mt-12 rounded-2xl bg-surface p-8 shadow-lg border border-border">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full gradient-primary px-4 py-1 text-sm font-bold text-primary-foreground">SPRING BREAK CAMP 2026</span>
              <span className="text-sm font-bold text-muted-foreground">For 5th - 8th Graders | Apr 6th - Apr 10th, 2026 | 2:30PM - 4:00PM </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                { icon: Brain, title: "Head Start in AI", desc: "Gain the mindset of an AI-native thinker" },
                { icon: Briefcase, title: "Industry Expert Instructors", desc: "Learn from tech professionals who build with AI daily" },
                { icon: ShieldCheck, title: "Ethical AI Foundation", desc: "Critical thinking and responsible AI use in every lesson" },
                { icon: FolderOpen, title: "Hands-On Projects", desc: "Build real-world applications and AI Agents" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-surface-alt p-6">
              <h4 className="font-bold mb-3">By the end of this program, your middle schooler will:</h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm">
                {[
                  "Understand the difference between using AI tools and thinking AI native",
                  "Critically evaluate AI outputs for accuracy and appropriateness",
                  "Build real-world apps and AI Agents to showcase",
                  "Identify problems where AI can provide meaningful assistance"
                ].map((o) => (
                  <li key={o} className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" />{o}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold px-8 py-6">Enroll For Spring Break Camp</Button>
              </Link>
              <Link to="/youth-programs" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                View Full Curriculum <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CORPORATE TRAINING (EQUAL WEIGHT) ===== */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">Coming Summer 2026</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Corporate Training: Transform Your Team Into AI Native Leaders</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
              We're launching customized corporate training for small and medium sized businesses ready to transform how their teams work.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-surface-alt p-8 shadow-lg border border-border">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Who It's For */}
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2"><Users size={22} className="text-accent" /> Who It's For</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "SMB executives and teams (50–500 employees)",
                    "Companies beyond tech hubs needing AI expertise",
                    "Teams using AI superficially without strategy",
                    "Organizations ready for transformation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />{item}</li>
                  ))}
                </ul>
              </div>
              {/* What You'll Get */}
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2"><Lightbulb size={22} className="text-accent" /> What You'll Get</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "Problem-based training (not just tools)",
                    "Measurable ROI and outcomes",
                    "Customized to your industry",
                    "Taught by tech experts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {[
                { icon: BookOpen, label: "Executive workshops" },
                { icon: Users, label: "Team training programs" },
                { icon: Target, label: "Custom curriculum" },
                { icon: Monitor, label: "Online, In-Person" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg bg-surface p-4 border border-border">
                  <Icon size={20} className="text-accent shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Pilot Program Callout */}
            <div className="mt-8 rounded-xl gradient-accent p-6 text-accent-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Rocket size={20} />
                <h4 className="font-bold text-lg">Summer Cohort – June 2026 </h4>
              </div>
              <p className="text-sm opacity-90">
                Selected partners receive preferred pricing, direct access to the founder, and hands-on collaboration to embed AI strategically across their organization. This is an opportunity to move ahead of the market — not just experimenting with AI, but integrating it where it drives real impact.</p>
                </div>

            {/* CTAs - SAME SIZE as Youth CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/corporate-training">
                <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-6 hover:opacity-90">
                  Join Corporate Waitlist
                </Button>
              </Link>
              <Link to="/corporate-training">
                <Button size="lg" variant="outline" className="font-semibold px-8 py-6">Learn More About Corporate Training</Button>
              </Link>
              {/* <Link to="/corporate-training#pilot" className="text-sm font-semibold text-accent hover:underline flex items-center gap-1">
                Apply for Pilot <ArrowRight size={14} />
              </Link> */}
            </div>
          </div>

          <div className="mt-6">
            <img src={corpImg} alt="Professional team collaborating on AI strategy" className="rounded-2xl shadow-lg w-full object-cover aspect-[21/9]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
