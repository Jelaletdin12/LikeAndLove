import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="text-blue-500">LIKE LOVE</span>
      </h1>

      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden">
        {/* Video player border gradient */}
        <div className="absolute inset-0 rounded-2xl border-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />
        
        {/* Dark background */}
        <div className="absolute inset-0 bg-navy-900" />

        {/* Video placeholder - replace with actual video element */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Play button */}
          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
        </div>

        {/* Actual video element - uncomment and use when implementing */}
        {/* <video
          className="absolute inset-0 w-full h-full object-cover"
          src="your-video-source.mp4"
          playsInline
          controls={false}
        /> */}
      </div>
    </div>
  );
};

export default VideoPlayer;