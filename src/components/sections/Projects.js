import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Pagetitle from '../elements/Pagetitle';
import Portfolio from '../elements/Portfolio';

const filters = [
  {
    id: 1,
    text: 'Everything',
  },
];

const allData = [
  {
    id: 1,
    title: 'ChatApp',
    category: 'GA project',
    image: 'images/Projects/4-chatapp.png',
    popupLink: ['https://paichatapp.herokuapp.com/'],
  },
  {
    id: 2,
    title: 'Sweeter, a tweeter clone',
    category: 'GA project',
    image: 'images/Projects/3-sweeter.png',
    popupLink: ['https://sweetersocialmedia.herokuapp.com/'],
  },
  {
    id: 3,
    title: 'The Dead Cryptos Archives',
    category: 'GA project',
    image: 'images/Projects/2-cryptos.png',
    popupLink: ['https://deadcryptos.herokuapp.com/'],
  },
  {
    id: 4,
    title: "Monkey Island's Tic-Tac-Toe",
    category: 'GA project',
    image: 'images/Projects/1-monkeytoe.png',
    popupLink: ['https://palvarezimaz.github.io/tic-tac-toe/'],
  },
];

function Projects() {
  const [getAllItems] = useState(allData);
  // const [dataVisibleCount, setDataVisibleCount] = useState(6);
  // const [dataIncrement] = useState(3);
  // const [activeFilter, setActiveFilter] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);
  // const [noMorePost, setNoMorePost] = useState(false);

  // useEffect(() => {
  //   setActiveFilter(filters[0].text.toLowerCase());
  //   setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  // }, [getAllItems]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setActiveFilter(e.target.textContent.toLowerCase());
  //   let tempData;
  //   if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
  //     tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
  //   } else {
  //     tempData = getAllItems.filter(
  //       (data) =>
  //         data.category === e.target.textContent.toLowerCase() &&
  //         data.id <= dataVisibleCount
  //     );
  //   }
  // setVisibleItems(tempData);
  // };

  // const handleLoadmore = (e) => {
  //   e.preventDefault();
  //   let tempCount = dataVisibleCount + dataIncrement;
  //   if (dataVisibleCount > getAllItems.length) {
  //     setNoMorePost(true);
  //   } else {
  //     setDataVisibleCount(tempCount);
  //     if (activeFilter === filters[0].text.toLowerCase()) {
  //       console.log('they are same');
  //       setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
  //     } else {
  //       setVisibleItems(
  //         getAllItems.filter(
  //           (data) => data.category === activeFilter && data.id <= tempCount
  //         )
  //       );
  //     }
  //   }
  // };

  return (
    <section id="Projects">
      <div className="container">
        <Pagetitle title="Recent Projects" />
        {/* 
        Start Portfolio Filters
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? 'text-capitalize current'
                      : 'text-capitalize'
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {getAllItems.map((item) => (
            <div className="col-md-6 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        {/* <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? 'disabled' : null}
          >
            {noMorePost ? (
              'No more items'
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
