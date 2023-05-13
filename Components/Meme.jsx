import React from "react";
import memeImg from "../memesData";

export default function Meme() {
  function generateMeme() {
    if (memeImg.success === true) {
      const randIndex = Math.floor(Math.random() * memeImg.data.memes.length);

      let url = memeImg.data.memes[randIndex].url;

      console.log(url);
      return url;
    }
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button onClick={generateMeme} className="form--button">
          Get a new Image 🌄
        </button>
      </div>
    </main>
  );
}
