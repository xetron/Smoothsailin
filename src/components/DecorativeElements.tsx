import React from 'react';

export const DecorativeElements: React.FC = () => {
  return (
    <>
      {/* Right side vertical text */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20">
        <div className="transform -rotate-90 origin-center">
          <span className="font-manrope text-xs font-medium text-white/60 tracking-widest uppercase whitespace-nowrap">
            Field Entry Chapter One
          </span>
        </div>
      </div>

      {/* Bottom right copyright */}
      <div className="fixed bottom-6 right-6 z-20">
        <span className="font-manrope text-xs text-white/60">
          © Luna
        </span>
      </div>

      {/* Bottom left footer */}
      <div className="fixed bottom-6 left-6 z-20">
        <span className="font-manrope text-xs text-white/50 flex items-center">
          <span className="mr-2">✦</span>
          Founded in Stillness, 2025
        </span>
      </div>

      {/* Floating butterfly animation */}
      <div className="fixed top-1/3 right-1/4 z-10 animate-butterfly-float">
        <div className="text-white/30 text-2xl animate-gentle-fade">
          🦋
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="fixed top-1/4 left-3/4 z-10 animate-pulse">
        <div className="w-1 h-1 bg-white/20 rounded-full"></div>
      </div>
      <div className="fixed top-2/3 left-1/4 z-10 animate-pulse delay-1000">
        <div className="w-1 h-1 bg-white/15 rounded-full"></div>
      </div>
    </>
  );
};