import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import logoUrl from '../assets/logo.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Machinery', to: '/machinery' },
  { label: 'Quality', to: '/quality' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-industrial-navy">
          <img src={logoUrl} alt="Parth Engineers" className="h-10 w-10 object-contain" />
          <span className="hidden font-semibold text-industrial-navy sm:inline">Parth Engineers</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-industrial-gray hover:text-industrial-navy ${isActive ? 'bg-industrial-navy text-white' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-industrial-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="space-y-1 px-5 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-industrial-gray ${isActive ? 'bg-industrial-navy text-white' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
