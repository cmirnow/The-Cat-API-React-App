import BreedsComponent from "./components/BreedsComponent";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Cat API React App
          <br />
          <code>Cat Breeds</code>
        </p>
      </header>
      <BreedsComponent />
      <ScrollToTop smooth color="#61dafb" />
    </div>
  );
}

export default App;
