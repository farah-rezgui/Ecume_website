import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetch("http://localhost:5000/prod/getAllProduit")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.produitList);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <section className='section-padding'>
      <div className='container-custom'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          À NE PAS RATER
        </motion.h2>

        <div className='grid gap-8 mt-10 md:grid-cols-2'>
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              className='overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg'
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <div className='h-56 overflow-hidden'>
                <img
                  src={`/public/images/${item.image}`}
                  alt={item.titre}
                  className='object-cover w-full h-full transition duration-500 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='mb-3 text-xl font-bold'>{item.titre}</h3>
                <p className='text-gray-600'>{item.descriptionHome}</p>
                <a href={`/produits/${item._id}`}>
                  <button className='flex items-center mt-4 font-medium text-yellow-500 transition hover:text-yellow-600'>
                    En savoir plus
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 ml-1'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;