'use client'

import Link from 'next/link';

const AboutUsPage = () => {


  const companyStats = [
    { number: "500+", label: "Happy Travelers" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Destinations" }
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
      `}</style>

      {/* Hero Section */}
      <section style={{
        padding: 'clamp(100px, 15vh, 140px) clamp(20px, 5vw, 40px) clamp(80px, 12vh, 100px)',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #0d3d1f 100%)',
        position: 'relative',
        backgroundImage: 'url("/pics/africa.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            borderRadius: '50px',
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            marginBottom: '32px'
          }}>
            <span style={{ color: '#22c55e', fontWeight: '700', letterSpacing: '1.5px' }}>ABOUT SSERUZ</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 8vw, 4rem)',
            fontWeight: '900',
            margin: '0 0 24px',
            letterSpacing: 'clamp(-1px, -0.4vw, -2px)',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1'
          }}>
            East Africa's Premier<br/>Adventure Travel Partner
          </h1>

          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            15+ years crafting authentic, sustainable travel experiences connecting you with East Africa's beauty, culture, and communities.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            maxWidth: '800px',
            margin: '0 auto 50px'
          }}>
            {companyStats.map((stat, index) => (
              <div key={index} style={{
                padding: '30px 20px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(34,197,94,0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#22c55e';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(34,197,94,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#22c55e',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section style={{
        padding: 'clamp(80px, 12vh, 100px) clamp(20px, 5vw, 40px)',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 6vw, 2.8rem)',
          fontWeight: '900',
          marginBottom: '32px',
          color: '#ffffff'
        }}>
          Our Mission & Values
        </h2>
        <p style={{
          fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: '1.7',
          marginBottom: '48px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Creating transformative experiences connecting people with East Africa's beauty, cultures, and communities through sustainable tourism.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(24px, 4vw, 32px)',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Sustainability', desc: 'Eco-friendly practices and community support' },
            { title: 'Authenticity', desc: 'Genuine cultural and natural experiences' },
            { title: 'Excellence', desc: 'Highest standards in service and safety' },
            { title: 'Passion', desc: 'Love for East Africa and its people' }
          ].map((value, index) => (
            <div key={index} style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(34,197,94,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#22c55e';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(34,197,94,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '12px'
              }}>
                {value.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: '1.5'
              }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section style={{
        padding: 'clamp(80px, 12vh, 120px) clamp(20px, 5vw, 40px)',
        backgroundColor: '#000000',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.05) 0%, transparent 70%)'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            borderRadius: '50px',
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            marginBottom: '32px'
          }}>
            <span style={{ color: '#22c55e', fontWeight: '700', letterSpacing: '1.5px' }}>🎥 OUR STORY</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '900',
            marginBottom: '24px',
            color: '#ffffff',
            lineHeight: '1.2'
          }}>
            Experience East Africa Through Our Eyes
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: '1.6'
          }}>
            Experience our journey through East Africa's stunning landscapes, vibrant cultures, and unforgettable moments.
          </p>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            border: '2px solid rgba(34,197,94,0.2)',
            position: 'relative'
          }}>
            <video
              controls
              poster="/pics/africa.jpeg"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                borderRadius: '18px',
                backgroundColor: '#000000'
              }}
              preload="metadata"
            >
              <source src="/pics/WhatsApp Video 2026-01-12 at 10.12.05 PM.mp4" type="video/mp4" />
              <source src="/pics/WhatsApp Video 2026-01-12 at 10.12.05 PM.mp4" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Video overlay for branding */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(0,0,0,0.8)',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(34,197,94,0.5)',
              backdropFilter: 'blur(10px)',
              zIndex: 10
            }}>
              <span style={{
                color: '#22c55e',
                fontWeight: '700',
                fontSize: '0.9rem',
                letterSpacing: '1px'
              }}>
                SSERUZ TOURS
              </span>
            </div>

            {/* Play button overlay */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(34,197,94,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 5,
              border: '3px solid rgba(255,255,255,0.3)'
            }}>
              <span style={{
                color: 'white',
                fontSize: '24px',
                marginLeft: '3px'
              }}>
                ▶
              </span>
            </div>
          </div>

          <div style={{
            marginTop: '40px',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem'
            }}>
              <span style={{ color: '#22c55e' }}>▶</span>
              <span>Watch our story</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem'
            }}>
              <span style={{ color: '#22c55e' }}>📹</span>
              <span>HD Quality</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem'
            }}>
              <span style={{ color: '#22c55e' }}>🌍</span>
              <span>East Africa Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Section */}
      <section style={{
        padding: '100px 40px',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #0d3d1f 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)'
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '16px',
            letterSpacing: '-1.5px',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Meet Our Leadership
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: '1.6'
          }}>
            Meet the passionate professionals behind SSERUZ TOURS.
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/ceo">
              <button style={{
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '800',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 12px 35px rgba(34,197,94,0.35)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 18px 45px rgba(34,197,94,0.5)';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 12px 35px rgba(34,197,94,0.35)';
                }}>
                👥 View Our Team
              </button>
            </Link>
            <Link href="/destinations">
              <button style={{
                padding: '18px 40px',
                fontSize: '1.1rem',
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
                🗺️ Explore Destinations
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section style={{
        padding: '100px 40px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)'
        }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.2',
            letterSpacing: '-1px'
          }}>
            Ready to Experience<br/>
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              East Africa with SSERUZ?
            </span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Join thousands of satisfied travelers who've discovered the authentic beauty of East Africa through our carefully crafted experiences.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <button style={{
                padding: '18px 36px',
                fontSize: '1rem',
                fontWeight: '700',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 10px 28px rgba(34,197,94,0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 15px 38px rgba(34,197,94,0.5)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 10px 28px rgba(34,197,94,0.4)';
              }}>
                Start Your Journey
              </button>
            </Link>

            <Link href="/destinations">
              <button style={{
                padding: '18px 36px',
                fontSize: '1rem',
                fontWeight: '700',
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
                e.target.style.background = 'rgba(34,197,94,0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>
                Explore Destinations
              </button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUsPage;
