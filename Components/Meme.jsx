import React from "react";
import memeImg from "../memesData";

export default function Meme() {
  const [imgurl, setImgurl] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
  });

  function generateMeme() {
    //Checking if there is error on the file
    if (memeImg.success === false) {
      return console.error("memesData Fetch Failure");
    }

    //Getting random number from 0 to 100
    const randIndex = Math.floor(Math.random() * memeImg.data.memes.length);
    setImgurl(memeImg.data.memes[randIndex]);
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

      <img src={imgurl.url} alt="a new meme image" className="meme--img" />
    </main>
  );
}
