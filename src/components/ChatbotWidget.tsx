import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`group relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-full p-4 text-white hover:from-white/30 hover:to-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Floating sparkle animation */}
          <div className="absolute -top-1 -right-1 animate-pulse">
            <Sparkles className="w-4 h-4 text-white/60" />
          </div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-75 group-hover:animate-none"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap font-manrope">
              Ask me anything
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20 w-full max-w-md h-[600px] animate-in zoom-in-95 duration-500 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h3 className="font-libre-caslon text-lg font-light text-white">
                    Guidance Assistant
                  </h3>
                  <p className="font-manrope text-xs text-white/60">
                    Here to help you on your journey
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300 group"
              >
                <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
            
            {/* Chatbot Iframe */}
            <div className="h-[calc(100%-88px)] w-full">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/ruzmw1VZwIWvlYGmFflEe"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-b-2xl"
                title="Guidance Assistant"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};