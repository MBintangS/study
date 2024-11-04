import React from "react";
import Reveal from "../utils/Reveal";
import ArticleCarousel from "./ArticleCarousel";

import cuisine from "../assets/cuisine.webp";
import culture from "../assets/culture.webp";

const dataNews = [
  {
    img: cuisine,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis pellentesque erat. Donec tincidunt venenatis dui, vitae lacinia mauris maximus."
  },
  {
    img: culture,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis pellentesque erat. Donec tincidunt venenatis dui, vitae lacinia mauris maximus."
  },
  {
    img: cuisine,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis pellentesque erat. Donec tincidunt venenatis dui, vitae lacinia mauris maximus."
  },
]


const ArticleContainer = () => {
  return (
    <Reveal>
      <div className="max-w-6xl w-full mx-auto my-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCarousel title="News" navigateTo="/campus-update" dataArticle={dataNews} autoplayDelay={3000} />
          <ArticleCarousel title="Upcoming Events" navigateTo="/campus-update" dataArticle={dataNews} autoplayDelay={4000} />
          <ArticleCarousel title="Campus Update" navigateTo="/campus-update" dataArticle={dataNews} autoplayDelay={5000} />
        </div>
      </div>
    </Reveal>
  );
};

export default ArticleContainer;
