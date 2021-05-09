import "./App.css";
import Phonetic from "./Phonetic";
import Result from "./Result";
import About from "./About";
import Photos from "./Photos";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <p>Dictionary App</p>
        </header>
        <Dictionary defaultKeyword="cat" />
        <About />
      </div>
    </div>
  );
}

export default App;
