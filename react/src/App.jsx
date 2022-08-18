import React from "react";
import "./App.css";
import Nav from "./components/header/nav";
import Home from "./components/home/home";
import AboutMe from "./components/aboutme/AboutMe";
import Hooks from "./components/Hooks/Hooks";
import WeatherApp from "./components/weatherApp/WeatherApp";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      {/* <WeatherApp /> */}
      {/* <Nav logoName="logo" /> */}
      {/* <Home /> */}
      {/* <AboutMe /> */}
      <Hooks />
    </>
  );
}

export default App;
