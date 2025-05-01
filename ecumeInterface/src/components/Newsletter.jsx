"use client";

import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className='section-padding'>
      <div className='container-custom'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='md:flex items-center'>
            <motion.div
              className='md:w-1/2 p-8 md:p-12'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                Restez informé
              </h2>
              <p className='text-gray-600 mb-6'>
                Inscrivez-vous à notre newsletter pour recevoir les dernières
                actualités, événements et offres spéciales.
              </p>
              <div className='flex flex-col sm:flex-row gap-3'>
                <input
                  type='email'
                  placeholder='Votre adresse email'
                  className='flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                />
                <button className='btn-primary whitespace-nowrap'>
                  S'inscrire
                </button>
              </div>
              <p className='text-xs text-gray-500 mt-3'>
                En vous inscrivant, vous acceptez notre politique de
                confidentialité.
              </p>
            </motion.div>

            <motion.div
              className='md:w-1/2 bg-gray-50 p-8 md:p-12 flex justify-center'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <img
                src='/placeholder.svg?height=300&width=300'
                alt='Newsletter illustration'
                className='max-w-full h-auto'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
