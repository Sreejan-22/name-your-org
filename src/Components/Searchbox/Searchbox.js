import React from "react";
import "./Searchbox.css";

// class Searchbox extends React.Component {
//     constructor() {
//         this.state = {

//         }
//     }
// }

const Searchbox = (props) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type a keyword"
        onChange={(e) => props.onInputChange(e.target.value)}
      />
    </div>
  );
};

export default Searchbox;
