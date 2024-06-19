import React from "react";
import photos from "../photos.json";
import Photo from "../Components/Photo";

const Home = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>Rocket Gallery</h1>
        </div>
        <div className="menu">
          <a href="#">Menu</a>
        </div>
      </header>
      <div className="container">
        <div className="photos">
          {photos.map((photo) => (
            <Photo data={photo} />
          ))}
        </div>
      </div>
      <footer>Rocket Gallery &copy; 2024</footer>
    </div>
  );
};

export default Home;
