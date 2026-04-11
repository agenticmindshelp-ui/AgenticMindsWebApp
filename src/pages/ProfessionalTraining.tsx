import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Building2, Users, Target, BarChart3, Rocket, CheckCircle2,
  Monitor, BookOpen, Lightbulb, Brain, ShieldCheck, TrendingUp, ArrowRight,
  Zap, Database, Bot, Code2, Sparkles
} from "lucide-react";

const modules = [
  {
    num: 1, title: "AI Foundations", day: "Day 1",
    icon: Brain,
    goals: [
      "Understand how LLMs and generative AI actually work",
      "Learn how AI agents reason and take action",
      "Evaluate AI tools and make informed decisions",
      "Have confident conversations with technical teams",
    ],
    usecase: null,
    keyConcepts: ["LLMs", "Generative AI", "AI Agents", "Hallucinations", "Context Window", "Foundation Models"],
  },
  {
    num: 2, title: "Prompt Engineering", day: "Day 1",
    icon: Lightbulb,
    goals: [
      "Master RICE, chain-of-thought, and few-shot frameworks",
      "Produce consistent, high-quality AI outputs",
      "Apply prompting to real business workflows",
    ],
    usecase: "Generate PRDs, marketing briefs, and sales sequences in 30 minutes instead of 6–8 hours.",
  },
  {
    num: 3, title: "AI-Powered Data & Analysis", day: "Day 1",
    icon: Database,
    goals: [
      "Use AI with Excel and Google Sheets to clean and analyse data",
      "Generate instant reports from raw data exports",
      "Surface trends and flag at-risk items automatically",
    ],
    usecase: "Turn a messy data export into a clean pipeline report with trends and at-risk deals flagged.",
  },
  {
    num: 4, title: "AI Agents & Claude Skills", day: "Day 2",
    icon: Bot,
    goals: [
      "Build functional AI assistants loaded with custom context for your business",
      "Create agents that can reason, remember, and take action",
      "Deploy Claude Skills any team member can use without technical help",
    ],
    usecase: "Deploy a Skill that any team member uses to generate on-brand marketing copy without creative review.",
  },
  {
    num: 5, title: "MCPs — Connected AI Workflows", day: "Day 2",
    icon: Zap,
    goals: [
      "Connect AI agents to live tools using the Model Context Protocol",
      "Integrate with Google Drive, Gmail, and other business tools",
      "Build fully automated multi-step agentic workflows",
    ],
    usecase: "An agent that monitors customer complaints in Gmail, pulls account data, drafts a response, and posts a summary — fully automated.",
  },
  {
    num: 6, title: "Vibe Coding", day: "Day 2",
    icon: Code2,
    goals: [
      "Describe what you want in plain English and build a working app",
      "Create internal tools with zero coding experience",
      "Go from idea to demo-ready product in under an hour",
    ],
    usecase: "A product manager builds a customer feedback tracker with tagging and priority scoring in 45 minutes — ready to demo.",
  },
];
const professionalSkills = [
  { title: "Business Context Skill", desc: "Load your company's brand voice, internal processes, or client history into a Skill so every output reflects your business specifically — not a generic AI response.", tags: ["Claude Skill", "Context-Aware"] },
  { title: "Weekly Status Reporter", desc: "Compiles updates from multiple team members into a clean, formatted weekly report ready to share with leadership.", tags: ["Claude Skill", "Workflow Automation"] },
  { title: "Document Review Skill", desc: "Upload any document — a contract, PRD, brand brief, or policy — and get a structured breakdown of key points, obligations, risks, and action items tailored to what you're looking for.", tags: ["Claude Skill", "Document Analysis"] },
  { title: "Meeting Prep Assistant", desc: "Enter a meeting topic and attendees and get a tailored agenda, key questions to ask, and background context to walk in prepared.", tags: ["Claude Skill", "Workplace Automation"] },
  { title: "Client Email Drafter", desc: "Turn rough bullet points into polished, professional client emails in your brand voice — with the right tone for any situation.", tags: ["Claude Skill", "Communication"] },
  { title: "Onboarding Guide Skill", desc: "Answers new hire questions using your company's own documentation, policies, and processes — available 24/7 without HR overhead.", tags: ["Claude Skill", "Knowledge Management"] },
];

import { toast } from "sonner";
import corpImg from "@/assets/corporate-team.jpg";

const ProfessionalTraining = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", company: "",
    companySize: "", industry: "", trainingNeed: "",
    pilotInterest: false, questions: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.company) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! You're on the waitlist. We'll reach out within 2–3 weeks.");
    setFormData({ firstName: "", lastName: "", email: "", company: "", companySize: "", industry: "", trainingNeed: "", pilotInterest: false, questions: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(21_90%_48%/0.15),transparent_60%)]" />
        <div className="container-narrow relative px-4 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-primary-foreground">
              <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-bold text-accent-foreground mb-4">Live Workshop May 30–31, 2026 · Limited Seats — Register Now</span>
              <h1 className="text-4xl font-bold md:text-5xl text-balance">Professional Workshops: Transform Your Team Into AI Native Leaders</h1>

              <p className="mt-3 text-sm md:text-base opacity-75">Build AI agents, automate workflows, and drive real business results</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-6 hover:opacity-90">Sign Up for May Cohort</Button>
                </Link>
                {/* <a href="#pilot">
                  <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6">Apply for Pilot</Button>
                </a> */}
              </div>
            </div>
            <img src={corpImg} alt="Professional team collaborating on AI strategy" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding !pb-6 bg-surface">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">You Know AI Is Important. But How Do You Actually Become AI Native?</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Brain, title: "Surface-Level Usage", items: ["Use AI superficially", "Copy-paste prompts without understanding", "No integration into actual workflows", "Productivity gains are minimal"] },
              { icon: Users, title: "Lack of Expertise", items: ["No internal AI experts to guide", "Overwhelmed by tools and options", "Unclear what 'AI native' even means", "Don't know where to start"] },
              { icon: BarChart3, title: "ROI Uncertainty", items: ["Hard to measure impact", "Training feels theoretical", "Team doesn't adopt consistently", "Investment doesn't pay off"] },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
                <Icon size={28} className="text-destructive mb-3" />
                <h3 className="font-bold text-lg">{title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 mb-0 text-center font-heading text-lg font-semibold text-primary">AgenticMinds solves all three problems with a proven approach.</p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding !pt-6 bg-surface-alt">

      {/* What Makes Us Different */}
      {false && (
      <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">What Makes Us Different</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Lightbulb, title: "Real Tech Experience + Proven Teaching", desc: "Founders built AI native systems at real companies. Combine industry expertise with educational excellence." },
              { icon: Target, title: "Problem-Based, Not Tool-Based", desc: "Focus on your actual business challenges. Hands-on practice, not passive lectures. Immediate applicability." },
              { icon: TrendingUp, title: "Refined Through Teaching", desc: "Adaptable to different learning styles. Know how to make complex concepts accessible." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-surface border border-border p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 mb-4">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Why Choose Us */}
      {false && (
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Why Choose AgenticMinds?</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Proven Methodology", items: ["Problem-based learning that drives adoption", "Focus on thinking patterns, not just tools", "Real results with real students"] },
              { icon: Building2, title: "Tech Industry Expertise", items: ["Founders built AI native systems professionally", "Understand business contexts and constraints", "Stay current with rapidly evolving landscape"] },
              { icon: BarChart3, title: "Results-Focused", items: ["Emphasize ROI from day one", "Track adoption and productivity metrics", "Long-term partnership, not one-time event"] },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-xl bg-surface-alt border border-border p-8">
                <Icon size={28} className="text-accent mb-3" />
                <h3 className="font-bold text-lg">{title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {items.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Curriculum: 6 Modules</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">8 hours across 2 days — designed for complete beginners. No tech background needed.</p>
          </div>
          <div className="mt-12 space-y-6 max-w-4xl mx-auto">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.num} className="rounded-2xl border border-border bg-surface p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-accent text-accent-foreground font-bold text-sm">{mod.num}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold">{mod.title}</h3>
                        <Icon size={18} className="text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{mod.day}</span>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-bold mb-2">What You'll Learn</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {mod.goals.map((g) => <li key={g} className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-success" />{g}</li>)}
                      </ul>
                    </div>
                    {mod.usecase && (
                      <div>
                        <h4 className="text-sm font-bold mb-2">Sample Use Case</h4>
                        <p className="text-sm text-muted-foreground italic">"{mod.usecase}"</p>
                      </div>
                    )}
                    {!mod.usecase && mod.keyConcepts && (
                      <div>
                        <h4 className="text-sm font-bold mb-2">Key Concepts</h4>
                        <div className="flex flex-wrap gap-2">
                          {mod.keyConcepts.map((c) => (
                            <span key={c} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{c}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-10 py-6 hover:opacity-90">Sign Up for May Cohort</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      {false && (
      <section id="pilot" className="section-padding bg-surface-alt">
        <div className="container-narrow max-w-4xl">
          <div className="rounded-2xl gradient-accent p-8 md:p-12 text-accent-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={28} />
              <h2 className="text-2xl md:text-3xl font-bold">Join the Summer 2026 cohort</h2>
            </div>
            <p className="opacity-90">We're selecting 2–3 companies to participate in our Summer 2026 program.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Customized program design for your industry",
                "Direct access to founders",
                "Proven frameworks built from real-world experience, not theory",
                "Priority support and iteration",
                "Faster time-to-value with a structured, hands-on approach",
                "Join a vetted peer network of like-minded founders and operators"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="mt-0.5 shrink-0" />{item}</div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Requirements:</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• SMB (50–500 employees)</li>
                <li>• Commitment to full program participation</li>
                <li>• Willingness to provide feedback</li>
                <li>• Available Summer 2026</li>
                <li>• Open to being a reference client</li>
              </ul>
            </div>
            <p className="mt-4 text-sm font-bold">Timeline: Pilot programs begin Summer 2026. Very limited availability.</p>
            <a href="#waitlist" className="mt-6 inline-block">
              <Button size="lg" className="bg-primary-foreground text-primary font-bold px-8 py-6 hover:opacity-90">Apply for Pilot Program</Button>
            </a>
          </div>
        </div>
      </section>
      )}

      {/* Professional AI Skills */}
      <section className="section-padding !pt-6 bg-surface">
        <div className="container-narrow">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
              <Sparkles size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">What You'll Build</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Examples of what workshop participants build — real workplace tools that save hours every week.</p>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Each Skill is loaded with your company's context — brand guidelines, processes, client history — so outputs are always relevant to your business, not just generic AI.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {professionalSkills.map((skill) => (
              <div key={skill.title} className="rounded-2xl border border-border bg-surface-alt p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Sparkles size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-base">{skill.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{skill.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="gradient-primary text-primary-foreground text-center py-16 px-4">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Become AI Native?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">Join our May 30–31 workshop and walk away with real skills, real agents, and real results.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-10 py-6 hover:opacity-90">Sign Up for May Cohort</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      {false && (
      <section id="waitlist" className="section-padding bg-surface">
        <div className="container-narrow max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Join the Waitlist</h2>
          <p className="mt-4 text-center text-muted-foreground">Be first to know when we launch. Get early access pricing and priority scheduling.</p>
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Work Email *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="company">Company Name *</Label>
              <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Company Size</Label>
                <Select value={formData.companySize} onValueChange={(v) => setFormData({ ...formData, companySize: v })}>
                  <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                  <SelectContent>
                    {["1-50", "51-100", "101-250", "251-500", "500+"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Industry</Label>
                <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
                  <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                  <SelectContent>
                    {["Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Professional Services", "Other"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Primary Training Need</Label>
              <Select value={formData.trainingNeed} onValueChange={(v) => setFormData({ ...formData, trainingNeed: v })}>
                <SelectTrigger><SelectValue placeholder="Select need" /></SelectTrigger>
                <SelectContent>
                  {["Executive strategic planning", "Team workflow transformation", "Department-specific training", "Company-wide rollout", "Not sure yet"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="pilot" checked={formData.pilotInterest} onCheckedChange={(c) => setFormData({ ...formData, pilotInterest: !!c })} />
              <Label htmlFor="pilot" className="text-sm">Interested in pilot program?</Label>
            </div>
            <div>
              <Label htmlFor="questions">Any specific questions? (optional)</Label>
              <Textarea id="questions" value={formData.questions} onChange={(e) => setFormData({ ...formData, questions: e.target.value })} maxLength={1000} />
            </div>
            <Button type="submit" size="lg" className="w-full gradient-accent border-0 text-accent-foreground font-bold py-6 hover:opacity-90">
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>
      )}
    </div>
  );
};

export default ProfessionalTraining;
