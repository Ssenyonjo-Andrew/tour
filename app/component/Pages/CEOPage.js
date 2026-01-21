import React from 'react';
import Link from 'next/link';

const CEOPage = () => {
  const teamMembers = [
    {
      name: "Afande Sserunkuma",
      role: "Chief Executive Officer",
      image: "/pics/ceo.jpg",
      bio: "With over 15 years in the tourism industry, our CEO leads SSERUZ TOURS with passion and expertise, ensuring every journey creates unforgettable memories. His deep knowledge of East African destinations and commitment to sustainable tourism has positioned SSERUZ as a trusted partner for discerning travelers worldwide."
    },
    {
      name: "Team Member 1",
      role: "Operations Manager",
      image: "/pics/team.jpg",
      bio: "Specializes in crafting seamless travel experiences and managing our premium tour operations across East Africa. With extensive experience in logistics and customer service, she ensures every detail of your journey is perfectly coordinated for maximum enjoyment."
    },
    {
      name: "Team Member 2",
      role: "Cultural Guide",
      image: "/pics/tp.jpg",
      bio: "Expert in local cultures and traditions, bringing authentic experiences to our valued travelers. His deep understanding of East African heritage and storytelling ability creates meaningful connections between visitors and the communities they encounter."
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
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: 'clamp(100px, 15vh, 140px) clamp(20px, 5vw, 40px) clamp(80px, 12vh, 100px)',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.9) 100%)',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/pics/ceo.jpg")',
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
            }}>
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
            }}>
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
            }}>
              Meet the passionate professionals behind SSERUZ TOURS who bring East Africa to life through exceptional service and deep cultural understanding.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Featured Section */}
      <section style={{
        padding: '120px 40px',
        backgroundColor: '#000000'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 8vw, 80px)',
            alignItems: 'center',
            marginBottom: 'clamp(80px, 15vh, 120px)'
          }}>
            {/* CEO Image */}
            <div style={{
              animation: 'fadeInScale 1s ease-out',
              position: 'relative'
            }}>
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
                    objectPosition: 'center top'
                  }}
                />
              </div>
            </div>

            {/* CEO Info */}
            <div style={{ animation: 'fadeInUp 1s ease-out 0.3s backwards' }}>
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
                Afande Sserunkuma
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
      }}>
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
            gap: 'clamp(24px, 4vw, 40px)'
          }}>
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
                }}>
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

                <div style={{ padding: '32px 28px' }}>
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
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>
                    {member.role}
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: '1.6'
                  }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 40px',
        textAlign: 'center',
        position: 'relative'
      }}>
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
          }}>
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
