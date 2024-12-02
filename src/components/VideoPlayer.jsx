import React, { useState } from "react";
import video from "/STUDY-IN-INDONESIA.mp4";

const Placeholder = () => (
  <div className="w-full min-h-[170px] md:h-[350px] xl:h-[550px] flex items-center justify-center bg-gray-200 rounded-xl">
    <div className="loader border-t-transparent border-blue-500"></div>
  </div>
);

const VideoPlayer = ({ className }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Handler ketika video siap
  const handleVideoLoaded = () => {
    
    setTimeout(() => {
      setIsVideoReady(true);
    }, 1000);
  };

  return (
    <div
      className={`max-w-6xl mx-auto w-full ${className} px-5 rounded-[20px]`}
    >
      <div className="bg-white p-2 rounded-xl">
        {!isVideoReady && (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-xl">
            <Placeholder />
          </div>
        )}
        <video
          src={video}
          controls
          className={`rounded-xl ${!isVideoReady ? "hidden" : "block"}`}
          onLoadedData={handleVideoLoaded}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
