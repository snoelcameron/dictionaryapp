import React from "react";
import "./App.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h2>{props.phonetic.text}</h2>
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Sound 🔈</button>
        </a>
      </div>
    );
  } else {
    return null;
  }
}
