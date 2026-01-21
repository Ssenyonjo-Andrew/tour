import React from 'react';
import Link from 'next/link';

const ServicePage = () => {
  const services = [
    {
      title: "Product Development",
      description: "We provide tailored product solutions designed to meet your specific needs. Our culturally diverse team brings global perspective to create exceptional travel experiences that exceed expectations.",
      // image: "https://th.bing.com/th?q=Product+Development+in+Travel+and+Tourism&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.2&pid=InlineBlock&rm=3&mkt=en-WW&cc=UG&setlang=en&adlt=moderate&t=1&mw=247",
      features: ["Custom itineraries", "Market research", "Product innovation"]
    },
    {
      title: "Seamless Planning & Operations",
      description: "Comprehensive ground handling services ensure a smooth, high-quality travel experience. Our professional team delivers exceptional support with 24/7 back-office assistance.",
      // image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Ground operations", "24/7 support", "Quality assurance"]
    },
    {
      title: "Experienced Guides",
      description: "Knowledgeable, experienced tour guides are key to unforgettable experiences. Our extensively trained guides combine expertise with passion for exceptional service.",
      // image: "https://images.pexels.com/photos/15766937/pexels-photo-15766937.jpeg",
      features: ["Certified guides", "Local expertise", "Cultural knowledge"]
    },
    {
      title: "Brand Representation",
      description: "Full representation of your brand identity on the ground. Branded vehicles, custom materials, and professional communication maintain your presence seamlessly.",
      // image: "https://images.pexels.com/photos/4404522/pexels-photo-4404522.jpeg",
      features: ["Brand integration", "Vehicle branding", "Professional communication"]
    },
    {
      title: "Destination Marketing",
      description: "Tools and resources to help you effectively market destinations. We offer co-creation opportunities for tailored content supporting your unique marketing approach.",
      // image: "https://images.pexels.com/photos/2343011/pexels-photo-2343011.jpeg",
      features: ["Marketing materials", "Content creation", "Destination expertise"]
    },
    {
      title: "Impact & Sustainability",
      description: "Tourism that creates meaningful, positive change. We help partners align with sustainable values through community development and conservation initiatives.",
      // image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["Community support", "Conservation", "Sustainable practices"]
    },
    {
      title: "Car Hiring Services",
      description: "Premium vehicle rental services with well-maintained, comfortable cars suitable for all terrains. Our fleet includes 4x4 vehicles perfect for safari adventures and luxury sedans for city tours.",
      // image: "https://images.unsplash.com/photo-1549399735-cef2e2c3f638?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["4x4 Safari vehicles", "Luxury sedans", "24/7 roadside assistance"]
    },
    {
      title: "Professional Tour Guides",
      description: "Expert local guides with deep knowledge of East African culture, history, and wildlife. Our certified guides provide authentic experiences and ensure your journey is both educational and enjoyable.",
      // image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Certified local guides", "Cultural expertise", "Wildlife knowledge"]
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
      `}</style>

      {/* Header Section */}
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
          backgroundImage: 'url("/pics/service3.jpg")',
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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
              <span style={{ color: '#22c55e', fontWeight: '700', letterSpacing: '1px' }}>OUR SERVICES</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
              fontWeight: '900',
              margin: '0 0 24px',
              lineHeight: '1.05',
              letterSpacing: 'clamp(-1px, -0.6vw, -3px)',
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              What We Offer
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)',
              fontWeight: '500'
            }}>
              We create customized tour packages, represent your brand, and provide premium car rentals and expert guides for unforgettable East African experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: 'clamp(100px, 12vh, 120px) clamp(20px, 5vw, 40px)',
        backgroundColor: '#000000'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px, 4vw, 40px)'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  padding: '48px 40px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.015) 0%, rgba(34,197,94,0.025) 100%)',
                  border: '1px solid rgba(34,197,94,0.18)',
                  transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 30px 70px rgba(34,197,94,0.18)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(22,163,74,0.04) 100%)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.18)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.015) 0%, rgba(34,197,94,0.025) 100%)';
                }}
              >
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  margin: '0 0 20px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.5px'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: '1.7',
                  margin: '0 0 32px'
                }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px',
                        fontSize: '1rem',
                        color: '#22c55e',
                        fontWeight: '500'
                      }}
                    >
                      <span style={{ fontSize: '1.4rem', color: '#22c55e' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'clamp(120px, 18vh, 160px) clamp(20px, 5vw, 40px)',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.9) 100%)',
        position: 'relative',
        backgroundImage: 'url("https://images.pexels.com/photos/8276369/pexels-photo-8276369.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 70%)',
          zIndex: 2
        }} />
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 20
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.8rem)',
            fontWeight: '900',
            marginBottom: '32px',
            lineHeight: '1.1',
            letterSpacing: 'clamp(-1px, -0.6vw, -3px)',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready to Partner<br/>
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              // textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              filter: 'brightness(1.2)'
            }}>
              With Us?
            </span>
          </h2>
          <p style={{
            fontSize: '1.4rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '56px',
            lineHeight: '1.6'
          }}>
            Create exceptional experiences that inspire travelers and promote sustainable development.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;