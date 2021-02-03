import React, { useState } from "react";
import "./Header.css";

const Header = (props) => {
  let specifyImgClassName = props.shouldExpand
    ? "head-img-expanded"
    : "head-img-contracted";

  let specifyTextClassName = props.shouldExpand
    ? "head-text-expanded"
    : "head-text-contracted";
  return (
    <div className="head-container">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt=""
        className={`head-img ${specifyImgClassName}`}
      />
      <h1 className={`head-text ${specifyTextClassName}`}>Name Your Org!</h1>
    </div>
  );
};

export default Header;
