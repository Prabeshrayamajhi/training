import React, { useState } from "react";
import "./home.css";

function Home() {
  const [Text, setText] = useState("");
  const Value = document.querySelector("textarea");

  let toUpperCase = () => {
    setText(Value.value.toUpperCase());
  };

  let toCapatilizeText = () => {
    const str = Text;
    const arr = str.split(" ");
    for (let i in arr) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    setText(str2);
  };

  let toLowerCase = () => {
    setText(Value.value.toLowerCase());
  };

  let toCopyText = () => {
    Value.select();
    navigator.clipboard.writeText(Value.value);
  };

  let toClearText = () => {
    setText(" ");
  };

  let whenChanged = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="home" id="home">
      <h1>this is text converter</h1>
      <textarea
        name=""
        id=""
        cols="10"
        rows="10"
        onChange={whenChanged}
        value={Text}
      />
      <div className="buttons">
        <div>
          <button onClick={toUpperCase}>Uppercase</button>
          <button onClick={toLowerCase}>Lowercase</button>
        </div>
        <div>
          <button onClick={toCapatilizeText}>Capatilize</button>
          <button onClick={toCopyText}>Copy</button>
          <button onClick={toClearText}>clear</button>
        </div>
      </div>
      <div className="stats">
        <p>
          No of words:{" "}
          <span>
            {Text.split(" ").length === 1 ? "0" : Text.split(" ").length}{" "}
          </span>
        </p>
        <p>
          No of characters: <span> {Text.length}</span>{" "}
        </p>
      </div>

      <div className="output-box">
        {Text.length === 0
          ? "Enter a text in above container to get displayed output here."
          : Text}
      </div>
    </div>
  );
}

export default Home;
