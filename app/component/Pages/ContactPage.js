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
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '140px 40px 100px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #0a2e1a 60%, #1a5c3a 100%)',
        overflow: 'hidden'
      }}>
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
          }}>
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
          }}>
            Ready to explore East Africa's wonders? Get in touch and let's create your perfect adventure together.
          </p>
        </div>
      </section>

      {/* Contact Info Grid - Clean & Elegant */}
      <section style={{
        padding: 'clamp(80px, 12vh, 100px) clamp(20px, 5vw, 40px)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(24px, 4vw, 30px)',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-card"
              style={{
                padding: '32px 24px',
                textAlign: 'center',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(34,197,94,0.08) 100%)',
                border: '1px solid rgba(34,197,94,0.3)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                animation: `fadeInUp 1s ease-out ${index * 0.15}s backwards`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px',
                opacity: 0.95
              }}>
                {info.icon}
              </div>

              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#ffffff',
                letterSpacing: '-0.3px'
              }}>
                {info.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {info.details.map((detail, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: '1rem',
                      color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.8)',
                      fontWeight: i === 0 ? '600' : '400',
                      margin: 0,
                      lineHeight: '1.4',
                      wordBreak: 'break-word'
                    }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '80px 40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #0d3d1f 100%)'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready for Your Adventure?
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '36px',
            lineHeight: '1.6'
          }}>
            Drop us a message — we're excited to help plan your perfect East African journey.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Explore Destinations
              </button>
            </Link>

            <a href="mailto:info@sseruztours.com">
              <button style={{
                padding: '16px 36px',
                fontSize: '1rem',
                fontWeight: '700',
                borderRadius: '50px',
                background: 'transparent',
                color: '#22c55e',
                border: '2px solid #22c55e',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
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
      </section>
    </div>
  );
};

export default ContactPage;