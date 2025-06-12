import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/logo-anim8.webp'

const navItems = ['Product', 'Service', 'Philosophy'].map(i => ({
  label: i,
  path: i.toLowerCase()
}));

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the email – eventually send to CRM endpoint
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <nav className="w-full bg-transparent text-text-white px-10 py-6 flex justify-between items-center z-50 fixed top-0">
      {/* Logo + Nav */}
      <div className="flex items-center gap-20">
        <img
          src={logo}
          alt="Anim8 logo"
          className="w-24 h-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        <ul className="flex gap-10 ml-5 list-none">
          {navItems.map((item) => (
            <li key={item.label} onClick={() => navigate(item.path)} className="cursor-pointer">
              <span className="text-textWhite font-body text-md hover:text-blueGlow transition-colors duration-200">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-[#0A0F14] border border-gray-700 px-4 py-1 rounded-xl shadow-inner">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Join the movement"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
        >
          Submit
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
