import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow px-4 py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 lg:grid-cols-5">
        {/*<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 text-center justify-items-center">*/}
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-80">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {[
                { label: "Home", to: "/" },
                { label: "Youth Programs", to: "/youth-programs" },
                { label: "Corporate Training", to: "/corporate-training" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-80">Programs</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/youth-programs" className="hover:underline">Youth Overview</Link></li>
              <li><Link to="/youth-programs" className="hover:underline">Middle School</Link></li>

              <li><Link to="/corporate-training" className="hover:underline">Corporate Training</Link></li>
              <li><Link to="/corporate-training#pilot" className="hover:underline">Pilot Program</Link></li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-80">Resources</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/youth-programs#faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/youth-programs#parents" className="hover:underline">Parent Resources</Link></li>

            </ul>
          </div>  */}

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-80">Connect</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:AgenticMindsHelp@gmail.com" className="hover:underline">AgenticMindsHelp@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>480-296-1631 | 540-556-3262</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Bay Area, California</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-80">Legal</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/acceptable-use" className="hover:underline">Acceptable Use Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} AgenticMinds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
