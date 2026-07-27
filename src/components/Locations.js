"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowIcon } from "./icons";

function CardSlideshow({ images, name }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds transition
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [images]);

  const handleThumbClick = (e, idx) => {
    e.preventDefault();
    e.stopPropagation(); // Stop navigation to project page
    setIndex(idx);
    startTimer(); // Reset timer
  };

  return (
    <div className="loc-card__media">
      {images.map((img, idx) => (
        <div
          key={img}
          className={`loc-card__slide ${idx === index ? "loc-card__slide--active" : ""}`}
        >
          <Image
            src={img}
            alt={`Property ${name} - view ${idx + 1}`}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            priority={idx === 0}
          />
        </div>
      ))}
      
      {/* Thumbnails at the base of the slideshow */}
      <div className="loc-card__thumbs">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={(e) => handleThumbClick(e, idx)}
            className={`loc-card__thumb-btn ${idx === index ? "loc-card__thumb-btn--active" : ""}`}
            aria-label={`Go to image ${idx + 1}`}
            id={`thumb-btn-${name.toLowerCase().replace(/\s+/g, "-")}-${idx}`}
          >
            <div className="loc-card__thumb-img">
              <Image src={img} alt="" fill sizes="40px" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Locations() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto sliding progress bar & slide triggers
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 40; // 40ms updates for smooth progress bar transition
    const duration = 4000; // 4 seconds total
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((curr) => (curr + 1) % projects.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle programmatically scrolling container when activeIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const track = container.querySelector(".locations__slider-track");
      if (track) {
        const cards = track.querySelectorAll(".loc-card");
        const targetCard = cards[activeIndex];
        if (targetCard) {
          const containerWidth = container.clientWidth;
          const cardWidth = targetCard.clientWidth;
          
          // Align cards. For desktop we can offset to center, on mobile we align to start/nearest
          let targetScrollLeft = targetCard.offsetLeft - container.offsetLeft;
          if (containerWidth > 720) {
            targetScrollLeft = targetCard.offsetLeft - container.offsetLeft - (containerWidth - cardWidth) / 2;
          }

          container.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((curr) => (curr - 1 + projects.length) % projects.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((curr) => (curr + 1) % projects.length);
    setProgress(0);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section className="locations wrap" id="locations">
      <div className="section-head">
        <span className="index">04</span>
        <p className="micro">Where we work</p>
      </div>
      
      <div className="locations__header-row">
        <h2 className="display locations__title">
          On the ground in <em>Lagos</em>.
        </h2>
        <div className="locations__slider-controls">
          <button
            onClick={togglePause}
            className={`slider-control-btn slider-control-btn--pause ${isPaused ? "slider-control-btn--paused" : ""}`}
            aria-label={isPaused ? "Play sliding" : "Pause sliding"}
            id="prop-pause-btn"
          >
            {isPaused ? "▶" : "‖"}
          </button>
          <button
            onClick={handlePrev}
            className="slider-control-btn"
            aria-label="Previous property"
            id="prop-prev-btn"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="slider-control-btn"
            aria-label="Next property"
            id="prop-next-btn"
          >
            →
          </button>
        </div>
      </div>

      {/* Progress loading bar */}
      <div className="locations__progress-container">
        <div 
          className="locations__progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="locations__slider-container" ref={sliderRef}>
        <div className="locations__slider-track">
          {projects.map((proj, idx) => (
            <Link 
              href={`/projects/${proj.slug}`} 
              className={`loc-card ${idx === activeIndex ? "loc-card--active" : ""}`} 
              key={proj.slug}
            >
              <CardSlideshow images={proj.images} name={proj.name} />
              <div className="loc-card__body">
                <span className="loc-card__type micro">{proj.type}</span>
                <h3 className="loc-card__name display">{proj.name}</h3>
                <p className="loc-card__region micro micro--dim">{proj.location}</p>
                <p className="loc-card__intro">{proj.intro}</p>
                <span className="loc-card__link">
                  View property details <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
