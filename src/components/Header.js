import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="App-header">
      <h2><Link to="/" className="link">{props.text}</Link></h2>
    </header>
  );
};
export default Header;