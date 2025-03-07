import React, { Suspense } from "react";
import ScrollToTop from "react-scroll-to-top";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.svg";

const RandomComponent = React.lazy(() => import("./components/RandomComponent"));
const BreedsComponent = React.lazy(() => import("./components/BreedsComponent"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The Cat API React App</p>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="random">
          <RandomComponent />
        </div>
        <div className="breeds">
          <BreedsComponent />
        </div>
      </Suspense>
      <ScrollToTop smooth color="#61dafb" />
    </div>
  );
}

export default App;
