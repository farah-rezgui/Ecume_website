import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ActualiteDetails() {
    const { id } = useParams(); // Get the id from the URL
    const [actualite, setActualite] = useState(null);

    useEffect(() => {
        // Fetch the actualité details by ID
        fetch(`http://localhost:5000/actualite/getActualiteById/${id}`)
            .then((response) => response.json())
            .then((data) => setActualite(data))
            .catch((error) => console.error('Error fetching actualité details:', error));
    }, [id]);

    if (!actualite) {
        return <p>Loading actualité details...</p>;
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
                    <h1>{actualite.titre}</h1>
                </div>
            </header>

            <div
                id={`post-${actualite._id}`}
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
                    <small className="date">{new Date(actualite.date).toLocaleDateString()}</small>
                    <hr />
                    {Object.entries(actualite.description).map(([title, content], index) => (
                        <div key={index} className="mt-5">
                            <strong style={{ fontSize: '20px' }}>{title}</strong>
                            <p>{content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}