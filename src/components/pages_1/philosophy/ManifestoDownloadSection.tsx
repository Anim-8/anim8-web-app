import React from 'react';
import { Download } from 'lucide-react';

const papers = [
  {
    title: "White Paper",
    description: "Vision, architecture, and methodology. The cortex framework in depth.",
    theme: "light",
    fileName: "/pdfs/anim8_whitepaper.pdf",
    comingSoon: true,
  },
  {
    title: "Black Paper",
    description: "Spirit, soul, and progress. The emotional truth behind Anim8.",
    theme: "dark",
    fileName: "/pdfs/anim8_blackpaper.pdf",
    comingSoon: true,
  },
];

const ManifestoDownloadSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 md:px-20 py-24 space-y-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
        Download the Anim8 Manifesto
      </h2>
      <p className="text-lg text-text-secondary max-w-2xl text-center font-light">
        Explore the full Anim8 philosophy — from our technological framework to the emotional and spiritual drivers behind this movement.
      </p>

      <div className="flex flex-col md:flex-row gap-10 mt-10 z-10">
        {papers.map(({ theme, title, description, fileName, comingSoon }) => (
          <div
            key={title}
            className={`relative w-80 px-6 py-8 rounded-2xl shadow-md transition flex flex-col gap-4 justify-between
              ${theme === 'light' ? 'bg-white text-black' : 'bg-[#0A0F14] text-white border border-white/10'}
              ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800/50'}
              ${comingSoon ? 'opacity-50 pointer-events-none' : ''}
            `}
          >
            {/* Badge */}
            {comingSoon && (
              <div className="absolute top-3 right-3 bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                Coming Soon
              </div>
            )}

            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>

            {!comingSoon && (
              <a href={fileName} download>
                <div className="flex items-center gap-2 text-blue-500 font-semibold mt-4">
                  <Download size={18} />
                  <span>Download PDF</span>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black pointer-events-none" />
    </div>
  );
};

export default ManifestoDownloadSection;
