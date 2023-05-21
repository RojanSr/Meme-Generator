import React from "react";
import Logo from "../images/troll-face.png";

export default function Header() {
  return (
    <nav>
      <div className="logo-flex">
        <img src={Logo} alt="Logo" className="header--logo" />
        <h1 className="header--title">Meme Generator</h1>
      </div>

      <h3 className="header--course">React Course - Project 3</h3>
    </nav>
  );
}
