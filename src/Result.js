import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./App.css";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <div>
          <h2>{props.definition.word}</h2>
          {props.definition.phonetics.map(function (phonetic, index) {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
        </div>

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
