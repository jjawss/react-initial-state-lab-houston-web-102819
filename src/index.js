import React from "react";
import ReactDOM from "react-dom";
import ImageSlider from "./ImageSlider";
import Bomb from "./Bomb";

ReactDOM.render(
  <div>
    <ImageSlider
    // prop1={"Some info"}
    // prop2={"More info"}
    // whateverMakesMostSenseToNameThis={"Some more info"}
    />
    <Bomb initialCount={120} />
  </div>,
  document.getElementById("root")
);
