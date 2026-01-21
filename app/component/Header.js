'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const sectionMap = {
        '/': 'home',
        '/service': 'services',
        '/destinations': 'destinations',
        '/gallery': 'gallery',
        '/news': 'about',
        '/contact': 'contact'
      };
      setActiveSection(sectionMap[path] || 'home');

      // Add scroll effect
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Check initial scroll position

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home', section: 'home' },
    { href: '/service', label: 'Services', section: 'services' },
    { href: '/destinations', label: 'Destinations', section: 'destinations' },
    { href: '/gallery', label: 'Gallery', section: 'gallery' },
    { href: '/news', label: 'About Us', section: 'about' },
    { href: '/contact', label: 'Contact', section: 'contact' }
  ];

  return (
    <>
      <style jsx global>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(34, 197, 94, 0.15);
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-bottom: 1px solid rgba(34, 197, 94, 0.25);
          box-shadow: 0 2px 25px rgba(0, 0, 0, 0.15);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          padding: 8px 12px;
          border-radius: 12px;
        }

        .logo-link:hover {
          background: rgba(34, 197, 94, 0.05);
          transform: translateY(-1px);
        }

        .logo-image {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(34, 197, 94, 0.3);
          box-shadow: 0 2px 12px rgba(34, 197, 94, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-image:hover {
          border-color: #22c55e;
          box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
          transform: scale(1.05);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .company-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.3px;
          line-height: 1.2;
          margin: 0;
          transition: color 0.3s ease;
        }

        .logo-link:hover .company-name {
          color: #22c55e;
        }

        .company-tagline {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
          font-weight: 500;
          margin-top: 1px;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        /* Navigation */
        .nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 24px;
        }

        .nav-list a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 10px 16px;
          border-radius: 8px;
          letter-spacing: 0.3px;
          border: 1px solid transparent;
        }

        .nav-list a:hover,
        .nav-list a.active {
          color: #ffffff;
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
        }

        .nav-list a:focus {
          outline: 2px solid #22c55e;
          outline-offset: 2px;
        }

        /* Underline animation removed */

        /* Mobile hamburger */
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 32px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1100;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-toggle:hover {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          transform: scale(1.05);
        }

        .mobile-menu-toggle:focus {
          outline: 2px solid #22c55e;
          outline-offset: 2px;
        }

        .mobile-menu-toggle span {
          width: 100%;
          height: 2px;
          background: #ffffff;
          border-radius: 1px;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform-origin: center;
        }

        .mobile-menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-toggle.open span:nth-child(2) {
          opacity: 0;
          transform: translateX(20px);
        }

        .mobile-menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
          }

          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 320px;
            height: 100vh;
            background: rgba(0, 0, 0, 0.96);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
            padding: 100px 24px 40px;
            flex-direction: column;
            align-items: flex-start;
            box-shadow: -8px 0 32px rgba(0, 0, 0, 0.4);
            border-left: 1px solid rgba(34, 197, 94, 0.2);
          }

          .nav.open {
            right: 0;
          }

          .nav-list {
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }

          .nav-list a {
            font-size: 1.1rem;
            padding: 16px 20px;
            width: 100%;
            border-radius: 10px;
            text-align: left;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(34, 197, 94, 0.15);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            color: rgba(255, 255, 255, 0.9);
          }

          .nav-list a:hover,
          .nav-list a.active {
            background: rgba(34, 197, 94, 0.12);
            border-color: rgba(34, 197, 94, 0.4);
            transform: translateX(6px);
            box-shadow: 0 4px 16px rgba(34, 197, 94, 0.2);
            color: #ffffff;
          }

          .nav-list a::after {
            display: none;
          }

          .header-container {
            padding: 14px 24px;
          }
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 998;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 16px 20px;
          }

          .company-name {
            font-size: 1.5rem;
          }

          .company-tagline {
            font-size: 0.75rem;
          }

          .nav-list a {
            font-size: 1.1rem;
            padding: 14px 18px;
          }
        }
      `}</style>

      <>
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <header className={`header ${isMenuOpen ? 'menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <div className="logo">
              <Link href="/" className="logo-link">
                <img
                  src="/pics/logo.jpg.jpg"
                  alt="SSERUZ TOURS AND TRAVEL Logo"
                  className="logo-image"
                />
                <div className="logo-text">
                  <div className="company-name">SSERUZ TOURS</div>
                  <div className="company-tagline">...Every mile is a smile</div>
                </div>
              </Link>
            </div>

            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={activeSection === item.section ? 'active' : ''}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
        </header>
      </>
    </>
  );
};

export default Header;