"use client";

import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className='py-16 bg-gray-200 text-white'>
      <div className='container-custom text-center'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          Expériences Immersive AR.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <button className='bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg'>
            Explorer
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
