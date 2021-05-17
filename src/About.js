import React from "react";
import "./App.css";

export default function About() {
  return (
    <div className="AboutSection">
      <div className="layoutPhonetic">
        <h2>About</h2>
        <div className="AboutText">
          <a
            href="https://github.com/snoelcameron/dictionaryapp"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code,{" "}
          </a>
          <a
            href="https://confident-booth-188282.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify{" "}
          </a>
          <br />
          By{" "}
          <a
            href="https://www.linkedin.com/in/sarah-noel-960740b2/"
            target="_blank"
            rel="noreferrer"
          >
            Sarah Noel
          </a>{" "}
          <br />
          from Intellisports👩‍💻
        </div>
      </div>
    </div>
  );
}
