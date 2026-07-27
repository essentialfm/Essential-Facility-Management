"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function ProjectGallery({ images, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds on the details page
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [images]);

  const selectImage = (index) => {
    setCurrentIndex(index);
    startTimer(); // reset timer on user interaction
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    startTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startTimer();
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="project-gallery">
      <div className="project-gallery__main">
        <button 
          onClick={handlePrev} 
          className="project-gallery__arrow project-gallery__arrow--prev"
          aria-label="Previous image"
          id="gallery-prev-btn"
        >
          ‹
        </button>
        <div className="project-gallery__main-img">
          <Image
            src={images[currentIndex]}
            alt={`${name} - View ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0}
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
        <button 
          onClick={handleNext} 
          className="project-gallery__arrow project-gallery__arrow--next"
          aria-label="Next image"
          id="gallery-next-btn"
        >
          ›
        </button>
      </div>

      <div className="project-gallery__thumbnails">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => selectImage(index)}
            className={`project-gallery__thumb ${index === currentIndex ? "project-gallery__thumb--active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            id={`gallery-thumb-${index}`}
          >
            <div className="project-gallery__thumb-wrapper">
              <Image 
                src={img} 
                alt={`${name} thumb ${index + 1}`} 
                fill 
                sizes="80px"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
