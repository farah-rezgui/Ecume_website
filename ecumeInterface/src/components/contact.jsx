"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Actualite = () => {
  const actualites = [
    {
      id: 1,
      title: "Nouvelle Collection Printemps",
      description: "Découvrez notre nouvelle collection inspirée par les couleurs vibrantes du printemps.",
      image: "/images/printemps.jpg",
      date: "15 Avril 2024"
    },
    {
      id: 2,
      title: "Événement Exclusive",
      description: "Rejoignez-nous pour une soirée de lancement avec des invités spéciaux et des surprises.",
      image: "/images/evenement.jpg",
      date: "22 Mai 2024"
    },
    {
      id: 3,
      title: "Promotion Spéciale",
      description: "Profitez de -30% sur toute la boutique pendant une semaine seulement.",
      image: "/images/promotion.jpg",
      date: "1 Juin 2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Nos Actualités
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Découvrez les dernières nouvelles et événements
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {actualites.map((actualite) => (
          <motion.div
            key={actualite.id}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <div className="flex-shrink-0 h-48 relative">
              <Image
                src={actualite.image}
                alt={actualite.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  {actualite.date}
                </p>
                <motion.h3 
                  className="mt-2 text-xl font-semibold text-gray-900"
                  whileHover={{ color: "#4f46e5" }}
                >
                  {actualite.title}
                </motion.h3>
                <p className="mt-3 text-base text-gray-500">
                  {actualite.description}
                </p>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  En savoir plus
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Actualite;