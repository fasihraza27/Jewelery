import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Globe, Twitter, ArrowUpRight, X, Sparkles } from 'lucide-react';
import './Footer.css';

const modalContent = {
  Shipping: {
    title: 'Global White-Glove Shipping',
    body: 'All Classified jewelry pieces are dispatched via armored courier with secure tamper-evident seals and signature delivery. Complimentary worldwide express shipping applies to all orders over $100. Standard dispatch takes place within 24-48 business hours.',
  },
  Returns: {
    title: 'Complimentary Returns & Exchanges',
    body: 'We extend a 30-day complimentary return window for unworn items in their original security-sealed presentation boxes. Custom-engraved and bespoke sizing orders are handled on an individual concierge basis.',
  },
  FAQs: {
    title: 'Atelier Frequently Asked Questions',
    body: 'How do I determine my cuff size? All Classified cuffs include an ergonomic sizing chart on the product page. Most pieces feature subtle memory tension allowing micro-adjustments for personal comfort. Are pieces waterproof? Solid silver and titanium pieces are fully water-safe; vermeil and natural baroque pearls should be rinsed and patted dry.',
  },
  'Privacy Policy': {
    title: 'Client Confidentiality Manifest',
    body: 'In true alignment with our name, Classified upholds the strictest standards of client confidentiality. We do not sell, disclose, or monetize personal client records or purchasing histories under any condition.',
  },
};

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram },
  { href: 'https://pinterest.com', label: 'Pinterest', Icon: Globe },
  { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
];

export const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <footer className="site-footer">
      <div className="page-container site-footer__body">
        <div className="row g-5">
          {/* Brand Column */}
          <div className="col-12 col-md-4">
            <Link to="/" className="footer-brand">
              <span className="footer-brand__name">CLASSIFIED</span>
              <span className="footer-brand__tagline">Fine Hand Atelier</span>
            </Link>
            <p className="footer-about">
              Modern hand jewelry engineered beyond traditional gender distinctions. Hand-forged in
              small artisan batches from certified recycled precious metals and aerospace titanium.
            </p>
            <div className="footer-social">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social__link"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-list__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer-list__link">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-list__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-list__link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections Shortcut */}
          <div className="col-6 col-md-3">
            <h4 className="footer-heading">Curations</h4>
            <ul className="footer-list">
              <li>
                <Link to="/shop?category=women" className="footer-list__link">
                  Women's Atelier
                </Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="footer-list__link">
                  Men's Architecture
                </Link>
              </li>
              <li>
                <Link to="/shop?category=unisex" className="footer-list__link">
                  Unisex Sculptural
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer-list__link footer-list__link--icon">
                  View Full Catalog <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-12 col-md-3">
            <h4 className="footer-heading">Client Care</h4>
            <ul className="footer-list">
              {Object.keys(modalContent).map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setActiveModal(item)}
                    className="footer-list__button"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 CLASSIFIED. All Rights Reserved.</p>
          <div className="footer-bottom__meta">
            <span>Atelier Paris & New York</span>
            <span>·</span>
            <span>Ethically Cast Precious Metals</span>
          </div>
        </div>
      </div>

      {/* Info modal for Client Care items */}
      {activeModal && (
        <div className="advisory-overlay animate-fade-in">
          <dialog open className="advisory-modal">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="advisory-modal__close"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
            <div className="section-eyebrow advisory-modal__eyebrow">
              <Sparkles size={12} />
              <span>Atelier Advisory</span>
            </div>
            <h3 className="advisory-modal__title">
              {modalContent[activeModal]?.title || activeModal}
            </h3>
            <div className="gold-rule advisory-modal__rule" />
            <p className="advisory-modal__body">{modalContent[activeModal]?.body}</p>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="btn-luxury btn-luxury--block"
            >
              CLOSE ADVISORY
            </button>
          </dialog>
        </div>
      )}
    </footer>
  );
};
