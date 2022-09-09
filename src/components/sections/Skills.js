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
      image: './images/skill-css3.svg',
      url: 'https://www.w3schools.com/css/',
    },
    {
      id: 2,
      alt: 'HTML',
      name: 'HTML',
      image: './images/skill-html.png',
      url: 'https://www.w3schools.com/html/',
    },
    {
      id: 3,
      alt: 'JS',
      name: 'JavaScript',
      image: './images/skill-js.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      id: 4,
      alt: 'jQuery',
      name: 'jQuery',
      image: './images/skill-jquery.png',
      url: 'https://jquery.com/',
    },
    {
      id: 5,
      alt: 'NodeJS',
      name: 'NodeJS',
      image: './images/skill-nodejs.svg',
      url: 'https://nodejs.org',
    },
    {
      id: 6,
      alt: 'ExpressJS',
      name: 'ExpressJS',
      image: './images/skill-expressJS.svg',
      url: 'https://expressjs.com',
    },
    {
      id: 7,
      alt: 'ReactJS',
      name: 'ReactJS',
      image: './images/skill-react.svg',
      url: 'https://reactjs.org/',
    },
    {
      id: 8,
      alt: 'Socket.io',
      name: 'Socket.io',
      image: './images/skill-socketio.svg',
      url: 'https://socket.io/',
    },
    {
      id: 9,
      alt: 'Postman',
      name: 'Postman',
      image: './images/skill-postman.png',
      url: 'https://postman.com',
    },
    {
      id: 10,
      alt: 'JestJS',
      name: 'JestJS',
      image: './images/skill-jestj.svg',
      url: 'https://jestjs.io',
    },
    {
      id: 11,
      alt: 'Ruby',
      name: 'Ruby',
      image: './images/skill-ruby.svg',
      url: 'https://www.ruby-lang.org/en',
    },
    {
      id: 12,
      alt: 'PostgreSQL',
      name: 'PostgreSQL',
      image: './images/skill-postgresql.svg',
      url: 'https://www.postgresql.org',
    },
    {
      id: 13,
      alt: 'Git',
      name: 'Git',
      image: './images/skill-git.svg',
      url: 'https://git-scm.com/',
    },
    {
      id: 14,
      alt: 'GitHub',
      name: 'GitHub',
      image: './images/skill-github.svg',
      url: 'https://github.com/',
    },
    {
      id: 15,
      alt: 'Docker',
      name: 'Docker',
      image: './images/skill-docker.png',
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
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1800}
          keyBoardControl={true}
          customTransition="all .5"
          // transitionDuration={00}
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
          focusOnSelect={false}
          // itemClass=""
          itemClass="carousel-item-padding-40-px"
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
          rtl={false}
          shouldResetAutoplay
        >
          {/* <div className="row align-items-start justify-content-evenly"> */}
          {skillSet.map((skill) => (
            <div
              className="
              row align-items-start justify-content-evenly col-md-2 col-2"
              key={skill.id}
            >
              <div className="skill-item">
                <div className="inner">
                  <img
                    src={skill.image}
                    alt={skill.alt}
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
