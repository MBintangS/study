import React from "react";
import video from "/STUDY-IN-INDONESIA.mp4";

const VideoPlayer = ({className}) => {
  return (
    <div className={`max-w-6xl mx-auto w-full ${className} px-5 rounded-[20px]`}>
      <div className="bg-white p-2 rounded-xl">
        <video src={video} controls className="rounded-xl" />
      </div>
    </div>
  );
};

export default VideoPlayer;
