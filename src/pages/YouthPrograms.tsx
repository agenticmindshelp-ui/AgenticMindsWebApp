import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap, Monitor, Users, Brain, ShieldCheck, FolderOpen,
  CheckCircle2, ArrowRight, Briefcase, BookOpen, Lightbulb, Palette,
  Search, Zap, Award, Star, ChevronDown, Bot, Rocket, Gamepad2, Sparkles, Trophy
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-students.jpg";

const modules = [
  {
    num: 1, title: "Introduction to AI Native Thinking", weeks: "Day 1",
    goals: ["What is Artificial Intelligence?", "When can AI help solve problems?", "Difference between human and machine intelligence", "Exploration of ethical considerations"],
    project: "AI or Not AI? Live Quiz",
    skills: "AI fundamentals, Analytical Reasoning, Speaking Confidence"
  },
  {
    num: 2, title: "How Machines Learn?", weeks: "Day 2",
    goals: ["What is Machine Learning?", "Understand concepts of training data, testing, and model accuracy", "Understand why data quality and quantity matters for AI performance"],
    project: "Successfully train a working, image recognition, machine learning model using Google Teachable Machine",
    skills: "Systems Thinking, Logical Reasoning, Data Quality"
  },
  {
    num: 3, title: "Generative AI", weeks: "Day 3",
    goals: ["What is Generative AI?", "Understand Basics of Prompt Engineering", "Recognition of hallucinations and errors"],
    project: "Design Your Personalized AI-Agent Learning Assistant",
    skills: "Clear Prompting, Digital Responsibility, Fact Checking"
  },
  {
    num: 4, title: "AI Agents for Productivity and Organization", weeks: "Day 4",
    goals: ["Difference between AI Agents and Chatbots", "Understand AI Agent Decision Making", "How to automate repetitive work?", "Where can autonomous agents go wrong?"],
    project: "Build an AI Agent that understands what you need and emails you a to-do list to achieve a successful outcome",
    skills: "Agent Understanding, Decision Sequencing, Risk Assessment"
  },
  {
    num: 5, title: "Vibecoding Apps", weeks: "Day 5",
    goals: ["Understand how AI assists in generating code", "Difference between AI helping a coder vs AI coding autonomously", "How to present completed work professionally"],
    project: "Build and launch a working website",
    skills: "Idea Articulation, AI Industry awareness, Presentation"
  },
];

const faqs = [
  { q: "Is this just teaching my child to rely on ChatGPT for homework?", a: "No. We teach critical thinking and problem-solving WITH AI, not dependency ON AI. Students learn when AI is appropriate, how to verify outputs, and how to maintain their own thinking and creativity." },
  { q: "Is this more screen time I should be worried about?", a: "Our sessions are structured, educational, and interactive—not passive consumption. Students engage in active problem-solving, collaborate with peers, and create meaningful projects. One hour per week is focused learning time." },
  { q: "What if my child has no coding or technical experience?", a: "Perfect! No prior experience needed. We start from the beginning and build understanding progressively. Our focus is on thinking patterns, not technical coding skills." },
  { q: "How do you ensure online safety?", a: "All sessions are supervised, use secure platforms, and follow strict privacy protocols. We comply with COPPA regulations. We recommend parent supervision for the first session." },
  { q: "How do you teach ethical AI use?", a: "Ethics are integrated throughout, not a single lesson. We discuss academic integrity, privacy, bias recognition, source verification, copyright concerns, and when NOT to use AI." },
  { q: "What's your refund policy?", a: "Full refund if withdrawn before April 1st." },
  { q: "How do I enroll?", a: "Click the 'Contact Us' button to get in touch. We'll answer any questions and guide you through the enrollment process." },];

const YouthPrograms = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(192_91%_36%/0.3),transparent_60%)]" />
        <div className="container-narrow relative px-4 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-primary-foreground">
              <h1 className="text-4xl font-bold md:text-5xl text-balance">Youth Edition: AI Native Learning for 5th–8th Graders</h1>
              <p className="mt-6 text-lg opacity-90 max-w-xl">
                Problem-based, hands-on training taught by tech industry veterans. Live online sessions that prepare your child for an AI-powered future.
              </p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: GraduationCap, text: "Ages 10–14" },
                  { icon: Monitor, text: "Live Online" },
                  { icon: Users, text: "Small Groups" },
                  { icon: Star, text: "No Experience Needed" },
                  { icon: FolderOpen, text: "5+ Projects" },
                  { icon: Award, text: "Certificate" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm opacity-90">
                    <Icon size={18} className="shrink-0" /><span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">

                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6">Enroll for Spring Break Camp 2026</Button>
                </Link>
              </div>
            </div>
            <img src={heroImg} alt="Students collaborating" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" />
          </div>
        </div>
      </section>

      {/* Robot Mascot / Fun Banner */}
      <section className="bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 border-y border-secondary/20 py-10 px-4">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Robot mascot */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-xl">
                  <Bot size={56} className="text-white" />
                </div>
                {/* Floating sparkles */}
                <span className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</span>
                <span className="absolute -bottom-1 -left-2 text-xl animate-pulse">🤖</span>
              </div>
            </div>
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1 text-sm font-bold text-secondary mb-3">
                <Sparkles size={14} /> Meet Your AI Learning Buddy!
              </div>
              <h2 className="text-2xl font-bold">Learn AI the Fun Way — Build Real Stuff! 🚀</h2>
              <p className="mt-2 text-muted-foreground">No boring lectures. You'll create apps, AI Agents, Machine Learning Projects, and more — all powered by AI. Your ideas, supercharged.</p>
            </div>
            {/* Fun achievement badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { emoji: "🎮", label: "Build Apps" },
                { emoji: "🎨", label: "Create AI Agents" },
                { emoji: "🔬", label: "Train ML Models" },
                { emoji: "🏆", label: "Earn Certificate" },
              ].map(({ emoji, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 rounded-2xl bg-surface border border-border px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <span className="text-2xl">{emoji}</span>
                  <span className="text-xs font-semibold text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Program Overview</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Weekly */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4">Option A</span>
              <h3 className="text-xl font-bold">Weekly Sessions</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><strong>Duration:</strong> 12 weeks</li>
                <li><strong>Schedule:</strong> 1 hour/week + optional practice</li>
                <li><strong>Best for:</strong> Consistent learning throughout school year</li>
              </ul>
            </div>
            {/* Summer */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary mb-4">Option B</span>
              <h3 className="text-xl font-bold">Spring Break Camp 2026</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><strong>Duration:</strong> 1 week online intensive</li>
                <li><strong>Schedule:</strong> April 6 - April 10 2026</li>
                <li><strong>Best for:</strong> AI Imersive spring learning experience</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-surface-alt p-6 text-center text-sm text-muted-foreground">
            <strong>Requirements:</strong> Computer with internet (Mac or PC) · Webcam & microphone 
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">How We Teach: Problem-Based, Not Tool-Based</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Most AI education focuses on teaching tools. We focus on teaching thinking.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Brain, title: "Real Problems First", desc: "Students start with challenges they care about. AI becomes the tool to solve." },
              { icon: Zap, title: "Hands-On Practice", desc: "Every lesson includes active problem-solving. Students create, test, iterate." },
              { icon: Search, title: "Critical Thinking", desc: "Question AI outputs. Understand limitations and biases. Develop healthy skepticism." },
              { icon: ShieldCheck, title: "Ethical Foundation", desc: "Responsible AI use in every lesson. Privacy, safety, integrity discussions." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-surface border border-border p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Curriculum: 5 Modules</h2>
          <div className="mt-12 space-y-6 max-w-4xl mx-auto">
            {modules.map((mod) => (
              <div key={mod.num} className="rounded-2xl border border-border bg-surface p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-primary-foreground font-bold text-sm">{mod.num}</span>
                  <div>
                    <h3 className="text-lg font-bold">{mod.title}</h3>
                    <span className="text-sm text-muted-foreground">{mod.weeks}</span>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-bold mb-2">Learning Goals</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {mod.goals.map((g) => <li key={g} className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-success" />{g}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">Project</h4>
                    <p className="text-sm text-muted-foreground italic">"{mod.project}"</p>
                    <h4 className="text-sm font-bold mt-3 mb-1">Skills</h4>
                    <p className="text-sm text-muted-foreground">{mod.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">What Your Child Will Be Able to Do</h2>
          <div className="mt-12 max-w-3xl mx-auto">
            <ul className="space-y-3">
              {[
                "Understand the difference between using AI tools and thinking AI native",
                "Identify problems where AI can provide meaningful assistance",
                "Interact effectively with AI systems through thoughtful prompting",
                "Critically evaluate AI outputs for accuracy, bias, and appropriateness",
                "Use AI ethically and responsibly in academic and creative work",
                "Complete complex projects using AI as a collaborative partner",
                "Build a portfolio of 5+ projects demonstrating AI native skills",
                "Explain their problem-solving process clearly",
                "Make informed decisions about when and how to use AI",
                "Continue learning independently with a strong foundation",
              ].map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-success" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

         {/* Portfolio examples
          <h3 className="mt-12 text-xl font-bold text-center">Sample Student Projects</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Climate Change Research Presentation",
              "Original Story with AI Collaboration",
              "Personal Productivity System",
              "Game/App Concept with Dev Process",
            ].map((title) => (
              <div key={title} className="rounded-xl bg-surface border border-border p-6">
                <div className="h-24 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <FolderOpen className="text-primary/40" size={32} />
                </div>
                <h4 className="text-sm font-bold">{title}</h4>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-surface">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Everything Parents Need to Know</h2>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Instructors */}
      <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Learn from AI Industry Builders</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-1 max-w-4xl mx-auto">
            {[
              // {
              //   name: "Kanthi Santhikumar",
              //   role: "Co-Founder",
              //   bg: "https://www.linkedin.com/in/kanthi-santhikumar/",
              //   philosophy: "The best learning happens when students solve problems they care about.",
              // },
              {
                name: "Gunjan Singh",
                role: "Instructor",
                bg: "https://www.linkedin.com/in/gunjan1983",
                philosophy: "We need to teach the next generation to be creators with AI, not just consumers.",
              },
            ].map((inst) => (
              <div key={inst.name} className="rounded-2xl bg-surface border border-border p-8 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users size={36} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold">{inst.name}</h3>
                <p className="text-sm text-primary font-medium">{inst.role}</p>
                {/*<p className="mt-3 text-sm text-muted-foreground">{inst.bg}</p>*/}
                <a href={inst.bg} target="_blank" rel="noreferrer" className="mt-3 text-sm text-primary underline hover:opacity-75">
  LinkedIn Profile
</a>
                <p className="mt-3 text-sm italic text-muted-foreground">"{inst.philosophy}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding gradient-primary text-primary-foreground text-center">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Start?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">Join our Spring cohort and give your child the AI native skills they need to thrive.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouthPrograms;
