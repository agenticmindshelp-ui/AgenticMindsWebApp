import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

type Message = {
    id: number;
    from: "bot" | "user";
    text: string;
    links?: { label: string; to: string }[];
};

const BOT_NAME = "Aria";
const BOT_TAGLINE = "AgenticMinds AI Assistant";

// FAQ knowledge base
const FAQ: { keywords: string[]; answer: string; links?: { label: string; to: string }[] }[] = [
    {
        keywords: ["price", "cost", "how much", "fee", "pricing", "tuition"],
        answer: "Our program pricing varies by format. Please reach out via our Contact page for details",
        links: [{ label: "Contact Us", to: "/contact" }],
    },
    {
        keywords: ["age", "grade", "who", "eligible", "5th", "6th", "7th", "8th", "middle school"],
        answer: "Our Youth Program is designed for 5th–8th graders (ages 10–14). No prior experience is needed — we start from scratch!",
        links: [{ label: "Youth Programs", to: "/youth-programs" }],
    },
    {
        keywords: ["schedule", "when", "time", "weekly", "summer", "camp", "session"],
        answer: "Our next cohort for students start on April 6th. It's 1.5 hours per day for 5 days. Please reach out using the Contact Us page to enroll.",
        links: [{ label: "View Programs", to: "/youth-programs" }],
    },
    {
        keywords: ["online", "virtual", "zoom", "format", "how does it work"],
        answer: "All student sessions are live online via video call. You just need a computer with a webcam and microphone — no special software required! Our Corporate programs are custom-designed and hence will be online or in-person based on the needs of the business.",
    },
    {
        keywords: ["corporate", "business", "team", "company", "employee", "training", "workplace"],
        answer: "We offer customized corporate AI training for teams of all sizes. We're launching Summer 2026 with pilot opportunities available! Please reach out to us on the Contact Us page to sign up or learn more",
        links: [{ label: "Corporate Training", to: "/corporate-training" }],
    },

    {
        keywords: ["certificate", "diploma", "credential", "badge"],
        answer: "Students who complete the program receive an official AgenticMinds Certificate of Completion to add to their portfolio!",
    },
    {
        keywords: ["safe", "safety", "privacy", "coppa", "parent", "supervision"],
        answer: "Safety is our top priority. All sessions are supervised, use secure platforms, and comply with COPPA regulations. We recommend parents join the first session.",
    },
    {
        keywords: ["contact", "email", "phone", "reach", "talk", "speak", "human"],
        answer: "You can reach us at AgenticMindsHelp@gmail.com or call/WhatsApp 480-296-1631. We respond within 24 hours on business days.",
        links: [{ label: "Contact Page", to: "/contact" }],
    },
    {
        keywords: ["refund", "cancel", "money back", "withdraw"],
        answer: "We offer a full refund if withdrawn before Mar 30th. Contact us for details.",
        links: [{ label: "Contact Us", to: "/contact" }],
    },
    {
        keywords: ["project", "build", "create", "make", "what will", "curriculum"],
        answer: "Students build 5+ real projects including an AI-powered learning assistant, a productivity system and a personalized website.",
        links: [{ label: "See Curriculum", to: "/youth-programs" }],
    },
    {
        keywords: ["project", "build", "create", "make", "when will", "date", "start", "camp"],
        answer: "Our next cohort for students start on April 6th. Please reach out using the Contact Us page to enroll.",
        links: [{ label: "See Contact Us", to: "/Contact" }],
    },
];

const QUICK_QUESTIONS = [
    "Do you offer summer camps?",
    "Tell me more about the Corporate Programs",
    "How much does it cost?",
    "Is it online?",
];

function getBotResponse(input: string): { answer: string; links?: { label: string; to: string }[] } {
    const lower = input.toLowerCase();
    for (const faq of FAQ) {
        if (faq.keywords.some((kw) => lower.includes(kw))) {
            return { answer: faq.answer, links: faq.links };
        }
    }
    return {
        answer: "Great question! I'm not sure about that one. Our team can help — reach out directly and we'll get back to you within 24 hours. 😊",
        links: [{ label: "Contact Us", to: "/contact" }],
    };
}

let msgId = 0;
const nextId = () => ++msgId;

const INITIAL_MESSAGES: Message[] = [
    {
        id: nextId(),
        from: "bot",
        text: `Hi there! 👋 I'm **${BOT_NAME}**, your AgenticMinds assistant. I can answer questions about our programs, pricing, schedules, and more. What would you like to know?`,
    },
];

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [unread, setUnread] = useState(1);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) {
            setUnread(0);
            setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
        }
    }, [open, messages]);

    const sendMessage = (text: string) => {
        if (!text.trim()) return;
        const userMsg: Message = { id: nextId(), from: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setTyping(true);

        setTimeout(() => {
            const { answer, links } = getBotResponse(text);
            setMessages((prev) => [...prev, { id: nextId(), from: "bot", text: answer, links }]);
            setTyping(false);
            if (!open) setUnread((n) => n + 1);
        }, 800);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    // Render bold markdown (**text**)
    const renderText = (text: string) =>
        text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
            part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
        );

    return (
        <>
            {/* Floating bubble */}
            <button
                onClick={() => setOpen((o) => !o)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-primary shadow-2xl hover:scale-110 transition-transform focus:outline-none"
                aria-label="Open chat"
            >
                {open ? <X size={24} className="text-white" /> : <MessageCircle size={26} className="text-white" />}
                {!open && unread > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                        {unread}
                    </span>
                )}
            </button>

            {/* Chat window */}
            {open && (
                <div className="fixed bottom-24 right-6 z-50 flex flex-col w-[340px] max-h-[520px] rounded-2xl shadow-2xl border border-border bg-surface overflow-hidden">
                    {/* Header */}
                    <div className="gradient-primary px-4 py-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                            <Bot size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm">{BOT_NAME}</p>
                            <p className="text-[11px] text-white/70">{BOT_TAGLINE}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[11px] text-white/70">Online</span>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-surface-alt">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                                {msg.from === "bot" && (
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full gradient-primary mr-2 mt-1">
                                        <Bot size={14} className="text-white" />
                                    </div>
                                )}
                                <div className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${msg.from === "user"
                                        ? "bg-primary text-primary-foreground rounded-br-sm"
                                        : "bg-surface border border-border text-foreground rounded-bl-sm"
                                    }`}>
                                    {renderText(msg.text)}
                                    {msg.links && (
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {msg.links.map((l) => (
                                                <Link
                                                    key={l.to}
                                                    to={l.to}
                                                    onClick={() => setOpen(false)}
                                                    className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors"
                                                >
                                                    {l.label} →
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {typing && (
                            <div className="flex items-center gap-2">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full gradient-primary">
                                    <Bot size={14} className="text-white" />
                                </div>
                                <div className="flex gap-1 rounded-2xl bg-surface border border-border px-3 py-2">
                                    {[0, 1, 2].map((i) => (
                                        <span key={i} className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                                    ))}
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Quick questions */}
                    <div className="px-3 pt-2 pb-1 flex gap-1.5 flex-wrap border-t border-border bg-surface">
                        {QUICK_QUESTIONS.map((q) => (
                            <button
                                key={q}
                                onClick={() => sendMessage(q)}
                                className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-border bg-surface">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything…"
                            className="flex-1 rounded-full border border-border bg-surface-alt px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="flex h-9 w-9 items-center justify-center rounded-full gradient-primary text-white disabled:opacity-40 hover:opacity-90 transition-opacity"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
