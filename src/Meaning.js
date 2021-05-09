import React from "react";
//import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <h3>{definition.definition}</h3>
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
