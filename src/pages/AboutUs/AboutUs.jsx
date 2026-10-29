import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Feather, Compass, ArrowRight, Award } from 'lucide-react';
import craftsmanshipImg from '../../assets/images/craftsmanship_workshop_1790587029479.jpg';
import heroSlide1 from '../../assets/images/hero_unisex_jewelry_1790586987926.jpg';
import './AboutUs.css';

const values = [
  {
    Icon: Feather,
    title: 'Ergonomic Fit',
    text: 'Shaped around wrist tendons and finger flexion so your hand pieces move with you naturally rather than restricting movement.',
  },
  {
    Icon: Sparkles,
    title: '100% Recycled Metals',
    text: 'All silver and gold are sourced from certified recycled ethical refineries, preventing destructive mining footprints.',
  },
  {
    Icon: Compass,
    title: 'Genderless Architecture',
    text: 'Designed from foundational form rather than trend demographics. Every piece belongs to whoever feels compelled to wear it.',
  },
  {
    Icon: ShieldCheck,
    title: 'Heirloom Warranty',
    text: 'Every Classified piece is backed by our lifelong atelier guarantee for re-polishing, prong inspection, and structural repairs.',
  },
];

export const AboutUs = () => {
  return (
    <div className="about">
      {/* 1. Hero Banner */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img
            src={heroSlide1}
            alt="Classified hand jewelry atelier campaign"
            className="about-hero__img"
          />
          <div className="about-hero__shade" />
        </div>

        <div className="about-hero__content">
          <div className="about-hero__tag">
            <Award size={12} />
            <span>The Classified Manifest</span>
          </div>
          <h1 className="about-hero__title">Form Without Bounds</h1>
          <p className="about-hero__text">
            Bridging sculptural metalwork with the biomechanics of the hand. We create bespoke fine
            jewelry for those who define their own contours.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="page-container">
        <div className="about-split">
          <div className="about-split__text">
            <span className="section-eyebrow">Origins & Atelier Vision</span>
            <h2 className="section-title about__title">OUR STORY</h2>
            <div className="gold-rule about__rule" />
            <div className="about-split__copy">
              <p>
                Founded in 2022 by a collective of architectural sculptors and bench jewelers,{' '}
                <strong>Classified</strong> was born out of an aversion to standard department store
                display cases. Why were heavy signets strictly relegated to men, while refined cuffs
                and hand wraps were designated only for women?
              </p>
              <p>
                The human hand is among our most expressive communicative instruments. It touches,
                gestures, creates, and grasps. Classified sets out to adorn this canvas with weight,
                balance, and architectural permanence.
              </p>
              <p>
                Working between our design studio in Paris and our casting foundry in New York, we
                produce limited numbered batches that balance industrial precision with warm
                hand-finished nuances.
              </p>
            </div>
          </div>

          <div className="image-frame about-split__image about-split__image--tall">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
              alt="Classified interlocking bangles and cuffs"
              className="image-frame__img"
            />
            <div className="image-frame__shade" />
            <div className="image-frame__caption about__caption">
              Archival Interlocking Hand Cuffs · 925 Silver & 18K Solid Gold
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Banner */}
      <section className="about-philosophy">
        <div className="about-philosophy__inner">
          <span className="section-eyebrow about-philosophy__eyebrow">Core Philosophy</span>
          <blockquote className="about-philosophy__quote">
            "Jewelry is an expression of individuality, not a label."
          </blockquote>
          <div className="about-philosophy__rule" />
          <p className="about-philosophy__text">
            When you slip on a Classified ring or cuff, you are not wearing a demographic
            designation. You are wearing geometry, balance, precious alloy, and your own sovereign
            identity.
          </p>
        </div>
      </section>

      {/* 4. Quality & Craftsmanship */}
      <section className="page-container">
        <div className="about-split">
          <div className="image-frame about-split__image about-split__image--wide">
            <img
              src={craftsmanshipImg}
              alt="Artisan jeweler hands shaping a Classified hand cuff on a wooden jeweler bench"
              className="image-frame__img"
            />
            <div className="image-frame__shade" />
            <div className="image-frame__caption about__caption">
              Classified Master Goldsmith Workshop
            </div>
          </div>

          <div className="about-split__text about-split__text--first">
            <span className="section-eyebrow">Atelier Discipline</span>
            <h2 className="section-title about__title">QUALITY & CRAFTSMANSHIP</h2>
            <div className="gold-rule about__rule" />
            <div className="about-split__copy">
              <p>
                Each piece begins with lost-wax cast prototypes carved by hand before undergoing
                precision digital CAD refinement to guarantee comfortable, ergonomic weight
                distribution.
              </p>
              <p>
                We formulate our 925 sterling silver with a specialised micro-barrier of rhodium to
                inhibit oxidisation without obscuring the cool brilliance of pure silver. Our gold
                pieces use 3.5 microns of 18k solid gold vermeil over recycled silver cores, built
                for decades of constant friction and wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why We Are Different */}
      <section className="page-container">
        <div className="about-different__head">
          <span className="section-eyebrow">Our Distinction</span>
          <h2 className="section-title">WHY WE ARE DIFFERENT</h2>
          <div className="gold-rule gold-rule--center" />
          <p className="section-lead">
            Intentional decisions that guide every single piece leaving our atelier.
          </p>
        </div>

        <div className="about-values">
          {values.map(({ Icon, title, text }) => (
            <div key={title} className="about-value">
              <div className="icon-badge">
                <Icon size={20} />
              </div>
              <h3 className="about-value__title">{title}</h3>
              <p className="about-value__text">{text}</p>
            </div>
          ))}
        </div>

        <div className="about-different__cta">
          <Link to="/shop" className="btn-luxury">
            <span>EXPLORE THE CURRENT CATALOG</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};
