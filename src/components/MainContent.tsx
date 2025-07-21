import React from 'react';

export const MainContent: React.FC = () => {
  return (
    <div className="z-10 relative max-w-2xl px-8 pt-32 text-white">
      <h1 className="font-libre-caslon text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6">
        Into the Quiet Unknown
      </h1>
      <p className="mt-4 font-manrope text-base font-normal text-white/80 leading-relaxed max-w-xl">
        The unknown isn't always loud. Sometimes it whispers. And if you pause long enough, you'll hear where it wants to take you.
      </p>
      <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-manrope text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
        Walk With Us 
        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
    </div>
  );
};