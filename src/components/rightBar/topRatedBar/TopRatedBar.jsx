import React from "react";
import "./TopRatedBar.css";

function TopRatedBar(props) {
  const baseImgUrl = "https://image.tmdb.org/t/p/";
  const size = "w400/";
  return (
    <div
      className="info-box rated"
      style={{
        background: `rgba(0, 0, 0, 0.3)url('${baseImgUrl}${size}${props.upcoming.poster_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundPosition: "center",
        minWidth: "300px",
      }}
    >
      <h4>{props.upcoming.original_title}</h4>
      <div className="info-box-btns">
        <button>+</button>
        <button>Watch</button>
      </div>
    </div>
  );
}

export default TopRatedBar;
