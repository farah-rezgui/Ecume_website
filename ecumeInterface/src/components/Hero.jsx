"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src='/public/images/photo-culture.jpg'
          alt='Archaeological site'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      </div>

      {/* Content */}
      <div className='container-custom relative z-10 text-white text-center'>
        <motion.h1
          className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Revivez l'<span className='text-yellow-400'>Histoire</span>, créez l'
          <span className='text-yellow-400'>Avenir</span> avec Ecume
        </motion.h1>

        <motion.p
          className='text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          Explorez le patrimoine culturel tunisien à travers des expériences
          immersives et éducatives
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          <button className='btn-primary'>Découvrir</button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}>
        <a href='#explore' className='text-white flex flex-col items-center'>
          <span className='text-sm mb-2'>Découvrir plus</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
