import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos.length) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.portrait}
                    className="img-fluid"
                    alt={photo.photographer}
                  />
                </a>
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
