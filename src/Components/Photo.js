import React from "react";
import modelPhoto from "../photo.jpg"
import imag from "../uploads/1720290393187-IMG_20240308_085811_263.jpg"

const Photo = (props) => {
  
  return (
    <div className="photoCard">
      <img src={props.data.file} alt="flower" />
      <h2></h2>
      <p>{props.data.caption}</p>
      <a>Download</a>
    </div>
  );
};

export default Photo;
