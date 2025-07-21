import React from 'react';

export const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        src="https://cdn.midjourney.com/video/56695759-5bb0-40f9-bc73-b3ac6e141e80/0.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};