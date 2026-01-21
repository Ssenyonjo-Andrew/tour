import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../Header';

const Layout = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMouseEnter = (e) => {
    if (!isMobile) {
      setIsButtonExpanded(true);
      e.currentTarget.style.width = '280px';
      e.currentTarget.style.height = '70px';
      e.currentTarget.style.borderRadius = '50px';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 12px 35px rgba(34,197,94,0.6)';
      const textSpan = e.currentTarget.querySelector('.safari-text');
      if (textSpan) {
        textSpan.style.opacity = '1';
        textSpan.style.width = 'auto';
        textSpan.style.marginLeft = '8px';
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (!isMobile) {
      setIsButtonExpanded(false);
      e.currentTarget.style.width = '70px';
      e.currentTarget.style.height = '70px';
      e.currentTarget.style.borderRadius = '50%';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(34,197,94,0.4)';
      const textSpan = e.currentTarget.querySelector('.safari-text');
      if (textSpan) {
        textSpan.style.opacity = '0';
        textSpan.style.width = '0';
        textSpan.style.marginLeft = '0';
      }
    }
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
            bottom: isMobile ? '80px' : '100px',
            right: isMobile ? '15px' : '30px',
            width: '70px',
            height: '70px',
            padding: '0',
            fontSize: '2.5rem',
            borderRadius: '50%',
            border: 'none',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            color: '#ffffff',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(34,197,94,0.4)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1000,
            animation: 'pulse 4s infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Book Your Safari Now"
        >
          <span>🦁</span>
          <span className="safari-text" style={{
            opacity: '0',
            width: '0',
            overflow: 'hidden',
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            marginLeft: '0'
          }}>
            Book Now
          </span>
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
