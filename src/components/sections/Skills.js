import React from 'react';
import Pagetitle from '../elements/Pagetitle';

const skillSet = [
  {
    id: 1,
    image: './images/skill-css3.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 2,
    image: './images/client-2.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 3,
    image: './images/client-3.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 4,
    image: './images/client-4.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 5,
    image: './images/client-5.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 6,
    image: './images/client-6.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 7,
    image: './images/client-7.svg',
    url: 'https://www.w3schools.com/css/',
  },
  {
    id: 8,
    image: './images/client-8.svg',
    url: 'https://www.w3schools.com/css/',
  },
];

function Skills() {
  return (
    <div id="skilllogos">
      <div className="container">
        <Pagetitle title="Skills" />
        <div className="row">
          {skillSet.map((skill) => (
            <div className="col-md-3 col-6" key={skillSet.id}>
              <div className="skill-item">
                <div className="inner">
                  <a href={skillSet.url} target="_blank" rel=" noopener"></a>
                  <img src={skillSet.image} alt="css" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
