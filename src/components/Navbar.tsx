import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Professional Workshops", to: "/professional-training" },
  { label: "Youth Programs", to: "/youth-programs" },
  { label: "Project Showcase", to: "/project-showcase" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="container-narrow flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="AgenticMinds logo" className="h-10 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold text-foreground">Agentic<span className="text-secondary">Minds</span></span>
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">AI-Native Training</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${location.pathname === link.to ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>



          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay — outside header to avoid backdrop-blur containing block */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-16 z-[60] bg-background md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full rounded-lg px-4 py-3 text-center text-lg font-medium transition-colors hover:bg-muted ${location.pathname === link.to ? "text-primary bg-muted font-semibold" : "text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
