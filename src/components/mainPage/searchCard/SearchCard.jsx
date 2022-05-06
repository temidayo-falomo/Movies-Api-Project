import React from "react";
import "./SearchCard.css";
import {AiFillLike} from 'react-icons/ai'

function SearchCard(props) {
  const baseImgUrl = "https://image.tmdb.org/t/p/";
  const size = "w400/";
  return (
    <div
      className="search-card"
      style={{
        background: `rgba(0, 0, 0, 0.3)url('${baseImgUrl}${size}${props.movie.poster_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundPosition: "center",
      }}
    >

      <div className="movie-card-top">
      <h4>{props.movie.original_title || props.movie.original_name}</h4>
        <div className="stars">
          Ratings: {props.movie.popularity} <AiFillLike className="like"/>
        </div>
      </div>

      <div className="movie-card-bottom">
        <div className="flex-btw">
          <h6>{props.movie.media_type}</h6>
          <h6>{props.movie.release_date}</h6>
        </div>
        <div className="flex-btw btns">
          <button className="add-btn">+</button>
          <button className="watch-btn">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
