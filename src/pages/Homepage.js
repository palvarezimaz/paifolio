import React, { useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import Header from '../components/layouts/Header';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import Herosection from '../components/sections/Herosection';
import Projects from '../components/sections/Projects';

function Homepage() {
  document.body.classList.add('dark');
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
        logoSource="./images/logo.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
        setToggleMenu={setToggleMenu}
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

        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage;
