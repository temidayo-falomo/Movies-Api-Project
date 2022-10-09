import React from "react";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";

function MovieCard({ topMovie }) {
  const baseImgUrl = "https://image.tmdb.org/t/p/";
  const size = "w400/";

  return (
    <div
      className="movie-card"
      style={{
        background: `rgba(0, 0, 0, 0.3)url('${baseImgUrl}${size}${topMovie.poster_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundPosition: "center",
      }}
    >
      <div className="movie-card-top">
        <h4>{topMovie.original_title || topMovie.original_name}</h4>
        <div className="stars">Ratings: {topMovie.popularity}</div>
      </div>
      <div className="movie-card-bottom">
        <div className="flex-btw">
          <h6>{topMovie.media_type}</h6>
          <h6>{topMovie.release_date}</h6>
        </div>
        <div className="flex-btw btns">
          {/* <button className="add-btn">+</button> */}
          <button className="watch-btn">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
