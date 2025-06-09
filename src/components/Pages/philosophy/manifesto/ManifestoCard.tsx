import React from 'react';
import { Download } from 'lucide-react';

interface ManifestoCardProps {
  title: string;
  description: string;
  fileName: string;
  theme: 'light' | 'dark';
}

const ManifestoCard: React.FC<ManifestoCardProps> = ({ title, description, fileName, theme }) => {
  const bg = theme === 'light' ? 'bg-white text-black' : 'bg-[#0A0F14] text-white border border-white/10';
  const hover = theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800/50';

  return (
    <a
      href={fileName}
      download
      className={`w-80 px-6 py-8 rounded-2xl shadow-md transition ${bg} ${hover} flex flex-col gap-4 justify-between`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
      <div className="flex items-center gap-2 text-blue-500 font-semibold mt-4">
        <Download size={18} />
        <span>Download PDF</span>
      </div>
    </a>
  );
};

export default ManifestoCard;
