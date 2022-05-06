import React from "react";
import {BsPlus} from 'react-icons/bs'

function SlidesCard(props) {
  const baseImgUrl = "https://image.tmdb.org/t/p/";
  const size = "w500/";

  return (
    <div
      className="slidesCard"
      style={{
        background: `rgba(0, 0, 0, 0.3)url('${baseImgUrl}${size}${props.trending.poster_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundPosition: "center",
      }}
    >
      <h1>{props.trending.original_name}</h1>
      <div className="carousel-flex">
        <button className="add"><BsPlus />Watchlist</button>
        <div className="div"></div>
        <button className="carousel-watch">Watch now</button>
      </div>
    </div>
  );
}

export default SlidesCard;
