"use client";

import { motion } from "framer-motion";

const NewsSection = () => {
  return (
    <section className='section-padding'>
      <div className='container-custom'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          En Toute Actualité
        </motion.h2>

        <motion.div
          className='bg-white rounded-lg shadow-md overflow-hidden mt-10 max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <div className='md:flex'>
            <div className='md:w-2/3 p-6 md:p-8'>
              <div className='inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold mb-4'>
                NOUVEAUTÉ
              </div>
              <h3 className='text-2xl font-bold mb-4'>
                Lancement d'experience immersive
              </h3>
              <p className='text-gray-600 mb-4'>
                Nous sommes ravis d'annoncer le lancement de notre application
                mobile qui vous permettra d'explorer le patrimoine culturel
                tunisien où que vous soyez. Téléchargez-la dès maintenant !
              </p>
              <a
                href='/actualite'
                className='text-yellow-500 font-medium hover:text-yellow-600 transition'>
                Lire la suite →
              </a>
            </div>
            <div className='md:w-1/3'>
              <div className='h-full'>
                <img
                  src='/public/images/ECUME-DIGITAL-CULTURAL-LAB.png'
                  alt='News'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
