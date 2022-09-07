import React from 'react';
import Pagetitle from '../elements/Pagetitle';

const aboutContent = {
  name: 'Pablo Alvarez Imaz',
  avatarImage: './images/alvarezimazpablo-about.png',
  content:
    "Hi there! I am Pablo, a software developer based in Melbourne, Australia; a tech lover who used to teach Public Speaking and Philosophy. I also have extensive work experience in large Corporations and small start ups. I enjoy exploring ideas, facing technical challenges, and mountain climbing. Let's get in touch!",
};

console.log(
  "I salute you, Rider of the Console. Drop me a line and let's have a chat!"
);

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
              <div className="row">
                <div className="col-md-12">
                  <p>{aboutContent.content}</p>

                  <div className="mt-3">
                    <a
                      href="./files/Alvarez_Imaz_Pablo_resume.pdf"
                      target="_blank"
                      className="btn btn-default"
                    >
                      Check my Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
