import React from 'react';
import Pagetitle from '../elements/Pagetitle';

const aboutContent = {
  name: 'Pablo Alvarez Imaz',
  avatarImage: './images/alvarezimazpablo-about.png',
  content:
    'I am Pablo Alvarez Imaz, a software developer based in Melbourne, Australia. A tech lover with a background in Education and Philosophy, I love to explore and face new challenges.',
};

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              {/* <div className="row"> */}
              <div className="col-md-12">
                <p>{aboutContent.content}</p>
                <div className="mt-3">
                  <a
                    href="./files/Alvarez_Imaz_Pablo_resume_221007.pdf"
                    target="_blank"
                    className="btn btn-default"
                  >
                    Check my Resume
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
