import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../Header';

const Layout = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>

      {/* Floating Book Safari Button */}
      <Link href="/contact">
        <button
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '30px',
            padding: '16px 24px',
            fontSize: '1rem',
            fontWeight: '700',
            borderRadius: '50px',
            border: 'none',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(34,197,94,0.4)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1000,
            animation: 'pulse 4s infinite',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'scale(1.05) translateY(-2px)';
            e.target.style.boxShadow = '0 12px 35px rgba(34,197,94,0.6)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(34,197,94,0.4)';
          }}
          aria-label="Book Your Safari Now"
        >
          🦁 Book Your Safari Now
        </button>
      </Link>

      {/* Floating Action Button - Back to Top */}
      <button
        className={`fab ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Layout;
