import React from "react";
//import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <em>{definition.example}</em>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

//<Synonyms synonyms={definition.synonyms} />;
