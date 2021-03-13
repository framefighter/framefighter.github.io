import React, { useState, useEffect } from 'react';
import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ImageGallery from './components/ImageGallery';
import SiteNavigation from './components/SiteNavigation';

export const Sites = ["New", "Work", "Contact", "About"];

export interface LoadedImage {
  src: string,
  path: string,
  category: string,
}

function importAll(r): Array<LoadedImage> {
  return r.keys()
    .map(f => ({ src: r(f)?.default?.toString(), path: f, category: f.split("/")[1] }));
}


function App() {
  const [site, setSite] = useState<string>(Sites[0]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const req = require.context("../public/images/", true, /\.(png|jpe?g|svg)$/i);
    const imported = importAll(req);
    console.log(imported);
    setImages(imported);
  }, [])

  const getSite = (): JSX.Element => {
    switch (site) {
      case Sites[0]:
        return <div
          className="main_picture"
          style={{ backgroundImage: `url(${images[0]?.src})` }}
          onClick={() => {
            setSite(Sites[1])
          }}
        />
      case Sites[1]:
        return <ImageGallery images={images} />
      case Sites[2]:
        return <ContactPage />
      case Sites[3]:
        return <AboutPage />
      default:
        return <></>
    }
  }

  return (
    <div className="app">
      <SiteNavigation setSite={setSite} site={site} sites={Sites} />
      <header className="app-header">
        <h1 className="header_text">{site}</h1>
      </header>
      <article className="main_content">
        {getSite()}
      </article>
    </div>
  );
}

export default App;
