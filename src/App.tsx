import React from 'react';
import { Navbar } from './components/Navbar';
import { VideoBackground } from './components/VideoBackground';
import { MainContent } from './components/MainContent';
import { DecorativeElements } from './components/DecorativeElements';
import { PricingSection } from './components/PricingSection';
import { ChatbotWidget } from './components/ChatbotWidget';

function App() {
  return (
    <div className="w-screen relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
      </div>
      
      {/* Hero Section */}
      <div className="min-h-screen w-screen relative overflow-hidden">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <MainContent />
        </div>
        
        {/* Decorative Elements */}
        <DecorativeElements />
      </div>
      
      {/* Pricing Section */}
      <div className="relative z-10">
        <PricingSection />
      </div>
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}

export default App;