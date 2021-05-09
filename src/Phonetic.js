import React from "react";
import "./App.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sound
        </a>
        <h2>{props.phonetic.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}
