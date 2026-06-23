import { ExternalLink, MapPin, Mail, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Parth Engineers" className="h-10 w-10 object-contain" />
            <h2 className="text-xl font-semibold text-industrial-navy">Parth Engineers</h2>
          </div>
          <p className="max-w-sm text-sm leading-7">
            Precision engineering and manufacturing solutions from Vapi, Gujarat.
          </p>
          <div className="space-y-2 text-sm leading-7 text-slate-600">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-1.5 flex-shrink-0" />
              <span>Plot No. C-1B/54, L.I.C Sector 2nd Phase GIDC Vapi</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:9374639385" className="hover:text-industrial-navy transition-colors">+91 93746 39385</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:parth.eng123@gmail.com" className="hover:text-industrial-navy transition-colors">parth.eng123@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-industrial-navy">About Us</Link></li>
              <li><Link to="/services" className="hover:text-industrial-navy">Services</Link></li>
              <li><Link to="/quality" className="hover:text-industrial-navy">Quality Assurance</Link></li>
              <li><Link to="/industries" className="hover:text-industrial-navy">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><ExternalLink size={14} /> <a href="https://wa.me/919374639385" target="_blank" rel="noopener noreferrer" className="hover:text-industrial-navy">WhatsApp Inquiry</a></li>
              <li className="flex items-center gap-2"><Send size={14} /> <a href="#contact" className="hover:text-industrial-navy">Request a Quote</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        © 2026 Parth Engineers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
