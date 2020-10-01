import React from 'react';
import './App.css';
import { Gallery } from '../gallery/gallery';

function App() {
  return (
    <div className="App">
      <header>
        <title>
          YouAndMeme
        </title>
        <h1 id="pageTitle">
          YouAndMeme
        </h1>
      </header>
      <section className="test">
        <Gallery />
      </section>
    </div>
  );
}

export default App;
