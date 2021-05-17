import React from "react";
import Synonym from "./Synonym";
import "./App.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <div className="layoutResult">
          <h2>{props.meaning.partOfSpeech}</h2>
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <h3>{definition.definition}</h3>
                <em>{definition.example}</em>
                <Synonym synonym={definition.synonym} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
