import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import './Navbar.css';

const desktopLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

const mobileLinks = [
  { to: '/', label: 'Home', number: '01' },
  { to: '/shop', label: 'Shop Collection', number: '02' },
  { to: '/about', label: 'About Us', number: '03' },
  { to: '/contact', label: 'Contact Us', number: '04' },
];

const getInitialTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const linkClass = (base) => ({ isActive }) => (isActive ? `${base} ${base}--active` : base);

export const Navbar = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      {/* 1. Announcement bar */}
      <div className="announcement-bar">
        <Sparkles size={11} className="announcement-bar__icon" />
        <span>Atelier Paris & New York · Complimentary White-Glove Insured Delivery</span>
        <span className="announcement-bar__extra announcement-bar__dot">·</span>
        <span className="announcement-bar__extra">30-Day Bespoke Returns</span>
      </div>

      {/* 2. Main sticky navbar */}
      <header className="site-header">
        <div className="page-container">
          <div className="site-header__row">
            {/* Mobile menu toggle */}
            <div className="site-header__mobile-toggle">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="site-header__menu-btn"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Brand */}
            <div className="site-header__brand-wrap">
              <Link to="/" onClick={closeMenu} className="brand">
                <span className="brand__name">CLASSIFIED</span>
                <span className="brand__tagline">Fine Hand Atelier</span>
              </Link>
            </div>

            {/* Desktop links */}
            <nav className="site-header__nav" aria-label="Main navigation">
              {desktopLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass('nav-link-lux')}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Theme switcher */}
            <div className="site-header__actions">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle"
                title={`Switch to ${theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={14} className="theme-toggle__icon" />
                    <span className="theme-toggle__label">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun size={14} className="theme-toggle__icon" />
                    <span className="theme-toggle__label">Light</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="mobile-menu animate-fade-in">
              <nav className="mobile-menu__nav" aria-label="Mobile navigation">
                {mobileLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={linkClass('mobile-menu__link')}
                  >
                    <span>{item.label}</span>
                    <span className="mobile-menu__number">{item.number}</span>
                  </NavLink>
                ))}
              </nav>

              <div className="mobile-menu__concierge">
                <p>Concierge Hotline · +1 (212) 890-4102</p>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
