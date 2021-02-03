import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Searchbox from "./Components/Searchbox/Searchbox";
import Results from "./Components/Results/Results";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [isExpanded, setExpanded] = useState(true); // state which controls the image dispalayed in the Header component
  const [names, displayNames] = useState([]); // state which controls the names displayed in the Result Component

  function handleInputChange(inputText) {
    inputText ? setExpanded(false) : setExpanded(true);
    inputText ? displayNames(name(inputText)) : displayNames([]);
  }

  return (
    <div>
      <Header shouldExpand={isExpanded} />
      <Searchbox
        onInputChange={(inputText) => {
          handleInputChange(inputText);
        }}
      />
      <Results namesDisplayed={names} />
    </div>
  );
}

export default App;
