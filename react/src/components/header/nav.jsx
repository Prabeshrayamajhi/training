import React from "react";
import PropTypes from "prop-types";
import "./nav.css";

function Nav(props) {
  const modeChnager = () => {
    console.log("modeChnager");
  };
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img
            src="https://images.unsplash.com/photo-1557461762-e08315322e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt="nav logo"
          />
          <h3>{props.logoName}</h3>
        </div>
        <div className="links">
          <a className="link" href="/">
            home
          </a>
          <a className="link" href="/">
            aboutme
          </a>
          <a className="link" href="/">
            contact
          </a>
          <button onClick={modeChnager}>Mode</button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

Nav.propTypes = {
  name: PropTypes.string,
};
