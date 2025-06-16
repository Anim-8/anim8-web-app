import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; path: string }[];
  onNavigate: (path: string) => void;
  email: string;
  setEmail: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  onNavigate,
  email,
  setEmail,
  onSubmit
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 bg-black z-40 px-6 py-8">
      <div className="flex justify-end mb-4">
        <button onClick={onClose} aria-label="Close menu">
          <X size={28} className="text-white" />
        </button>
      </div>

      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => {
                onNavigate(item.path);
                onClose();
              }}
              className="text-white text-lg font-medium hover:text-blueGlow transition"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit} className="mt-8">
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
          className="w-full px-4 py-2 rounded-b-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MobileMenu;
