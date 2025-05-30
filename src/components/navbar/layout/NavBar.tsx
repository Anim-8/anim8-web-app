import React from 'react';

const navItems = ['Product', 'Service', 'Philosophy', 'Team'];

const NavBar: React.FC = () => {

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
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-textWhite font-body text-md hover:text-blueGlow transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
