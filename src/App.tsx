import React from 'react';
import logo from "./images/place.png";
import './App.css';
import ImageGallery from './components/ImageGallery';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>[PH] Title</h1>
        <ImageGallery images={Array(100).fill(1).map(() => logo)}/>
      </header>
    </div>
  );
}

export default App;
