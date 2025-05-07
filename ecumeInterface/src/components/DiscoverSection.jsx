"use client";

import { motion } from "framer-motion";
import { Compass, Users, BookOpen } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Expériences immersives",
    icon: <Compass className='h-12 w-12 text-yellow-500' />,
    description:
      "Plongez dans l'histoire avec nos visites en réalité augmentée",
  },
  {
    id: 2,
    title: "Ateliers interactifs",
    icon: <Users className='h-12 w-12 text-yellow-500' />,
    description: "Participez à des ateliers animés par des experts locaux",
  },
  {
    id: 3,
    title: "Parcours Intelligent",
    icon: <BookOpen className='h-12 w-12 text-yellow-500' />,
    description: "Accédez à notre bibliothèque de contenus éducatifs",
  },
];

const DiscoverSection = () => {
  return (
    <section className='section-padding'>
      <div className='container-custom'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          Découvrir
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-10 mt-10'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className='flex flex-col items-center text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <div className='mb-4'>{service.icon}</div>
              <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
