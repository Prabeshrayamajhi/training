import React from "react";
import Img from "../../Assets/nav.jpg";
import "./Navigation.css";

function navigation() {
  window.onscroll = () => {
    // const nav = document.querySelector(".header");
    // if (window.scrollY > 300) {
    //   nav.classList.toggle("active");
    // } else {
    //   nav.classList.remove("active");
    // }
    console.log(window.scrollY);
  };

  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="nav-logo">
            <img src={Img} alt="nav logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default navigation;
