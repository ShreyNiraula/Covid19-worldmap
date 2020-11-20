import React from "react";
import "./headerStyles.css";

const Header = () => {
  return (
    <div className="header">
      <span id="covid"> Covid-19 </span> <span id="global"> Global </span>{" "}
      <span id="visualization"> Visualization</span>
    </div>
  );
};
export default Header;
