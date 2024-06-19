import React from "react";
import modelPhoto from "../photo.jpg"

const Photo = (props) => {
  return (
    <div className="photoCard">
      <img src={modelPhoto} alt="flower" />
      <h2>{props.data.name}</h2>
      <p>This should be a short description about the fucking photo that i don't give a fuck about but i have to write it so that the design doesn't look very bad. Suck</p>
      <a>Download</a>
    </div>
  );
};

export default Photo;
