"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Lightbulb } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Impact social",
    icon: <Heart className='h-10 w-10 text-yellow-500' />,
    points: [
      "Préservation du patrimoine culturel",
      "Soutien aux communautés locales",
      "Promotion du tourisme durable",
    ],
  },
  {
    id: 2,
    title: "Education immersive",
    icon: <BookOpen className='h-10 w-10 text-yellow-500' />,
    points: [
      "Apprentissage interactif",
      "Contenu historique vérifié",
      "Adapté à tous les âges",
    ],
  },
  {
    id: 3,
    title: "Narratives innovantes",
    icon: <Lightbulb className='h-10 w-10 text-yellow-500' />,
    points: [
      "Storytelling captivant",
      "Technologies de pointe",
      "Expériences personnalisées",
    ],
  },
];

const WhyEcume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className='section-padding bg-gray-50'>
      <div className='container-custom'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          POURQUOI CHOISIR ECUME ?
        </motion.h2>

        <motion.div
          className='grid md:grid-cols-3 gap-8 mt-10'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}>
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'
              variants={itemVariants}>
              <div className='flex justify-center mb-4'>{reason.icon}</div>
              <h3 className='text-xl font-bold text-center mb-4'>
                {reason.title}
              </h3>
              <ul className='space-y-2'>
                {reason.points.map((point, index) => (
                  <li key={index} className='flex items-start'>
                    <svg
                      className='h-5 w-5 text-yellow-500 mr-2 mt-0.5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEcume;
