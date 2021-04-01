import React, { useState, useEffect } from 'react';
import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ImageGallery from './components/ImageGallery';
import MainImage from './components/MainImage';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import HeaderText from './components/HeaderText';
import ContactJson from "./config/contact.json";
import AboutJson from "./config/about.json";
import PagesJson from "./config/pages.json";

export type Site = { path: string, name: string };
export const sites: Site[] = PagesJson.sites;

export interface LoadedImage {
  src: string,
  filename: string,
  path: string,
  category: string,
}

interface Contact {
  name: string,
  email?: string,
  phoneNumber?: string,
  address?: string,
  photoSrc?: LoadedImage,
}

function importAll(r: __WebpackModuleApi.RequireContext): Array<LoadedImage> {
  return r.keys()
    .map(f => ({ src: r(f)?.default?.toString(), path: f, filename: f.split("/")[2], category: f.split("/")[1] }));
}

function App() {
  const [images, setImages] = useState<LoadedImage[]>([]);
  const [other, setOther] = useState<LoadedImage[]>([]);
  const [aboutText, setAboutText] = useState<string>("[PH] loading about...");
  const [contactObj, setContactObj] = useState<Contact>(ContactJson);

  useEffect(() => {
    const req = require.context("../public/images/", true, /\.(png|jpe?g|svg)$/i);
    const req_other = require.context("../public/other/", true, /\.(png|jpe?g|svg|txt|json)$/i);
    const imported = importAll(req);
    const imported_other = importAll(req_other);
    setImages(imported);
    setOther(imported_other);
  }, [])

  useEffect(() => {
    let src = other.find((i: LoadedImage) => i.path.includes("about"))?.src;
    if (src) {
      fetch(src).then(e => e.text())
        .then(t => setAboutText(t))
        .catch(err => console.error(err))
    }
  }, [other])

  useEffect(() => {
    let src = other.find((i: LoadedImage) => i.path.includes("contact.png"));
    if (src) {
      setContactObj(o => ({ ...o, photoSrc: src }));
    }
  }, [other])

  useEffect(() => {
    let src = other.find((i: LoadedImage) => i.path.includes("contact.json"));
    if (src) {
      console.log(src)
      fetch(src.path)
        .then(e => e.text())
        .then(t => {
          console.log(t)
          setContactObj(o => ({ ...o, ...JSON.parse(t) }))
        })
        .catch(err => console.error(err))
    }
  }, [other])

  return (
    <div className="app">
      <HashRouter
        // basename={PagesJson.basePath}
      >
        <Navigation
          sites={sites}
          className="site_navigation"
        />
        <HeaderText title={"[PH] web"} />
        <div className="main_content">
          <Switch>
            <Route exact path={PagesJson.basePath}>
              <Redirect
                to={sites[0]?.path}
              />
            </Route>
            <Route path={sites[0]?.path}>
              <MainImage
                images={images}
                count={3}
              />
            </Route>
            <Route path={sites[1]?.path}>
              <ImageGallery
                images={images}
              />
            </Route>
            <Route path={sites[2]?.path}>
              <ContactPage
                {...contactObj}
              />
            </Route>
            <Route path={sites[3]?.path}>
              <AboutPage
                {...AboutJson}
              />
            </Route>
            <Route path={"/"}>
              <Redirect
                to={PagesJson.basePath}
              />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
