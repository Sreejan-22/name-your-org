import React from "react";
import NameCard from "../NameCard/NameCard";
import "./Results.css";

const Results = (props) => {
  const displayVal = props.namesDisplayed;
  let styleVal = null;
  if (displayVal.length) {
    styleVal = "flex";
  } else {
    styleVal = "none";
  }
  return (
    <div style={{ display: styleVal }} className="result-container">
      {displayVal.length > 0
        ? displayVal.map((item, index) => {
            return <NameCard cardName={item} key={index} />;
          })
        : ""}
    </div>
  );
};

export default Results;
