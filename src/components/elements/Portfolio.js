import React from 'react';

function Portfolio({ portfolio }) {
  const { category, title, image, description, techstack } = portfolio;

  return (
    <div className="portfolio-item rounded shadow-dark">
      <div className="details">
        <span className="term text-capitalize">{category}</span>
        <h4 className="title">{title}</h4>
        <p className="description">
          {description}
          <br />
          <b>Tech stack: </b>
          {techstack}
        </p>
      </div>
      <div className="thumb">
        <img src={image} alt="Portfolio-title" />
        <div className="mask"></div>
      </div>
    </div>
  );
}

export default Portfolio;
