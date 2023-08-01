import React, { Component } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Project";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;