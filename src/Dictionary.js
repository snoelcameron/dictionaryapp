import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import Phonetic from "./Phonetic";
import About from "./About";
import "./App.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey = "563492ad6f91700001000001811ee53afd4e4e7494ca0a4e4f740b9b";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="formLayout">
          <form onSubmit={handleSubmit}>
            <h3>What word do you want to look up?</h3>
            <input
              type="search"
              placeholder=" 🔍 Search for a word"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="search-input"
              onChange={handleKeywordChange}
            />
          </form>
        </div>
        <div class="col">
          <Result className="definitionResult" definition={definition} />
          <Phonetic className="Sound" />
          <About />
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
