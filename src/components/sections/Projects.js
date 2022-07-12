import React, { useState } from 'react';

import Pagetitle from '../elements/Pagetitle';
import Portfolio from '../elements/Portfolio';

const allData = [
  {
    id: 1,
    title: 'ChatApp',
    category: 'GA project',
    image: './images/projects/4-chatapp.png',
    description: 'A WebSocket-based instant messanger',
    techstack: 'React, Socket.io and Express',
    popupLink: 'https://paichatapp.herokuapp.com/',
    github: 'https://github.com/palvarezimaz/chatapp-server',
  },
  {
    id: 2,
    title: 'Sweeter, a tweeter clone',
    category: 'GA project',
    image: './images/projects/3-sweeter-clone.png',
    description: 'SPA App',
    techstack: 'JS, Express, PostgreSQL',
    popupLink: 'https://sweetersocialmedia.herokuapp.com/',
    github: 'https://github.com/palvarezimaz/social_media_app',
  },
  {
    id: 3,
    title: 'The Dead Cryptos Archives',
    category: 'GA project',
    image: './images/projects/2-cryptos.png',
    description: 'CRUD App',
    techstack: 'Rubi, Sinatra and PostgreSQL',
    popupLink: 'https://deadcryptos.herokuapp.com/',
    github: 'https://github.com/palvarezimaz/crude-app',
  },
  {
    id: 4,
    title: "Monkey Island's Tic-Tac-Toe",
    category: 'GA project',
    image: './images/projects/1-monkeytoe.png',
    description: 'A retro take with score tracking and audio effects',
    techstack: 'JS, CSS and HTML',
    popupLink: 'https://palvarezimaz.github.io/tic-tac-toe/',
    github: 'https://github.com/palvarezimaz/tic-tac-toe',
  },
];

function Projects() {
  const [getAllItems] = useState(allData);

  return (
    <section id="Projects">
      <div className="container">
        <Pagetitle title="Recent Projects" />

        <div className="row portfolio-wrapper">
          {getAllItems.map((item) => (
            <div className="col-md-6 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
              {/* <div className="row justify-content-center">
                <div className="mt-3 col-4">
                  <a
                    href={item.popupLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default"
                  >
                    Demo
                  </a>
                </div>
                <div className="mt-3 col-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default"
                  >
                    GitHub
                  </a>
                </div>
              </div> */}
              <div className=" btn-group col-md-6 col-sm-6 grid-item ">
                <div className=" mx-auto align -middle" aria-current="page">
                  <a
                    href={item.popupLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default"
                  >
                    Demo
                  </a>
                </div>
                <div className=" mx-auto align -middle" aria-current="page">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-default"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
