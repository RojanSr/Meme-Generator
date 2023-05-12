import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="flex">
        <img
          src="./images/troll-face.png"
          alt="Logo"
          className="header--logo"
        />
        <h1 className="header--title">Meme Generator</h1>
      </div>

      <h3 className="header--course">React Course - Project 3</h3>
    </nav>
  );
}
