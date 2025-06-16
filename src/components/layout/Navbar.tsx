import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logo from '../../assets/anim8-logo-bg.webp';

const navItems = ['Product', 'Service', 'Philosophy'].map(i => ({
  label: i,
  path: i.toLowerCase()
}));

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    setIsMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
  }, [isMobileOpen]);

  return (
    <nav className="w-full bg-background text-white px-4 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-6">
        <img
          src={logo}
          alt="Anim8 logo"
          className="w-24 h-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        <ul className="hidden md:flex gap-6 list-none">
          {navItems.map((item) => (
            <li
              key={item.label}
              onClick={() => navigate(item.path)}
              className="cursor-pointer"
            >
              <span className="font-body text-md text-white hover:text-[#00C2FF] transition-colors duration-200">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Email form (only on desktop) */}
      <form
        onSubmit={handleSubmit}
        className="hidden md:flex items-center gap-2 bg-[#0A0F14] border border-gray-700 px-4 py-1 rounded-xl shadow-inner"
      >
        <label htmlFor="email" className="sr-only">Email</label>
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-3 left-2 text-xs text-gray-400 bg-[#0A0F14] px-1"
            >
              Join the movement
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none pt-5"
            />
          </div>
        <button
          type="submit"
          className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
        >
          Submit
        </button>
      </form>

      {/* Hamburger menu (mobile only) */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={navItems}
        onNavigate={(path) => navigate(path)}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
      />
    </nav>
  );
};

export default Navbar;
