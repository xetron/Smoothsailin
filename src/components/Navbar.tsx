import React from 'react';
import { StarIcon } from './StarIcon';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <StarIcon className="w-6 h-6 text-white/90 hover:text-white transition-colors duration-300" />
        <div className="hidden md:flex items-center space-x-8 font-manrope text-sm font-normal">
          <a 
            href="#" 
            className="text-white/80 hover:text-white transition-colors duration-300 hover:tracking-wide"
          >
            Origins
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-white transition-colors duration-300 hover:tracking-wide"
          >
            Records
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-white transition-colors duration-300 hover:tracking-wide"
          >
            Community
          </a>
        </div>
      </div>
      
      <div className="font-manrope text-sm font-normal text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
        EN ⌄
      </div>
    </nav>
  );
};