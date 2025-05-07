"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='container-custom'>
        <motion.div
          className='max-w-3xl mx-auto text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className='section-title'>À Propos ECUME</h2>
          <p className='text-gray-600 mb-6'>
            ECUME (Exploration Culturelle et Médiation Éducative) est un
            laboratoire culturel digital dédié à la valorisation du patrimoine
            tunisien. Notre mission est de créer des ponts entre le passé et le
            présent, en utilisant les technologies numériques pour rendre
            l'histoire accessible et engageante pour tous.
          </p>
          <a href="/apropos"> <button className='btn-secondary'>En savoir plus</button></a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
