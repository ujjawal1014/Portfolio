import React from 'react';
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About Me/About_Me";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Achievements from './Achievements/Achievements';
import Responsibilities from './Responsibilities/Responsibilities';

// Import styles
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/common.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Education />
        <Skills />
        <Project />
        <Achievements />
        <Responsibilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
