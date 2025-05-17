import React, { useEffect, useState } from 'react';
import './Actualite.css';

export default function Actualite() {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/actualite/getAllActualites')
      .then((response) => response.json())
      .then((data) => setActualites(data))
      .catch((error) => console.error('Error fetching actualites:', error));
  }, []);
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  return (
    <section className="mx-20 mt-40">
      <header className="page-header" style={{ background: 'url() center #fffbf7' }}>
        <div className="inner">
          <svg width="580" height="400" className="svg-morph">
            <path
              id="svg_morph"
              d="m261,30.4375c0,0 114,6 151,75c37,69 37,174 6,206.5625c-31,32.5625 -138,11.4375 -196,-19.5625c-58,-31 -86,-62 -90,-134.4375c12,-136.5625 92,-126.5625 129,-127.5625z"
            ></path>
          </svg>
          <h1>Actualités</h1>
        </div>
      </header>

      {actualites.length > 0 ? (
        actualites.map((actualite, index) => (
          <div
            key={index}
            id={`post-${index}`}
            className="blog-post post type-post status-publish format-standard has-post-thumbnail hentry"
          >
            <figure
              className="post-image is-inview"
              data-scroll=""
              data-scroll-speed="0"
              style={{
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
              }}
            >
              <img src={`/public/images/${actualite.image}`} alt={actualite.titre} />
            </figure>
            <div className="post-content">
              <small className="date">{formatDate(actualite.date)}</small>
              <h3 className="post-title">
                <a href={`/actualite/${actualite._id}`}>{actualite.titre}</a>
              </h3>
              <div className="flex items-center gap-4 post-author">
                <span>
                  by &nbsp;
                  <strong>{actualite.auteur}</strong>
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading actualités...</p>
      )}
    </section>
  );
}