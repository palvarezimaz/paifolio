import React from 'react';
import Pagetitle from '../elements/Pagetitle';

const skillSet = [
  {
    id: 1,
    alt: 'CSS',
    image: './images/skill-css3.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 2,
    alt: 'HTML',
    image: './images/skill-html.png',
    url: 'https://www.w3schools.com/html/',
  },
  {
    id: 3,
    alt: 'JS',
    image: './images/skill-js.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 4,
    alt: 'jQuery',
    image: './images/skill-jquery.png',
    url: 'https://jquery.com/',
  },
  {
    id: 5,
    alt: 'NodeJS',
    image: './images/skill-nodejs.svg',
    url: 'https://nodejs.org',
  },
  {
    id: 6,
    alt: 'ExpressJS',
    image: './images/skill-expressJS.svg',
    url: 'https://expressjs.com',
  },
  {
    id: 7,
    alt: 'ReactJS',
    image: './images/skill-react.svg',
    url: 'https://reactjs.org/',
  },
  {
    id: 8,
    alt: 'Socket.io',
    image: './images/skill-socketio.svg',
    url: 'https://socket.io/',
  },
  {
    id: 9,
    alt: 'Postman',
    image: './images/skill-postman.png',
    url: 'https://postman.com',
  },
  {
    id: 10,
    alt: 'JestJS',
    image: './images/skill-jestj.svg',
    url: 'https://jestjs.io',
  },
  {
    id: 11,
    alt: 'Ruby',
    image: './images/skill-ruby.svg',
    url: 'https://www.ruby-lang.org/en',
  },
  {
    id: 12,
    alt: 'PostgreSQL',
    image: './images/skill-postgresql.svg',
    url: 'https://www.postgresql.org',
  },
  {
    id: 13,
    alt: 'Git',
    image: './images/skill-git.svg',
    url: 'https://git-scm.com/',
  },
  {
    id: 14,
    alt: 'GitHub',
    image: './images/skill-github.svg',
    url: 'https://github.com/',
  },
  {
    id: 15,
    alt: 'Docker',
    image: './images/skill-docker.png',
    url: 'https://www.docker.com/',
  },
  {
    id: 16,
    alt: 'Heroku',
    image: './images/skill-heroku.svg',
    url: 'https://heroku.com',
  },
  {
    id: 17,
    alt: 'Surge',
    image: './images/skill-surge3.svg',
    url: 'https://surge.sh/',
  },

  // heroku - https://heroku.com
  // surge - https://surge.sh/
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
                <a href={skill.url} target="_blank" rel=" noopener"></a>
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
