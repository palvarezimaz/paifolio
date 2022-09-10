import React from 'react';
import Pagetitle from '../elements/Pagetitle';

// additionalTransfrom={0}
//   arrows
//   autoPlay
//   autoPlaySpeed={1000}
//   centerMode={false}
//   className=""
//   containerClass="container-with-dots"
//   dotListClass=""
//   draggable
//   focusOnSelect={false}
//   infinite
//   itemClass=""
//   keyBoardControl
//   minimumTouchDrag={80}
//   pauseOnHover
//   renderArrowsWhenDisabled={false}
//   renderButtonGroupOutside={false}
//   renderDotsOutside={false}
//   responsive={{
//     desktop: {
//       breakpoint: {
//         max: 3000,
//         min: 1024
//       },
//       items: 3,
//       partialVisibilityGutter: 40
//     },
//     mobile: {
//       breakpoint: {
//         max: 464,
//         min: 0
//       },
//       items: 1,
//       partialVisibilityGutter: 30
//     },
//     tablet: {
//       breakpoint: {
//         max: 1024,
//         min: 464
//       },
//       items: 2,
//       partialVisibilityGutter: 30
//     }
//   }}
//   rewind={false}
//   rewindWithAnimation={false}
//   rtl={false}
//   shouldResetAutoplay
//
//   sliderClass=""
//

// >

const skillSet = [
  {
    id: 1,
    alt: 'CSS',
    skill: 'CSS',
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
    skill: 'JavaScript',
    image: './images/skill-js.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 4,
    alt: 'jQuery',
    skill: 'jQuery',
    image: './images/skill-jquery.png',
    url: 'https://jquery.com/',
  },
  {
    id: 5,
    alt: 'NodeJS',
    skill: 'NodeJS',
    image: './images/skill-nodejs.svg',
    url: 'https://nodejs.org',
  },
  {
    id: 6,
    alt: 'ExpressJS',
    skill: 'ExpressJS',
    image: './images/skill-expressJS.svg',
    url: 'https://expressjs.com',
  },
  {
    id: 7,
    alt: 'ReactJS',
    skill: 'ReactJS',
    image: './images/skill-react.svg',
    url: 'https://reactjs.org/',
  },
  {
    id: 8,
    alt: 'Socket.io',
    skill: 'Socket.io',
    image: './images/skill-socketio.svg',
    url: 'https://socket.io/',
  },
  {
    id: 9,
    alt: 'Postman',
    skill: 'Postman',
    image: './images/skill-postman.png',
    url: 'https://postman.com',
  },
  {
    id: 10,
    alt: 'JestJS',
    skill: 'JestJS',
    image: './images/skill-jestj.svg',
    url: 'https://jestjs.io',
  },
  {
    id: 11,
    alt: 'Ruby',
    skill: 'Ruby',
    image: './images/skill-ruby.svg',
    url: 'https://www.ruby-lang.org/en',
  },
  {
    id: 12,
    alt: 'PostgreSQL',
    skill: 'PostgreSQL',
    image: './images/skill-postgresql.svg',
    url: 'https://www.postgresql.org',
  },
  {
    id: 13,
    alt: 'Git',
    skill: 'Git',
    image: './images/skill-git.svg',
    url: 'https://git-scm.com/',
  },
  {
    id: 14,
    alt: 'GitHub',
    skill: 'GitHub',
    image: './images/skill-github.svg',
    url: 'https://github.com/',
  },
  {
    id: 15,
    alt: 'Docker',
    skill: 'Docker',
    image: './images/skill-docker.png',
    url: 'https://www.docker.com/',
  },
  // {
  //   id: 16,
  //   alt: 'Heroku',
  //   image: './images/skill-heroku.svg',
  //   url: 'https://heroku.com',
  // },
  // {
  //   id: 17,
  //   alt: 'Surge',
  //   image: './images/skill-surge3.svg',
  //   url: 'https://surge.sh/',
  // },

  // heroku - https://heroku.com
  // surge - https://surge.sh/
];

function Skills() {
  return (
    <div id="skilllogos">
      <div className="container">
        <Pagetitle title="Skills" />
        <div className="row align-items-start justify-content-evenly">
          {skillSet.map((skill) => (
            <div className="col-md-2 col-2" key={skill.id}>
              <div className="skill-item">
                <div className="inner">
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    width="250px"
                    height="250px"
                  />
                </div>
                <a href={skill.url} target="_blank" rel=" noopener">
                  {skill.skill}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
