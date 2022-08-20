import React, { useState, useEffect } from "react";
import "./Hooks.css";

function Hooks() {
  const [img, setimg] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://api.unsplash.com/photos/?client_id=lCUZmaa3iNazJb2oLU7SLuVf5NsKpsPx9s_CjXBrC5U"
    );
    const data = await api.json();

    setimg(data);
    console.log(data);
  };

  return (
    <>
      <div className="Hooks-container">
        <h1>Our clients</h1>
        <div className="card-container">
          {img.map((Element) => {
            return (
              <>
                <div className="card">
                  <img
                    src={Element.user.profile_image.large}
                    alt={Element.id}
                  />
                  <h2>{Element.user.name}</h2>
                  <a href={Element.user.portfolio_url} target="__blank">
                    {Element.user.portfolio_url === null ? "" : "Profile link"}
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Hooks;
