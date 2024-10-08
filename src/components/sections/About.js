import React from 'react';
import Pagetitle from '../elements/Pagetitle';

const aboutContent = {
  name: 'Pablo Alvarez Imaz',
  avatarImage: './images/alvarezimazpablo-about.png',
  content:
    "Hi there! I am Pablo, a software developer based in Melbourne, Australia; a problem solver with a background in Education and Philosophy. I also have extensive experience working in both large corporations and small startups. I enjoy exploring ideas, working in teams, and mountain climbing. Let's get in touch!",
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
