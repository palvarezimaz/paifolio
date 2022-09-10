import React from 'react';
import Pagetitle from '../elements/Pagetitle';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlides: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlides: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillSet = [
    {
      id: 1,
      alt: 'CSS',
      name: 'CSS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      url: 'https://www.w3schools.com/css/',
    },
    {
      id: 2,
      alt: 'HTML',
      name: 'HTML',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      url: 'https://www.w3schools.com/html/',
    },
    {
      id: 3,
      alt: 'JS',
      name: 'JavaScript',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      id: 4,
      alt: 'jQuery',
      name: 'jQuery',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
      url: 'https://jquery.com/',
    },
    {
      id: 5,
      alt: 'NodeJS',
      name: 'NodeJS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      url: 'https://nodejs.org',
    },
    {
      id: 6,
      alt: 'ExpressJS',
      name: 'ExpressJS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      url: 'https://expressjs.com',
    },
    {
      id: 7,
      alt: 'ReactJS',
      name: 'ReactJS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      url: 'https://reactjs.org/',
    },
    {
      id: 8,
      alt: 'Socket.io',
      name: 'Socket.io',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
      url: 'https://socket.io/',
    },
    {
      id: 9,
      alt: 'Jest',
      name: 'Jest',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      url: 'https://jestjs.io',
    },
    {
      id: 10,
      alt: 'Ruby',
      name: 'Ruby',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
      url: 'https://www.ruby-lang.org/en',
    },
    {
      id: 11,
      alt: 'PostgreSQL',
      name: 'PostgreSQL',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      url: 'https://www.postgresql.org',
    },
    {
      id: 12,
      alt: 'Git',
      name: 'Git',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      url: 'https://git-scm.com/',
    },
    // {
    //   id: 13,
    //   alt: 'GitHub',
    //   name: 'GitHub',
    //   image: './images/skill-github.svg',
    //   url: 'https://github.com/',
    // },
    {
      id: 13,
      alt: 'Docker',
      name: 'Docker',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      url: 'https://www.docker.com/',
    },
    // {
    //   id: 16,
    //   alt: 'Heroku',
    //   name: 'Heroku',
    //   image: './images/skill-heroku.svg',
    //   url: 'https://heroku.com',
    // },
    // {
    //   id: 17,
    //   alt: 'Surge',
    //   name: 'Surge',
    //   image: './images/skill-surge3.svg',
    //   url: 'https://surge.sh/',
    // },

    // heroku - https://heroku.com
    // surge - https://surge.sh/
  ];

  return (
    <div id="skilllogos">
      <div className="container">
        <Pagetitle title="Skills" />
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1800}
          keyBoardControl={true}
          customTransition="all .5"
          // transitionDuration={100}
          centerMode={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          additionalTransfrom={0}
          arrows={false}
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
          className=""
          // containerClass="container-with-dots"
          dotListClass=""
          // dotListClass="custom-dot-list-style"
          // focusOnSelect={true}
          // itemClass=""
          // itemClass="carousel-item-padding-40-px"
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          ////////////
          sliderClass=""
          slidesToSlide={2}
          rewind={false}
          rewindWithAnimation={false}
          rtl={true}
          shouldResetAutoplay
        >
          {/* <div className="row align-items-start justify-content-evenly"> */}
          {skillSet.map((skill) => (
            <div
              className="carousel-skills 
              row align-items-start justify-content-evenly col-md-2 col-2"
              key={skill.id}
            >
              <div className="skill-item">
                <div className="inner">
                  <img
                    src={skill.image}
                    alt={skill.alt}
<<<<<<< HEAD
                    width="70px"
                    height="70px"
                    onFocus={skill.name}
                  />
                  {/* <p>
                    <a href={skill.url} target="_blank" rel=" noopener">
                      {skill.name}
                    </a>
                  </p> */}
=======
                    // width="150px"
                    // height="150px"
                  />
                  <a
                    className="mouse-wrapper"
                    href={skill.url}
                    target="_blank"
                    rel=" noopener"
                  >
                    <h4>{skill.name}</h4>
                  </a>
>>>>>>> carrousel
                </div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
}

export default Skills;
