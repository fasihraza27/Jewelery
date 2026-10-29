import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RingScene, setRingProgress } from '../RingScene/RingScene.jsx';
import './HorizontalShowcase.css';

const panels = [
  {
    eyebrow: 'Chapter I · The Form',
    title: 'SCULPTED IN LIGHT',
    text: 'Every facet is calculated to catch the room and return it as fire. Keep scrolling — the atelier unfolds sideways.',
    side: 'left',
  },
  {
    eyebrow: 'Chapter II · The Metal',
    title: 'RECYCLED 18K GOLD',
    text: 'Poured, forged and hand-polished from reclaimed precious metals, certified from mine to bench.',
    side: 'right',
  },
  {
    eyebrow: 'Chapter III · The Stone',
    title: 'CONFLICT-FREE BRILLIANCE',
    text: 'Traceable stones, cut to maximise dispersion and set in four hand-filed prongs.',
    side: 'left',
  },
  {
    eyebrow: 'Chapter IV · The Wearer',
    title: 'MADE FOR EVERY HAND',
    text: 'No labels. No categories. Just pieces shaped to balance weight and form on any skin.',
    side: 'right',
    cta: true,
  },
];

/**
 * Pinned "horizontal scroll" section: while the user scrolls DOWN the page,
 * the panels travel SIDEWAYS. When the last panel is reached the page
 * continues scrolling vertically as normal.
 */
export const HorizontalShowcase = () => {
  const [section, setSection] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!section) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setRingProgress(p);
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [section]);

  return (
    <section
      ref={setSection}
      className="hshow"
      style={{ height: `${panels.length * 100}vh` }}
      aria-label="Atelier showcase"
    >
      <div className="hshow__sticky">
        <div className="hshow__glow" />
        <RingScene className="hshow__canvas" />

        <div
          className="hshow__track"
          style={{
            width: `${panels.length * 100}vw`,
            transform: `translate3d(${-progress * (panels.length - 1) * 100}vw,0,0)`,
          }}
        >
          {panels.map((p, i) => (
            <div key={p.title} className={`hshow__panel hshow__panel--${p.side}`}>
              <div className="hshow__copy">
                <span className="section-eyebrow">{p.eyebrow}</span>
                <h2 className="hshow__title">{p.title}</h2>
                <div className="gold-rule" />
                <p className="hshow__text">{p.text}</p>
                {p.cta && (
                  <Link to="/shop" className="btn-luxury">
                    <span>Explore The Collection</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
              <span className="hshow__index">0{i + 1}</span>
            </div>
          ))}
        </div>

        <div className="hshow__progress" aria-hidden="true">
          <span className="hshow__progress-bar" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
};
