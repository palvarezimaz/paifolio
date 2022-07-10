import React, { useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import Header from '../components/layouts/Header';
import Herosection from '../components/sections/Herosection';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import History from '../components/sections/History';
import Contact from '../components/sections/Contact';

function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener('click', function (e) {
    if (e.target.closest('.content')) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="./paifolio/images/logo.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? 'content open' : 'content'}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>

        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-skills">
          <Skills />
        </Element>
        <Element name="section-projects">
          <Projects />
        </Element>
        {/* <Element name="section-History">
          <History />
        </Element> */}
        <Element name="section-contact">
          <Contact />
        </Element>

        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage;
