import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import heroSlide1 from '../../assets/images/hero_unisex_jewelry_1790586987926.jpg';
import heroSlide2 from '../../assets/images/hero_women_jewelry_1790587003748.jpg';
import heroSlide3 from '../../assets/images/hero_men_jewelry_1790587016728.jpg';
import './HeroSlider.css';

const slides = [
  {
    id: 0,
    image: heroSlide1,
    heading: 'JEWELRY WITHOUT LIMITS',
    subtitle: 'Designed for every style, every identity.',
    buttonText: 'SHOP COLLECTION',
    link: '/shop',
    tag: 'UNISEX ATELIER',
  },
  {
    id: 1,
    image: heroSlide2,
    heading: 'ELEGANCE IN EVERY DETAIL',
    subtitle: "Discover our women's collection.",
    buttonText: 'SHOP WOMEN',
    link: '/shop?category=women',
    tag: "WOMEN'S COLLECTION",
  },
  {
    id: 2,
    image: heroSlide3,
    heading: 'BOLD. SIMPLE. TIMELESS.',
    subtitle: "Explore our men's collection.",
    buttonText: 'SHOP MEN',
    link: '/shop?category=men',
    tag: "MEN'S COLLECTION",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 6 seconds (paused while hovering)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider" aria-label="Jewelry Collection Highlights">
      {/* Hovering anywhere on the slider pauses the auto-play */}
      <div
        className="hero-slider__hover-area"
        role="presentation"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="hero-slider__track">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={
                index === currentSlide ? 'hero-slide hero-slide--active' : 'hero-slide'
              }
            >
              <div className="hero-slide__bg">
                <img src={slide.image} alt={slide.heading} className="hero-slide__img" />
                <div className="hero-slide__shade" />
              </div>

              <div className="page-container hero-slide__content">
                <div className="hero-slide__text">
                  <div className="hero-slide__tag">
                    <Sparkles size={12} className="hero-slide__spark" />
                    <span>{slide.tag}</span>
                  </div>

                  <h1 className="hero-slide__heading">{slide.heading}</h1>

                  <p className="hero-slide__subtitle">{slide.subtitle}</p>

                  <div className="hero-slide__action">
                    <Link to={slide.link} className="hero-slide__btn">
                      <span>{slide.buttonText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hero-slider__arrow hero-slider__arrow--prev"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="hero-slider__arrow hero-slider__arrow--next"
        >
          <ChevronRight size={22} />
        </button>

        {/* Indicators */}
        <div className="hero-slider__dots">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={
                idx === currentSlide ? 'hero-slider__dot hero-slider__dot--active' : 'hero-slider__dot'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
