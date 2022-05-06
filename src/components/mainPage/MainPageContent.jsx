import React from "react";
import MovieCard from "./MovieCard";
import { FaAngleDoubleRight } from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import SlidesCard from "./SlidesCard";

function MainPageContent(props) {
  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <div className="main-content">
      <Carousel className="slide" breakPoints={breakPoints}>
        {props.trending.map((trend) => {
          return <SlidesCard key={trend.id} trending={trend} />;
        })}
      </Carousel>

      <div className="popular">
        <div className="popular-on">
          <h2>Popular on TinyMoviez</h2>
            <FaAngleDoubleRight className="double-right" />
        </div>
        <div className="movie-cards">
          {props.topMovies.map((topMovie) => {
            return <MovieCard topMovie={topMovie} key={topMovie.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPageContent;
