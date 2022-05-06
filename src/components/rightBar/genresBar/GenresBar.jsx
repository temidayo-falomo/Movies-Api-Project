import React from "react";
import "./GenresBar.css";

function GenresBar(props) {
  return (
    <div
      className="info-box genres-bar"
      style={{
        background: `rgba(0, 0, 0, 0.658)url('https://source.unsplash.com/400x300/?${props.genres.name} movie series')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundPosition: "center",
      }}
    >
      <h4>{props.genres.name}</h4>
    </div>
  );
}

export default GenresBar;
