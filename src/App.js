import Photo from "./Components/Photo";
import "./style.css";

function App() {
  return (
    <div className="App">
      <header>Rocket Gallery</header>
      <div className='container'>
        <Photo />
      </div>
      <footer>
        Rocket Gallery &copy; 2024
      </footer>
    </div>
  );
}

export default App;
