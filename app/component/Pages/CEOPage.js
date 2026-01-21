import React from 'react';
import Link from 'next/link';

const CEOPage = () => {
  const teamMembers = [
    {
      name: "Sserunkuma Ambrose",
      role: "Chief Executive Officer",
      image: "/pics/ceo.jpg"
    },
    {
      name: "Atuhaire Peace",
      role: "Corporate Business Manager",
      image: "/pics/busi.jpg"
    },
    {
      name: "Achan Irene Sserunkuma",
      role: "Secretary & Finance Manager",
      image: "/pics/sec.jpg"
    },
    {
      name: "Counsel Mirembe Deborah",
      role: "Company Lawyer",
      image: "/pics/lawyer.jpg"
    },
    {
      name: "Bwambale Silve",
      role: "Company Chef",
      image: "/pics/chef.jpg"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Mobile & Tablet Responsive Styles */
        @media (max-width: 1024px) {
          .ceo-featured-grid {
            gap: clamp(30px, 6vw, 60px);
          }
        }

        @media (max-width: 768px) {
          .ceo-hero-section {
            padding: clamp(60px, 12vh, 100px) clamp(16px, 4vw, 32px) clamp(50px, 10vh, 80px) !important;
          }

          .ceo-featured-section {
            padding: clamp(80px, 12vh, 100px) clamp(16px, 4vw, 32px) !important;
          }

          .ceo-featured-grid {
            grid-template-columns: 1fr !important;
            gap: clamp(24px, 5vw, 40px) !important;
          }

          .ceo-featured-image {
            height: auto !important;
            min-height: 300px !important;
          }

          .ceo-featured-info h2 {
            font-size: clamp(2rem, 6vw, 3rem) !important;
          }

          .ceo-featured-info p {
            font-size: clamp(1rem, 2.5vw, 1.15rem) !important;
          }

          .team-members-section {
            padding: clamp(80px, 12vh, 100px) clamp(16px, 4vw, 32px) !important;
          }

          .team-members-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: clamp(16px, 3vw, 30px) !important;
          }

          .team-member-card {
            animation: fadeInUp 0.8s ease-out !important;
          }

          .team-member-image {
            height: 200px !important;
          }

          .team-member-card h3 {
            font-size: clamp(1.2rem, 4vw, 1.8rem) !important;
          }

          .team-member-card > div:last-child {
            padding: clamp(16px, 3vw, 28px) !important;
          }

          .company-logo-card {
            gridColumn: span 2 !important;
            flex-direction: column !important;
            min-height: auto !important;
            text-align: center !important;
          }

          .company-logo-card > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(34, 197, 94, 0.2) !important;
            padding: clamp(24px, 4vw, 32px) !important;
          }

          .company-logo-card > div:last-child {
            padding: clamp(24px, 4vw, 32px) !important;
            text-align: center !important;
          }

          .company-logo-card h3 {
            font-size: clamp(1.8rem, 5vw, 2.5rem) !important;
          }

          .company-logo-card p {
            font-size: clamp(0.95rem, 2.5vw, 1.25rem) !important;
          }

          .cta-section {
            padding: clamp(80px, 12vh, 100px) clamp(16px, 4vw, 32px) !important;
          }

          .cta-section h2 {
            font-size: clamp(2rem, 6vw, 3.5rem) !important;
          }

          .cta-section p {
            font-size: clamp(1rem, 2.5vw, 1.25rem) !important;
          }
        }

        @media (max-width: 640px) {
          .ceo-hero-tagline {
            font-size: 0.7rem !important;
            padding: clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px) !important;
          }

          .ceo-hero-h1 {
            font-size: clamp(2rem, 5vw, 4.5rem) !important;
            margin-bottom: 16px !important;
            letter-spacing: -2px !important;
          }

          .ceo-hero-p {
            font-size: clamp(1rem, 2vw, 1.4rem) !important;
            padding: 0 clamp(8px, 2vw, 16px) !important;
          }

          .ceo-section {
            padding: clamp(60px, 10vh, 80px) clamp(12px, 3vw, 24px) !important;
          }

          .team-members-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
            gap: clamp(12px, 2vw, 20px) !important;
          }

          .team-member-card {
            border-radius: 12px !important;
          }

          .team-member-image {
            height: 160px !important;
          }

          .team-member-card h3 {
            font-size: 1rem !important;
            margin-bottom: 4px !important;
          }

          .team-member-card > div:last-child {
            font-size: 0.85rem !important;
          }

          .company-logo-card {
            gridColumn: auto !important;
          }

          .company-logo-card > div:first-child {
            max-width: 120px !important;
            margin: 0 auto !important;
          }

          .company-logo-card > div:first-child img {
            max-width: 120px !important;
            max-height: 120px !important;
          }

          .cta-section {
            padding: clamp(60px, 10vh, 80px) clamp(12px, 3vw, 24px) !important;
          }

          .cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }

          .cta-buttons > a, .cta-buttons > button {
            width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .ceo-hero-section {
            padding: clamp(40px, 8vh, 60px) clamp(12px, 3vw, 20px) clamp(30px, 6vh, 50px) !important;
          }

          .ceo-hero-tagline {
            font-size: 0.65rem !important;
            padding: 6px clamp(12px, 3vw, 16px) !important;
          }

          .ceo-hero-h1 {
            font-size: clamp(1.8rem, 5vw, 3rem) !important;
            letter-spacing: -1px !important;
          }

          .ceo-featured-info h2 {
            font-size: clamp(1.5rem, 5vw, 2.2rem) !important;
          }

          .team-members-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
            gap: 10px !important;
          }

          .team-member-image {
            height: 140px !important;
          }

          .team-member-card h3 {
            font-size: 0.9rem !important;
          }

          .team-member-card > div:last-child {
            padding: 12px 10px !important;
            font-size: 0.75rem !important;
          }

          .company-logo-card {
            padding: 0 !important;
          }

          .company-logo-card > div:first-child {
            padding: 20px !important;
          }

          .company-logo-card > div:first-child img {
            max-width: 100px !important;
          }

          .company-logo-card > div:last-child {
            padding: 20px !important;
          }

          .company-logo-card h3 {
            font-size: 1.4rem !important;
          }

          .company-logo-card p {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
          }

          .cta-section h2 {
            font-size: clamp(1.6rem, 5vw, 2.5rem) !important;
          }

          .cta-section p {
            font-size: clamp(0.9rem, 2vw, 1rem) !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: 'clamp(100px, 15vh, 140px) clamp(20px, 5vw, 40px) clamp(80px, 12vh, 100px)',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.9) 100%)',
        overflow: 'hidden'
      }} className="ceo-hero-section">
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/pics/logo.jpg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }} />
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 70%, rgba(34,197,94,0.1) 0%, transparent 60%)',
          zIndex: 3
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 20,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ animation: 'fadeInUp 1s ease-out' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              borderRadius: '50px',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              marginBottom: '32px'
            }} className="ceo-hero-tagline">
              <span style={{ color: '#22c55e', fontWeight: '700', letterSpacing: '1px' }}>MEET OUR TEAM</span>
            </div>

            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '900',
              margin: '0 0 24px',
              lineHeight: '1.05',
              letterSpacing: '-3px',
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              // textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)'
            }} className="ceo-hero-h1">
              Leadership & Team
            </h1>

            <p style={{
              fontSize: '1.4rem',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)',
              fontWeight: '500'
            }} className="ceo-hero-p">
              Meet the passionate professionals behind SSERUZ TOURS who bring East Africa to life through exceptional service and deep cultural understanding.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Featured Section */}
      <section style={{
        padding: '120px 40px',
        backgroundColor: '#000000'
      }} className="ceo-featured-section ceo-section">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 8vw, 80px)',
            alignItems: 'center',
            marginBottom: 'clamp(80px, 15vh, 120px)'
          }} className="ceo-featured-grid">
            {/* CEO Image */}
            <div style={{
              animation: 'fadeInScale 1s ease-out',
              position: 'relative'
            }} className="ceo-featured-image">
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(34,197,94,0.3)',
                border: '2px solid rgba(34,197,94,0.2)'
              }}>
                <img
                  src="/pics/ceo.jpg"
                  alt="CEO Name"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    objectPosition: 'center 25%'
                  }}
                />
              </div>
            </div>

            {/* CEO Info */}
            <div style={{ animation: 'fadeInUp 1s ease-out 0.3s backwards' }} className="ceo-featured-info">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                borderRadius: '50px',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                marginBottom: '24px'
              }}>
                <span style={{ color: '#22c55e', fontWeight: '700', letterSpacing: '1px' }}>CEO</span>
              </div>

              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                margin: '0 0 16px',
                letterSpacing: '-2px',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Sserunkuma Ambrose
              </h2>

              <div style={{
                fontSize: '1.25rem',
                color: '#22c55e',
                fontWeight: '600',
                marginBottom: '32px'
              }}>
                Chief Executive Officer
              </div>

              <p style={{
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.7',
                marginBottom: '40px'
              }}>
                With over 15 years in the tourism industry, our CEO leads SSERUZ TOURS with passion and expertise, ensuring every journey creates unforgettable memories. His deep knowledge of East African destinations and commitment to sustainable tourism has positioned SSERUZ as a trusted partner for discerning travelers worldwide. Under his leadership, SSERUZ has become synonymous with authentic, high-quality travel experiences that respect both the environment and local communities.
              </p>

              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  background: 'rgba(34,197,94,0.1)',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  border: '1px solid rgba(34,197,94,0.3)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#22c55e'
                }}>
                  15+ Years Experience
                </div>
                <div style={{
                  background: 'rgba(34,197,94,0.1)',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  border: '1px solid rgba(34,197,94,0.3)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#22c55e'
                }}>
                  Sustainable Tourism Expert
                </div>
                <div style={{
                  background: 'rgba(34,197,94,0.1)',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  border: '1px solid rgba(34,197,94,0.3)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#22c55e'
                }}>
                  East Africa Specialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section style={{
        padding: '120px 40px',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        position: 'relative'
      }} className="team-members-section">
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.05) 0%, transparent 70%)'
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              margin: '0 0 24px',
              letterSpacing: '-1.5px',
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Expert Team
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Meet the dedicated professionals who make every SSERUZ TOURS experience exceptional.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            autoFlow: 'dense'
          }} className="team-members-grid">
            {teamMembers.slice(1).map((member, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(34,197,94,0.2)',
                  transition: 'all 0.4s ease',
                  animation: `fadeInUp 1s ease-out ${0.2 * (index + 1)}s backwards`
                }}
                className="team-member-card"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(34,197,94,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  height: '280px',
                  overflow: 'hidden',
                  position: 'relative'
                }} className="team-member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={e => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                <div style={{ padding: '32px 28px', textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '8px'
                  }}>
                    {member.name}
                  </h3>
                  <div style={{
                    fontSize: '1rem',
                    color: '#22c55e',
                    fontWeight: '600'
                  }}>
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Company Logo & Description Card */}
            <div
              style={{
                gridColumn: '1 / -1',
                background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(34,197,94,0.3)',
                transition: 'all 0.4s ease',
                animation: 'fadeInUp 1s ease-out 1.2s backwards',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '320px',
                textAlign: 'center'
              }}
              className="company-logo-card"
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = '#22c55e';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(34,197,94,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Logo Section */}
              <div style={{
                flex: '0 0 auto',
                padding: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: '1px solid rgba(34,197,94,0.2)'
              }}>
                <img 
                  src="/pics/logo.jpg.jpg" 
                  alt="SSERUZ TOURS Logo"
                  style={{
                    maxWidth: '200px',
                    maxHeight: '200px',
                    objectFit: 'contain',
                    borderRadius: '16px'
                  }}
                />
              </div>

              {/* Text Section */}
              <div style={{
                flex: '1',
                padding: '40px 48px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '16px',
                  letterSpacing: '-1px'
                }}>
                  SSERUZ TOURS
                </h3>
                <p style={{
                  fontSize: '1.25rem',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: '1.8',
                  margin: '0'
                }}>
                  Discover authentic East African experiences with expert guides and sustainable tourism practices. Your journey to adventure starts here. At SSERUZ TOURS, we are committed to crafting unforgettable safari journeys that celebrate the natural beauty and rich cultural heritage of East Africa. From wildlife encounters to cultural immersion, every experience is carefully curated to exceed your expectations and create lasting memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 40px',
        textAlign: 'center',
        position: 'relative'
      }} className="cta-section">
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1) 0%, transparent 70%)'
        }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            marginBottom: '24px',
            lineHeight: '1.2',
            letterSpacing: '-1.5px'
          }}>
            Ready to Experience<br/>
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              East Africa with Us?
            </span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '56px',
            lineHeight: '1.6'
          }}>
            Let our experienced team create your perfect East African adventure.
          </p>
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }} className="cta-buttons">
            <Link href="/contact">
              <button style={{
                padding: '20px 48px',
                fontSize: '1.125rem',
                fontWeight: '800',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 15px 40px rgba(34,197,94,0.35)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => {
                  e.target.style.transform = 'scale(1.06)';
                  e.target.style.boxShadow = '0 25px 60px rgba(34,197,94,0.5)';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 15px 40px rgba(34,197,94,0.35)';
                }}>
                Get Started
              </button>
            </Link>
            <Link href="/">
              <button style={{
                padding: '20px 48px',
                fontSize: '1.125rem',
                fontWeight: '800',
                borderRadius: '50px',
                border: '2px solid #22c55e',
                background: 'transparent',
                color: '#22c55e',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => {
                  e.target.style.background = 'rgba(34,197,94,0.12)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEOPage;
