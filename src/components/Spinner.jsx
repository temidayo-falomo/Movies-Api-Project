import React from "react";

function Spinner() {
  return (
    <div
      className="div"
      style={{ height: "100vh", display: "grid", placeContent: "center" }}
    >
      <div className="lds-grid" style={{ margin: "auto" }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
