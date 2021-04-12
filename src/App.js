import React, { useState } from "react";
import "./styles.css";

// var color:"blue"
var emojiDictionary = {
  "😊": "smiling face",
  "😍": "smiling face with hearts",
  "🥺": " Pleading Face",
  "💖": " Sparkling Heart",
  "😡": " Pouting Face",
  "🥴": " Woozy Face",
  "🤷‍♂️": "Man Shrugging",
  "😲": "Astonished Face",
  "🤓": "Nerd Face"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Converter </h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>know what these emoijs mean!!!</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
