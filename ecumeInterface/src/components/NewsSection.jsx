"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const NewsSection = () => {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    // Fetch the latest actualités for the home page
    fetch("http://localhost:5000/actualite/getActualiteHome")
      .then((response) => response.json())
      .then((data) => {
        setActualites(data);
      })
      .catch((error) => console.error("Error fetching actualités:", error));
  }, []);

  if (actualites.length === 0) {
    return <p>Loading actualités...</p>;
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          En Toute Actualité
        </motion.h2>

        {actualites.map((actualite, index) => (
          <motion.div
            key={index}
            className="mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:flex">
              <div className="p-6 md:w-2/3 md:p-8">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                  NOUVEAUTÉ
                </div>
                <h3 className="mb-4 text-2xl font-bold">{actualite.titre}</h3>
                <p className="mb-4 text-gray-600">
                  {actualite.descriptionHome}...
                </p>
                <a
                  href={`/actualite/${actualite._id}`}
                  className="font-medium text-yellow-500 transition hover:text-yellow-600"
                >
                  Lire la suite →
                </a>
              </div>
              <div className="md:w-1/3">
                <div className="h-full">
                  <img
                    src={`/public/images/${actualite.image}`}
                    alt={actualite.titre}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;