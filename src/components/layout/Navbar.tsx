import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logo from '../../assets/logo-anim8.webp';
import Button from '../ui/Button';

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
      {/* Hamburger menu (mobile only) */}
      <Button
        className="md:hidden text-white"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </Button>

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
