"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const destinations = [
  "Carthage - Site archéologique",
  "Dougga - Cité romaine",
  "El Jem - Amphithéâtre romain",
  "Kairouan - Grande Mosquée",
  "Sidi Bou Said - Village méditerranéen",
  "Bulla Regia - Maisons souterraines",
];

const RecommendedDestinations = () => {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='container-custom'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          Destinations à recommander
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-10 mt-10'>
          <motion.div
            className='space-y-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                className='flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer'
                whileHover={{ x: 5 }}>
                <span className='font-medium'>{destination}</span>
                <ArrowRight className='h-5 w-5 text-yellow-500' />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className='rounded-lg overflow-hidden shadow-lg h-80 md:h-auto'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <img
              src='/placeholder.svg?height=600&width=800'
              alt='Featured destination'
              className='w-full h-full object-cover'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedDestinations;
