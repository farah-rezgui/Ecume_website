"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    id: 1,
    title: "Visite virtuelle du site archéologique de Carthage",
    description:
      "Explorez les ruines de l'ancienne cité punique à travers une expérience immersive en réalité augmentée.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Atelier de mosaïque traditionnelle",
    description:
      "Apprenez les techniques ancestrales de création de mosaïques romaines avec des artisans locaux.",
    image: "/placeholder.svg?height=300&width=500",
  },
];

const Highlights = () => {
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

        <div className='grid md:grid-cols-2 gap-8 mt-10'>
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300'
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <div className='h-56 overflow-hidden'>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className='w-full h-full object-cover transition duration-500 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
                <p className='text-gray-600'>{item.description}</p>
                <button className='mt-4 text-yellow-500 font-medium flex items-center hover:text-yellow-600 transition'>
                  En savoir plus
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 ml-1'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
