import Breeds from "./components/BreedsComponent";
import Random from "./components/RandomComponent";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The Cat API React App</p>
      </header>
      <div className="random">
        <Random />
      </div>
      <Breeds />
      <ScrollToTop smooth color="#61dafb" />
    </div>
  );
}

export default App;
