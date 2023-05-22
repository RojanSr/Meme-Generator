import React from "react";

export default function Meme() {
  //State that stores a state object variable
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
  });

  //State that stores an array of memes that consists of 100 objects with meme url
  const [memesArray, setMemesArray] = React.useState();

  //Fetching memes api then setting the memes array into memesArray state variable
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesArray(data.data.memes));
  }, []);

  //This function handle every change in form input and stores in state to be rendered
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  //This function generate a random url meme then sets it up into meme.url state
  function generateMeme() {
    //Getting random number from 0 to 100
    const randIndex = Math.floor(Math.random() * memesArray.length);
    // setMeme(memesArray[randIndex]);
    setMeme((prevState) => ({ ...prevState, url: memesArray[randIndex].url }));
  }

  return (
    <main className="flex">
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          // note: name here must be same as in state so that we can later provide value to those name key in object
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
