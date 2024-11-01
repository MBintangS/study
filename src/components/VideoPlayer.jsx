import React from "react";
import video from "/STUDY-IN-INDONESIA.mp4";
import Reveal from "../utils/Reveal";

const VideoPlayer = ({className}) => {
  return (
    <div className={`max-w-6xl mx-auto w-full ${className} px-5 rounded-xl`}>
      <div className="bg-white p-2 rounded-xl">
        <video src={video} controls className="rounded-2xl" />
      </div>
    </div>
  );
};

export default VideoPlayer;
