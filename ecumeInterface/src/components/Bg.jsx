import React, { useState, useEffect } from "react";
import img1 from "/images/BG1.jpg";
import img2 from "/images/BG2.jpg";
import img3 from "/images/BG3.jpg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import blob from "/src/assets/blob.svg";

const Bg = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slides = [
    {
      image: img1,
      title: "°Embarquer pour un voyage mémorable°",
    },
    {
      image: img2,
      title: "°Découvrez l'immersion comme jamais auparavant°",
    },
    {
      image: img3,
      title: "°Créons des moments inoubliables ensemble°",
    },
    {
      image: img1,
      title: " °Revivez l'histoire, créez l'avenir avec ECUME °",
    },
  ];

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imagesLoaded]);

  if (!imagesLoaded) return null;

  return (
    <div className='relative h-screen w-full overflow-hidden bg-background'>
      <img  src="/src/assets/blob.svg" className='absolute -z-10 top-[21%] w-72 left-[7%] aspect-square' alt="blob" />
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}>
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className='h-full w-full object-cover'
          />
          {index === currentSlide && (
            <div className='absolute top-1/2 left-[10%] -translate-y-1/2 z-10'>
              <h1 className='text-7xl mb-4  p-8 max-w-4xl text-black font-medium [text-shadow:white_2px_5px]'>
                {slide.title}
              </h1>
            </div>
          )}
        </div>
      ))}
      <div className='absolute bottom-4 right-4 flex gap-2 z-20'>
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className='p-4 rounded-full bg-yellow hover:bg-black text-black hover:text-yellow transition-colors duration-300 border-0'
          aria-label='Previous slide'>
          <IoIosArrowUp className=' text-3xl' />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className='p-4 rounded-full bg-yellow hover:bg-black text-black hover:text-yellow transition-colors duration-300 border-0'
          aria-label='Next slide'>
          <IoIosArrowDown className=' text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default Bg;