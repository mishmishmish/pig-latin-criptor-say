import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [userText, setUserText] = useState<string>("")
  function handleChange(event: { target: { value: String; }; }) {
    const textAreaText = event.target.value
    const result = textAreaText
      .split(" ")
      .filter(word => word.trim()!=="")
      .map(word => {
        if (word.length === 1){
          return word+"ay"
        }
        else { 
          return word.slice(1) + "-" + word[0] + "ay"
        }
      }).join(" ")
    setUserText(result);
  }

  return (
    <div>
      <textarea onChange={handleChange} />
      <h2>our-yay esults-ray</h2>
      <p>{userText}</p>
    </div>
  );
}

export default App;
