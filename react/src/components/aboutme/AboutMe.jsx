import React, { useState, useEffect } from "react";
import "./aboutMe.css";

function AboutMe() {
  const [Mystyle, setMyStyle] = useState({
    backgroundColor: "black",
    color: "white",
  });

  const [thistime, setthisTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setthisTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stylesetter = () => {
    if (Mystyle.color === "white") {
      setMyStyle({ backgroundColor: "white", color: "black" });
    } else {
      setMyStyle({ backgroundColor: "black", color: "white" });
    }
  };

  return (
    <div className="aboutMe" id="aboutMe" style={Mystyle}>
      <h1>this is aboutus</h1>
      <button onClick={stylesetter}>
        {Mystyle.color === "white" ? "enable light mode" : "enable dark mode"}
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In animi
        incidunt enim corporis odit culpa, dolor suscipit deserunt. Pariatur
        illum quod error nesciunt, neque hic omnis mollitia totam placeat quo!
      </p>

      <div>
        <h5>my time is: {thistime}</h5>
      </div>
    </div>
  );
}

export default AboutMe;
