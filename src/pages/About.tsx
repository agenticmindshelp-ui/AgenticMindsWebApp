import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users, Brain, ShieldCheck, Heart, Sparkles, Target,
  CheckCircle2, Lightbulb, BookOpen, ArrowRight
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "We Are AI Tech Builders First, Educators Second", desc: "We teach what we've actually done. Our curriculum comes from real experience building AI native systems, not academic theory." },
  { icon: Brain, title: "Problem-Based Learning", desc: "Tools change constantly. Thinking patterns are durable. We teach students to solve meaningful problems, using AI as a partner." },
  { icon: ShieldCheck, title: "Ethical AI Foundation", desc: "Being AI native means understanding not just what's possible, but what's responsible." },
  { icon: Heart, title: "Accessible Excellence", desc: "Quality AI education shouldn't be limited to elite programs. We're committed to accessible pricing for youth while delivering professional-grade training." },
  { icon: Sparkles, title: "Continuous Evolution", desc: "AI is evolving rapidly, and so must we. We stay current, adapt our curriculum constantly, and model continuous learning." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold md:text-5xl text-balance">Teaching AI Native Thinking Through Real-World Experience</h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            We're not just educators—we're tech builders who've built AI native systems in real business contexts. Now we're sharing that expertise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-surface">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Why We Started AgenticMinds</h2>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>The AI revolution isn't coming—it's here. But as we watched from inside the tech industry, we saw a massive gap between those who could think AI native and those who were just using tools superficially.</p>
            <p>In our work at leading tech companies, we built systems where AI wasn't an add-on feature but fundamentally integrated into how we solved problems. We learned what actually mattered: not knowing every tool, but understanding how to think and work in an AI-powered environment.</p>
            <p>We saw the AI gap everywhere. Our own children were coming home from school without any real AI education. Meanwhile, our colleagues at companies large and small were struggling with the same question: how do we actually become AI native?</p>
            <p>That's why we founded AgenticMinds. We're starting with young people—teaching 5th through 8th graders to think AI native from the beginning, rather than having to unlearn old habits later.</p>
            <p className="font-semibold text-foreground">Our goal isn't to just teach people to use today's tools. It's to teach them to think in ways that will serve them as AI continues to evolve—to become truly AI native.</p>
          </div>
        </div>
      </section>
      {/* Founders */}
      {/* <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Meet the Founders</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                name: "Kanthi Santhikumar",
                role: "Co-Founder",
                bg: "Spent over a decade in the tech industry, leading AI-powered product development used by millions of users.",
                quote: "I want every student to feel the same excitement I felt when I first saw how AI could amplify creative problem-solving.",
                expertise: ["AI product strategy", "Problem-based curriculum design", "Youth education"],
              },
              {
                name: "Gunjan Singh",
                role: "Co-Founder",
                bg: "Former AI/ML engineer with extensive experience building and deploying AI systems at leading technology companies.",
                quote: "The best way to prepare for an AI-powered future is to start thinking AI native today—not tomorrow.",
                expertise: ["AI/ML systems architecture", "Professional training", "Technical mentorship"],
              },
            ].map((f) => (
              <div key={f.role} className="rounded-2xl bg-surface border border-border p-8">
                <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">{f.name}</h3>
                <p className="text-center text-sm text-primary font-medium mb-4">{f.role}</p>
                <p className="text-sm text-muted-foreground">{f.bg}</p>
                <p className="mt-4 text-sm italic text-muted-foreground border-l-2 border-primary pl-4">"{f.quote}"</p>
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {f.expertise.map((e) => <span key={e} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{e}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">What We Believe</h2>
          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">{i + 1}. {title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl text-center">How We Teach Differently</h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-bold">Traditional AI Education</th>
                  <th className="p-4 text-left font-bold text-primary">Our Methodology</th>
                  <th className="p-4 text-left font-bold">The Result</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Focus on specific tools", "Focus on thinking patterns", "Durable skills"],
                  ["Lecture-based content", "Problem-based learning", "True AI native thinking"],
                  ["Theoretical examples", "Real-world challenges", "Confident problem-solving"],
                  ["One-size-fits-all", "Customized to needs", "Immediate practical value"],
                  ["Learn then apply (maybe)", "Learn BY applying", "Foundation for future"],
                ].map(([trad, ours, result]) => (
                  <tr key={trad} className="border-b border-border">
                    <td className="p-4">{trad}</td>
                    <td className="p-4 font-medium text-primary">{ours}</td>
                    <td className="p-4">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding gradient-primary text-primary-foreground">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">The Future We're Building</h2>
          <div className="mt-8 space-y-4 text-lg opacity-90">
            <p>We envision a world where being AI native is as fundamental as being digitally literate—where people of all ages understand how to work with AI effectively, ethically, and creatively.</p>
            <p>We're not trying to replace human thinking or creativity. We're teaching people how to amplify their unique human capabilities through thoughtful partnership with AI.</p>
          </div>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/youth-programs">
              <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-6 hover:opacity-90">Explore Youth Programs</Button>
            </Link>
            {/* <Link to="/professional-training">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6">Corporate Training</Button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
