import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';


function importAll(r) {
  return r.keys().map(r);
}

function App() {

  const req = require.context("../public/images/", false, /\.(png|jpe?g|svg)$/);
  const images = importAll(req);

  return (
    <div className="App">
      <header className="App-header">
        <h1>[PH] Title</h1>
        <ImageGallery images={images.map(src => src.default.toString())} />
      </header>
    </div>
  );
}

export default App;
