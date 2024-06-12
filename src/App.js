import Photo from "./Components/Photo";
import photos from "./photos.json";
import "./style.css";

function App() {

  console.log(photos)
  return (
    <div className="App">
      <header>Rocket Gallery</header>
      <div className='container'>
        {photos.map(() => {
          <Photo />
        })}

        
      </div>
      <footer>
        Rocket Gallery &copy; 2024
      </footer>
    </div>
  );
}

export default App;
