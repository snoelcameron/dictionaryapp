import React from "react";
import "./App.css";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <div className="Synonym">
        <h2>Synonyms:</h2>

        <h3>
          <ul>
            {props.synonym.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </h3>
      </div>
    );
  } else {
    return null;
  }
}
