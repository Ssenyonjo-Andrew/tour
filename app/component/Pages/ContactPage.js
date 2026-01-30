'use client'

import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const contactInfo = [
    {
      title: "Email Us",
      details: ["info@sseruztours.com", "bookings@sseruztours.com"],
      icon: "✉️"
    },
    {
      title: "Call or WhatsApp",
      details: ["+256 700 123 456", "+256 772 987 654"],
      icon: "📞"
    },
    {
      title: "Our Location",
      details: ["Kampala, Uganda", "East Africa"],
      icon: "📍"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-card {
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .contact-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 30px 80px rgba(34, 197, 94, 0.3);
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: clamp(60px, 10vh, 100px) clamp(16px, 5vw, 30px) !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: clamp(30px, 5vw, 40px) !important;
          }

          .form-container {
            height: 600px !important;
          }

          .cta-container {
            min-height: auto !important;
            padding: 32px 24px !important;
          }

          .hero-section {
            padding: 100px 20px 80px !important;
          }

          .hero-heading {
            font-size: clamp(2rem, 6vw, 3.5rem) !important;
          }

          .hero-paragraph {
            font-size: clamp(1rem, 4vw, 1.1rem) !important;
          }

          .whatsapp-button {
            bottom: 20px !important;
            right: 20px !important;
            padding: 10px 14px !important;
            font-size: 0.8rem !important;
          }

          .section-heading {
            font-size: clamp(1.8rem, 5vw, 2.2rem) !important;
          }

          .section-paragraph {
            font-size: clamp(0.9rem, 3vw, 1rem) !important;
          }

          .button-element {
            padding: 14px 28px !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 60px 16px 40px !important;
          }

          .hero-heading {
            font-size: clamp(1.5rem, 5vw, 2.5rem) !important;
            margin-bottom: 16px !important;
          }

          .hero-paragraph {
            font-size: clamp(0.9rem, 3vw, 1rem) !important;
          }

          .contact-section {
            padding: 50px 16px 60px !important;
          }

          .form-container {
            height: 500px !important;
          }

          .cta-container {
            padding: 24px 16px !important;
          }

          .section-heading {
            font-size: clamp(1.5rem, 4vw, 2rem) !important;
            margin-bottom: 12px !important;
          }

          .button-element {
            padding: 12px 24px !important;
            font-size: 0.85rem !important;
          }

          .whatsapp-button {
            padding: 10px 12px !important;
            gap: 6px !important;
            font-size: 0.75rem !important;
          }

          .whatsapp-button span:first-child {
            font-size: 16px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '140px 40px 100px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #0a2e1a 60%, #1a5c3a 100%)',
        overflow: 'hidden'
      }} className="hero-section">
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          filter: 'brightness(0.8) contrast(1.1)'
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            borderRadius: '50px',
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            marginBottom: '32px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            <span style={{
              color: '#22c55e',
              fontWeight: '700',
              letterSpacing: '2px',
              fontSize: '0.85rem',
              textTransform: 'uppercase'
            }}>
              Contact Us
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '900',
            margin: '0 0 24px',
            lineHeight: '1.1',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 1.2s ease-out 0.2s backwards'
          }} className="hero-heading">
            Let's Start Your Journey
          </h1>

          <p style={{
            fontSize: '1.25rem',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '400',
            animation: 'fadeInUp 1.4s ease-out 0.4s backwards'
          }} className="hero-paragraph">
            Ready to explore East Africa's wonders? Get in touch and let's create your perfect adventure together.
          </p>
        </div>
      </section>

      {/* Combined Feedback & CTA Section */}
      <section style={{
        padding: 'clamp(80px, 12vh, 120px) clamp(20px, 5vw, 40px)',
        maxWidth: '1400px',
        margin: '0 auto'
      }} className="contact-section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 'clamp(40px, 8vw, 60px)',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Left: Google Form */}
          <div>
            <div style={{
              marginBottom: '32px'
            }}>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '900',
                marginBottom: '12px',
                background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }} className="section-heading">
                Send Us Your Feedback
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '1.6',
                margin: 0
              }} className="section-paragraph">
                Tell us about your travel interests and let us help you plan your perfect East African adventure.
              </p>
            </div>

            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(34,197,94,0.15)',
              border: '1px solid rgba(34,197,94,0.2)',
              backgroundColor: 'rgba(255,255,255,0.02)',
              height: '500px'
            }} className="form-container">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeEvQ7DTcb70ajiyijKLkGAJyG04sbzpF-9yAVSTxbJAV3_6w/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                style={{
                  display: 'block'
                }}
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Right: Call to Action */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.04) 100%)',
            border: '1px solid rgba(34,197,94,0.2)',
            boxShadow: '0 10px 40px rgba(34,197,94,0.1)',
            minHeight: '700px'
          }} className="cta-container">
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '900',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 20px 0'
            }} className="section-heading">
              Ready for Your Adventure?
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '32px',
              lineHeight: '1.6',
              margin: '0 0 32px 0'
            }} className="section-paragraph">
              Drop us a message — we're excited to help plan your perfect East African journey.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/destinations">
                <button style={{
                  padding: '16px 36px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: '#000000',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 28px rgba(34,197,94,0.3)',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  textAlign: 'center'
                }} className="button-element"
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Explore Destinations
                </button>
              </Link>

              <a href="mailto:ande.ssenyonjo@gmail.com">
                <button style={{
                  padding: '16px 36px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  borderRadius: '50px',
                  background: 'transparent',
                  color: '#22c55e',
                  border: '2px solid #22c55e',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  textAlign: 'center'
                }} className="button-element"
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(34,197,94,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  Email Us Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/0775769883"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          padding: '12px 16px',
          borderRadius: '50px',
          background: '#22c55e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          boxShadow: '0 4px 12px rgba(34,197,94,0.4)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 999,
          textDecoration: 'none',
          color: '#000000',
          fontWeight: '600',
          fontSize: '0.9rem'
        }} className="whatsapp-button"
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(34,197,94,0.6)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(34,197,94,0.4)';
        }}
      >
        <span style={{ fontSize: '20px' }}>💬</span>
        <span>Chat via WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactPage;