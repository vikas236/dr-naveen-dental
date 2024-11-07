import { useEffect } from "react";
import {
  BrowserRouter as Router,
  // Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Nav from "./components/Nav.jsx";

import "./App.css";

function App() {
  function RouteHandler() {
    const location = useLocation();

    useEffect(() => {
      // const preloading = document.querySelector(".preloading");
      const body = document.querySelector("body");

      // preloading.classList.remove("inactive");
      body.style.overflow = "hidden";

      setTimeout(() => {
        // preloading.classList.add("inactive");
        body.style.overflow = "scroll";
      }, 1000);
    }, [location]);

    return;
  }

  return (
    <Router>
      <Nav />
      <RouteHandler />
      <Routes></Routes>
    </Router>
  );
}

export default App;
