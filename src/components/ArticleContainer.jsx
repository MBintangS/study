import React from "react";
import News from "./News";
import UpcomingEvents from "./UpcomingEvents";
import CampusUpdate from "./CampusUpdate";
import Reveal from "../utils/Reveal";

const ArticleContainer = () => {
  return (
    <Reveal>
      <div className="max-w-6xl w-full mx-auto my-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <News />
          <UpcomingEvents />
          <CampusUpdate />
        </div>
      </div>
    </Reveal>
  );
};

export default ArticleContainer;
