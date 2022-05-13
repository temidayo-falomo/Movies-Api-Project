import React from "react";
import "./InfoBox.css";

function InfoBox(props) {
  return (
    <div className="info-box">
      <div className="top-info-box">
        <img src={props.contd.image} alt="img" className="wv" />
        <div>
          <h4>{props.contd.title}</h4>
          <p>{props.contd.left} Episodes left</p>
          <div className="prog-bar"><img src={props.contd.progress} alt="img" /></div>
        </div>
      </div>
      <div className="info-box-btns">
        <button>Drop</button>
        <button>Watch</button>
      </div>
    </div>
  );
}

export default InfoBox;
