"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Carthage",
    location: "Tunis",
    image: "/public/images/carthage.jpg",
  },
  {
    id: 2,
    name: "Dougga",
    location: "Béja",
    image: "/public/images/dogga.jpg",
  },
  {
    id: 3,
    name: "El Jem",
    location: "Mahdia",
    image: "/public/images/eljam.jpeg",
  },
  {
    id: 4,
    name: "Bulla Regia",
    location: "Jendouba",
    image: "/public/images/Bulla Regia.jpg",
  },
  {
    id: 5,
    name: "Kairouan",
    location: "Kairouan",
    image: "/public/images/kairoun.jpg",
  },
  {
    id: 6,
    name: "Sidi Bou Said",
    location: "Tunis",
    image: "/public/images/sidibou.jpeg",
  },
];

const ExploreSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollBy({ left: -300, behavior: "smooth" });
      } else {
        current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  return (
    <section id='explore' className='section-padding bg-gray-50'>
      <div className='container-custom'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className='section-title'>EXPLORER</h2>
          <h3 className='section-subtitle'>
            Lieux historiques culturels de Tunisie
          </h3>
        </motion.div>

        <div className='relative'>
          {/* Scroll Controls */}
          <button
            onClick={() => scroll("left")}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition'>
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition'>
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className='flex overflow-x-auto hide-scrollbar gap-6 py-4 px-2'
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                className='flex-shrink-0 w-72 rounded-lg overflow-hidden shadow-md bg-white'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}>
                <div className='h-48 overflow-hidden'>
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className='w-full h-full object-cover transition duration-500 hover:scale-110'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold'>{destination.name}</h3>
                  <p className='text-gray-600'>{destination.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
