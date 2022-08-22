import React, { useState } from 'react';

import Pagetitle from '../elements/Pagetitle';
import Portfolio from '../elements/Portfolio';

const allData = [
  {
    id: 1,
    title: 'ChatApp',
    category: 'GA project',
    image: './images/projects/4-chatapp.webp',
    description: 'A WebSocket-based instant messanger',
    techstack: 'React, Socket.io and Express',
    demo: 'https://paichatapp.herokuapp.com/',
    github: 'https://github.com/palvarezimaz/chatapp-server',
  },
  {
    id: 2,
    title: 'Sweeter, a tweeter clone',
    category: 'GA project',
    image: './images/projects/3-sweeter-clone.webp',
    description: 'SPA App',
    techstack: 'JS, Express, PostgreSQL',
    demo: 'https://sweetersocialmedia.herokuapp.com/',
    github: 'https://github.com/palvarezimaz/social_media_app',
  },
  {
    id: 3,
    title: 'The Dead Cryptos Archives',
    category: 'GA project',
    image: './images/projects/2-cryptos.webp',
    description: 'CRUD App',
    techstack: 'Rubi, Sinatra and PostgreSQL',
    demo: 'https://deadcryptos.herokuapp.com/',
    github: 'https://github.com/palvarezimaz/crude-app',
  },
  {
    id: 4,
    title: "Monkey Island's Tic-Tac-Toe",
    category: 'GA project',
    image: './images/projects/1-monkeytoe.webp',
    description: 'A retro take with score tracking and audio effects',
    techstack: 'JS, CSS and HTML',
    demo: 'https://palvarezimaz.github.io/tic-tac-toe/',
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
              <div className=" btn-group grid-item ">
                <div className=" mx-auto align -middle" aria-current="page">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel=""
                    className="btn btn-default"
                  >
                    Demo
                  </a>
                </div>
                <div className=" mx-auto align -middle" aria-current="page">
                  <a
                    href={item.github}
                    target="_blank"
                    rel=""
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
