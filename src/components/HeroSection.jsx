import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides
  const slides = [
    {
      image:  '/images/banner/background2.jpg',
      message: 'LET US PROTECT YOUR HEALTH',
    },
    {
      image:  '/images/banner/background1.jpg',
      message: 'LET US PROTECT YOUR HEALTH',
    },
    {
      image:  '/images/banner/background.jpg',
      message: 'LET US PROTECT YOUR HEALTH',
    },
  ];

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 "></div>

          {/* Hero Message */}
          <div className="relative h-full flex items-center justify-center text-center text-white">
            <div className="p-4 py-8 flex flex-col justify-center  bg-black bg-opacity-50">
              <h1 className="text-2 md:text-6xl font-bold ">{slide.message}</h1>
              <p className='align-left'>
                <br />
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                <br/>
                Donec eu libero sit amet quam egestas semper.
              </p>
              <a href="#" className='text-center m-auto border-solid border-2 border-blue-500 px-6 py-4 text-3 mt-5 w-fit hover:bg-blue-500'>OUR SERVICES</a>
            </div>
          </div>
        </div>
      ))}

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
