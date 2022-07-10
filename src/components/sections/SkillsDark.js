import React from 'react';
import Pagetitle from '../elements/Pagetitle';

const skillSet = [
  {
    id: 1,
    alt: 'css',
    image: 'images/skill-css3.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 2,
    alt: 'html',
    image: 'images/skill-html.png',
    url: 'https://www.w3schools.com/html/',
  },
  {
    id: 3,
    image: 'images/skill-js.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  // jquery
  // node
  // express
  // react
  //socket.io
  //postman
  // jest
  // ruby
  // minitest
  // git
  // github
  // postgreSQL
  //
  // heroku
  // surge

  {
    id: 4,
    alt: 'jQuery',
    image: 'images/client-4-light.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 5,
    alt: 'Node.js',
    image: 'images/client-5-light.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 6,
    alt: 'ExpressJs',
    image: 'images/client-6-light.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 7,
    alt: 'React',
    image: 'images/client-7-light.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 8,
    alt: '',
    image: 'images/client-8-light.svg',
    url: 'https://www.w3schools.com/css/',
  },
];

function SkillsDark() {
  return (
    <div id="skilllogos">
      <div className="container">
        <Pagetitle title="Skills" />
        <div className="row align-items-start justify-content-evenly">
          {skillSet.map((skill) => (
            <div className="col-md-2 col-2" key={skill.id}>
              <div className="skill-item">
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <div className="inner">
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    width="70px"
                    height="70px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsDark;
