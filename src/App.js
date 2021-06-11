import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import {Predictions} from 'aws-amplify';

function App() {
  const [response, setResponse] = useState("Будь ласка, завантажте фото...")
  async function identify(event) {
    setResponse("Ідентифікуємо текст...")
    const { target: { files }} = event
    const file = files[0]
    const data = await Predictions.identify({
      text: { source: { file }, format: "PLAIN" }
    })
    setResponse(data.text.fullText)
  }
  return (
    <div className="App">
      <h3>Ідентифікація тексту</h3>
      <input
        type="file" onChange={identify}
      />
      <p>{response}</p>
    </div>
  );
}

export default App;
