import React, { useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import Header from '../components/layouts/Header';
import About from '../components/sections/About';
import SkillsDark from '../components/sections/SkillsDark';
import Contact from '../components/sections/Contact';
import History from '../components/sections/History';
import Herosection from '../components/sections/Herosection';
import Projects from '../components/sections/Projects';

function HomepageDark() {
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
        logoSource="/images/logo.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? 'content open' : 'content'}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection dark />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-skills">
          <SkillsDark />
        </Element>

        <Element name="section-projects">
          <Projects />
        </Element>
        <Element name="section-History">
          <History />
        </Element>

        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default HomepageDark;
