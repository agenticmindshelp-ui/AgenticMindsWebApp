import { Bot, Brain, Globe, ImageIcon, Sparkles } from "lucide-react";
import imgChristopher from "@/assets/Christopher.png";
import imgViren from "@/assets/Viren.png";
import imgAayansh from "@/assets/Aayansh.png";
import imgKabir from "@/assets/Kabir.png";
import imgReyan from "@/assets/Reyan.png";
import imgAlyssa from "@/assets/Alyssa.png";
import imgPavan from "@/assets/Pavan.png";
import imgRishika from "@/assets/Rishika.png";
import imgSamir from "@/assets/Samir.png";
import imgPranika from "@/assets/Pranika.png";

const professionalSkills = [
  { title: "Weekly Status Reporter", desc: "Compiles updates from multiple team members into a clean, formatted weekly report ready to share with leadership.", tags: ["Claude Skill", "Workflow Automation"] },
  { title: "Client Email Drafter", desc: "Turn rough bullet points into polished, professional client emails in your brand voice — with the right tone for any situation.", tags: ["Claude Skill", "Communication"] },
  { title: "Meeting Prep Assistant", desc: "Enter a meeting topic and attendees and get a tailored agenda, key questions to ask, and background context to walk in prepared.", tags: ["Claude Skill", "Workplace Automation"] },
  { title: "End-of-Day Summariser", desc: "Paste your notes or Slack messages and get a clean, structured summary of action items, decisions made, and follow-ups — ready to send to your team.", tags: ["Claude Skill", "Productivity"] },
  { title: "Document Review Skill", desc: "Upload any document — a contract, PRD, brand brief, or policy — and get a structured breakdown of key points, obligations, risks, and action items tailored to what you're looking for.", tags: ["Claude Skill", "Document Analysis"] },
  { title: "Onboarding Guide Skill", desc: "Answers new hire questions using your company's own documentation, policies, and processes — available 24/7 without HR overhead.", tags: ["Claude Skill", "Knowledge Management"] },
];

const websites = [
  { name: "Reyan", grade: "Grade 6", title: "Tic Tac Toe", desc: "A classic Tic-Tac-Toe game brought to life in the browser", url: "https://tictactoereyan.lovable.app", img: imgReyan },
  { name: "Alyssa", grade: "Grade 5", title: "Sip & Swirl", desc: "A stylish beverage brand site to purchase handcrafted drinks", url: "https://sip-swirl.lovable.app/", img: imgAlyssa },
  { name: "Christopher", grade: "Grade 7", title: "Apex Basketball Academy", desc: "A promotional site for a high-performance basketball summer camp", url: "https://apex-academy-launch.lovable.app/", img: imgChristopher },
  { name: "Viren", grade: "Grade 7", title: "Battleship", desc: "A fully playable browser version of the classic naval combat game", url: "https://battleshipgames.lovable.app", img: imgViren },
  { name: "Pranika", grade: "Grade 6", title: "Trojans Court Hub", desc: "A sports team hub for schedules, news, and team highlights", url: "https://trojans-court-hub.lovable.app", img: imgPranika },
  { name: "Kabir", grade: "Grade 5", title: "BlastZone", desc: "An arcade-style gaming hub packed with fun shooting and action games", url: "https://scamm.lovable.app/", img: imgKabir },
  { name: "Samir", grade: "Grade 6", title: "Foodie — Two Worlds, One Kitchen", desc: "A cross-cultural culinary site celebrating the fusion of two food cultures", url: "https://golden-saffron-kitchen.lovable.app", img: imgSamir },
  { name: "Pavan", grade: "Grade 8", title: "Time of the World", desc: "A world clock app to track current time across different time zones", url: "https://globe-clock-grid.lovable.app", img: imgPavan },
  { name: "Rishika", grade: "Grade 6", title: "Keys to My World", desc: "A personal creative site themed around music and self-expression", url: "https://keys-to-my-world.lovable.app", img: imgRishika },
  { name: "Aayansh", grade: "Grade 6", title: "Lego Vault", desc: "A LEGO-themed site to auction all things bricks and builds", url: "https://legovault.lovable.app", img: imgAayansh },
];

const aiModels = [
  { title: "Rock, Paper, Scissors Classifier", desc: "Trained an image recognition model to identify hand gestures in real time using Google Teachable Machine.", tags: ["Image Recognition", "Machine Learning"] },
  { title: "Emotion Detector", desc: "Built a model that classifies facial expressions into happy, sad, and surprised categories.", tags: ["Image Recognition", "Machine Learning"] },
  { title: "Object Sorter", desc: "Trained a model to distinguish between different everyday objects using a custom image dataset.", tags: ["Classification", "Machine Learning"] },
];

const aiAgents = [
  { title: "Personal Study Assistant", desc: "An AI agent that understands a student's learning goals and emails them a personalised to-do list to stay on track.", tags: ["AI Agent", "Automation"] },
  { title: "Homework Helper Agent", desc: "A context-aware AI assistant loaded with curriculum knowledge that answers subject-specific questions without giving away answers.", tags: ["AI Agent", "Claude Skills"] },
  { title: "Event Planner Agent", desc: "An autonomous agent that takes a brief and generates a full event plan including schedule, checklist, and reminders.", tags: ["AI Agent", "Workflow Automation"] },
];

const ProjectShowcase = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(192_91%_36%/0.3),transparent_60%)]" />
        <div className="container-narrow relative px-4 py-20 md:py-28 text-primary-foreground text-center">
          <h1 className="text-4xl font-bold md:text-5xl text-balance">Project Showcase</h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            Real projects built by real people. From professional AI Skills to student-built websites, trained models, and autonomous agents — here's what our community has created.
          </p>
        </div>
      </section>

      {/* Professional Skills */}
      <section className="section-padding !pt-6 bg-surface-alt">
        <div className="container-narrow">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
              <Sparkles size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Professional AI Skills</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Built by professionals — real workplace tools that save hours every week. Each Skill runs inside Claude and can be used by anyone on the team, no technical setup required.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {professionalSkills.map((skill) => (
              <div key={skill.title} className="rounded-2xl border border-border bg-surface p-6">
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

      {/* Websites */}
      <section className="section-padding !pt-6 bg-surface">
        <div className="container-narrow">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
              <Globe size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Websites & Apps</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">In just 5 days, students went from zero AI experience to building and launching real websites. Click any project to visit the live site.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websites.map((project) => (
              <a key={project.name} href={project.url} target="_blank" rel="noreferrer"
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="aspect-video overflow-hidden bg-surface-alt">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">{project.name} · {project.grade}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">View site →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="section-padding !pt-6 bg-surface-alt">
        <div className="container-narrow">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 mb-4">
              <Brain size={28} className="text-secondary" />
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Trained AI Models</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Students trained their own machine learning models from scratch — no prior experience needed. Each model was built, tested, and refined by the students themselves.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aiModels.map((model) => (
              <div key={model.title} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 mb-4">
                  <ImageIcon size={24} className="text-secondary" />
                </div>
                <h3 className="font-bold text-base">{model.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{model.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="section-padding !pt-6 bg-surface">
        <div className="container-narrow">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 mb-4">
              <Bot size={28} className="text-accent" />
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Autonomous AI Agents</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Students built AI agents that can reason, remember, and take action — going far beyond simple chatbots to create tools that actually get things done.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aiAgents.map((agent) => (
              <div key={agent.title} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                  <Bot size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-base">{agent.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{agent.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-primary-foreground text-center">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Build Something Like This?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">Whether you're a professional looking to work smarter or a parent investing in your child's future — we have a program for you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <button className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-4 rounded-lg hover:opacity-90 text-base">Professional Workshops</button>
            </a>
            <a href="/contact">
              <button className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-4 rounded-lg hover:opacity-90 text-base">Youth Programs</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectShowcase;
