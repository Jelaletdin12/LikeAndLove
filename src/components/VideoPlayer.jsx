import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import { useTranslation } from "react-i18next";
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
 const { t, i18n } = useTranslation();
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-4xl text-white font-bold text-center mb-8 md:text-6xl">
      {t("VideoPlayer.News")}
        <span className="text-[#007AFF] ml-4">LiKE</span>&
        <span className="text-[#007AFF]">LOVE</span>
      </h1>

      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden p-[3px]">
        {/* Video player border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF] to-[#F30EFF] rounded-2xl" />

        {/* Content container */}
        <div className="relative bg-[#161C31] rounded-2xl w-full h-full flex items-center justify-center overflow-hidden">
          {/* Video placeholder - replace with actual video element */}
          <div className="w-full h-full flex items-center justify-center">
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
      <p className="text-white text-xl text-center mb-6 mt-6">
      {t("VideoPlayer.Weareactivelydevelopingourchannelherewenotonly")}
      </p>
    </div>
  );
};

export default VideoPlayer;
