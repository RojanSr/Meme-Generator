import React from "react";
import memeImg from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function generateMeme() {
    //Checking if there is error on the file
    if (memeImg.success === false) {
      return console.error("memesData Fetch Failure");
    }
    //Getting random number from 0 to 100
    const randIndex = Math.floor(Math.random() * memeImg.data.memes.length);
    setMeme(memeImg.data.memes[randIndex]);
  }

  return (
    <main className="flex">
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={generateMeme} className="form--button">
          Get a new Image 🌄
        </button>
      </div>

      <div className="meme">
        <img src={meme.url} alt="a new meme image" className="meme--img" />
        <h2 className="meme--text topText">{meme.topText}</h2>
        <h2 className="meme--text bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
