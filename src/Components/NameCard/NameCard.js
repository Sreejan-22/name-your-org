import React, { useState } from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

/* When the user clicks on any of the names displayed, it redirects to a page in the namecheap.com website where 
one can check whether that particular domain name is available or not
*/

const NameCard = (props) => {
  return (
    <a href={`${nameCheapUrl}${props.cardName}`} className="card-link">
      <div className="card">
        <p class="card-text">{props.cardName}</p>
      </div>
    </a>
  );
};

export default NameCard;
