import React from 'react';
import { useNavigate } from 'react-router';

const navItems = ['Product', 'Service', 'Philosophy', 'Team'].map(i => ({ label: i, path: i.toLowerCase() }))

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  return (
    <nav className="w-full bg-transparent text-textWhite px-10 py-6 flex justify-between items-center z-50 fixed top-0">
      <img
        src="/images/logo-anim8.png"
        alt="Anim8 logo"
        className="w-24 h-auto"
      />
      {/* Horizontal nav items */}
      <ul className="flex gap-12 list-none">
        {navItems.map((item) => (
          <li key={item.label} onClick={() => navigate(item.path)}>
            <span className='text-textWhite font-body text-md hover:text-blueGlow transition-colors duration-200'>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
