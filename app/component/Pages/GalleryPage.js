import React, { useState } from 'react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Only verified images that exist in the pics folder
  const galleryImages = [
    { id: 1, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.10 PM.jpeg", alt: "East African adventure" },
    { id: 2, src: "/pics/mountain.jpg", alt: "Scenic landscape" },
    { id: 3, src: "/pics/IMG-20260119-WA0077.jpg", alt: "Cultural experience" },
    { id: 4, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.13 PM.jpeg", alt: "Wildlife safari" },
    { id: 5, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.14 PM.jpeg", alt: "Mountain adventure" },
    { id: 6, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.15 PM.jpeg", alt: "Beach paradise" },
    { id: 7, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.16 PM.jpeg", alt: "Safari experience" },
    { id: 8, src: "/pics/IMG-20260119-WA0035.jpg", alt: "Cultural festival" },
    { id: 9, src: "/pics/WhatsApp Image 2026-01-12 at 10.17.46 PM.jpeg", alt: "Guided tour experience" },
    { id: 10, src: "/pics/team.jpg", alt: "Expert guide" },
    { id: 11, src: "/pics/mountain.jpg", alt: "Cultural immersion" },
    { id: 12, src: "/pics/WhatsApp Image 2026-01-12 at 10.17.53 PM.jpeg", alt: "Sustainable travel" },
    { id: 13, src: "/pics/WhatsApp Image 2026-01-12 at 10.17.58 PM.jpeg", alt: "Adventure trail" },
    { id: 14, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.01 PM.jpeg", alt: "Nature discovery" },
    { id: 15, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.02 PM.jpeg", alt: "Cultural celebration" },
    { id: 16, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.03 PM.jpeg", alt: "Wildlife sanctuary" },
    { id: 17, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.07 PM.jpeg", alt: "Mountain views" },
    { id: 18, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.08 PM.jpeg", alt: "Safari landscape" },
    { id: 19, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.09 PM.jpeg", alt: "Traditional ceremony" },
    { id: 20, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.11 PM.jpeg", alt: "Nature trail" },
    { id: 21, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.15 PM.jpeg", alt: "Cultural site" },
    { id: 22, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.18 PM.jpeg", alt: "Adventure activity" },
    { id: 23, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.20 PM.jpeg", alt: "Wildlife observation" },
    { id: 24, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.21 PM.jpeg", alt: "Cultural performance" },
    { id: 25, src: "/pics/IMG-20260119-WA0085.jpg", alt: "Mountain expedition" },
    { id: 26, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.02 PM.jpeg", alt: "Cultural heritage site" },
    { id: 27, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.05 PM.jpeg", alt: "Adventure sport" },
    { id: 28, src: "/pics/IMG-20260119-WA0069.jpg", alt: "Traditional craft" },
    { id: 29, src: "/pics/IMG-20260112-WA0157.jpg", alt: "Mountain trekking" },
    { id: 30, src: "/pics/home.jpg", alt: "Cultural experience" },
    { id: 31, src: "/pics/team.jpg", alt: "Mountain adventure" },
    { id: 32, src: "/pics/IMG-20260112-WA0124.jpg", alt: "Safari adventure" },
    { id: 33, src: "/pics/IMG-20260112-WA0116.jpg", alt: "East African landscape" },
    { id: 34, src: "/pics/IMG-20260112-WA0117.jpg", alt: "Cultural experience" },
    { id: 35, src: "/pics/IMG-20260112-WA0118.jpg", alt: "Wildlife encounter" },
    { id: 36, src: "/pics/IMG-20260112-WA0119.jpg", alt: "Adventure activity" },
    { id: 37, src: "/pics/IMG-20260112-WA0120.jpg", alt: "Nature scenery" },
    { id: 38, src: "/pics/IMG-20260112-WA0121.jpg", alt: "Safari experience" },
    { id: 39, src: "/pics/IMG-20260112-WA0122.jpg", alt: "Mountain view" },
    { id: 40, src: "/pics/IMG-20260112-WA0124.jpg", alt: "Cultural site" },
    { id: 41, src: "/pics/IMG-20260112-WA0125.jpg", alt: "Wildlife observation" },
    { id: 42, src: "/pics/IMG-20260112-WA0127.jpg", alt: "Adventure trail" },
    { id: 43, src: "/pics/IMG-20260112-WA0128.jpg", alt: "Nature walk" },
    { id: 44, src: "/pics/IMG-20260112-WA0129.jpg", alt: "Safari landscape" },
    { id: 45, src: "/pics/IMG-20260112-WA0130.jpg", alt: "Cultural celebration" },
    { id: 46, src: "/pics/IMG-20260119-WA0016.jpg", alt: "East African wildlife" },
    { id: 47, src: "/pics/IMG-20260119-WA0017.jpg", alt: "Safari adventure" },
    { id: 48, src: "/pics/IMG-20260119-WA0018.jpg", alt: "Cultural festival" },
    { id: 49, src: "/pics/IMG-20260119-WA0019.jpg", alt: "Mountain trekking" },
    { id: 50, src: "/pics/IMG-20260119-WA0020.jpg", alt: "Nature exploration" },
    { id: 51, src: "/pics/IMG-20260119-WA0021.jpg", alt: "Wildlife safari" },
    { id: 52, src: "/pics/IMG-20260119-WA0022.jpg", alt: "Beach vacation" },
    { id: 53, src: "/pics/IMG-20260119-WA0023.jpg", alt: "Forest walk" },
    { id: 54, src: "/pics/IMG-20260119-WA0024.jpg", alt: "River cruise" },
    { id: 55, src: "/pics/IMG-20260119-WA0025.jpg", alt: "Cultural performance" },
    { id: 56, src: "/pics/ad2.jpeg", alt: "Adventure experience" },
    { id: 57, src: "/pics/africa.jpeg", alt: "African landscape" },
    { id: 58, src: "/pics/aruu.jpg", alt: "Aruu Falls waterfall" },
    { id: 59, src: "/pics/ceo.jpg", alt: "SSERUZ leadership" },
    { id: 60, src: "/pics/cul1.jpeg", alt: "Cultural immersion" }
  ];

  const ImageCard = ({ image }) => (
    <div
      style={{
        position: 'relative',
        aspectRatio: '1',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#0a0a0a',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
      }}
      onClick={() => setSelectedImage(image)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)';
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)'
        }}
        onMouseEnter={(e) => { e.target.style.transform = 'scale(1.12)'; }}
        onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(34,197,94,0) 0%, rgba(34,197,94,0.2) 100%)',
        opacity: '0',
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
      />
    </div>
  );

  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ paddingTop: '0' }}>
        {/* Hero Section */}
        <div style={{
          padding: '8rem 2.5rem 5rem',
          textAlign: 'center',
          position: 'relative',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.15) 0%, transparent 60%)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '0.875rem 2rem',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.08))',
            border: '1px solid rgba(34,197,94,0.3)',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(34,197,94,0.2)'
          }}>
            <span style={{ 
              color: '#22c55e', 
              fontWeight: '700', 
              letterSpacing: '0.1em',
              fontSize: '0.875rem',
              textTransform: 'uppercase'
            }}>
              Photo Gallery
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: '900',
            margin: '0 0 1.75rem',
            letterSpacing: '-0.03em',
            lineHeight: '1.05',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Our East African Journey
          </h1>

          <p style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '50rem',
            margin: '0 auto',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Explore East Africa's beauty, culture, and adventure through our collection of unforgettable moments
          </p>

          <div style={{
            marginTop: '3rem',
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'rgba(34,197,94,0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(34,197,94,0.2)'
          }}>
            <p style={{
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              letterSpacing: '0.02em'
            }}>
              <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '1.5rem' }}>{galleryImages.length}</span> unforgettable moments captured
            </p>
          </div>
        </div>

        {/* Modern Gallery Grid */}
        <div style={{
          padding: 'clamp(3rem, 6vh, 4rem) clamp(20px, 5vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 20vw, 280px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          {galleryImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '2rem',
              backdropFilter: 'blur(4px)',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes scaleIn {
                from { transform: scale(0.9); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
              }
            `}</style>
            <div
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                animation: 'scaleIn 0.3s ease',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(34,197,94,0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  maxHeight: '90vh'
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(34,197,94,0.2)',
                  color: '#22c55e',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(34,197,94,0.4)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(34,197,94,0.2)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div style={{ textAlign: 'center', padding: '8rem 2.5rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 70%)'
          }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '50rem', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '900',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              color: '#ffffff'
            }}>
              Ready to Create
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Your Own Moments?
              </span>
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '3rem',
              textAlign: 'center',
              lineHeight: '1.6'
            }}>
              Let us craft your perfect East African adventure.
            </p>
            <a href="/contact" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  padding: '1.25rem 3.25rem',
                fontSize: '1.15rem',
                fontWeight: '800',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: '#000000',
                textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                cursor: 'pointer',
                boxShadow: '0 15px 40px rgba(34,197,94,0.4)',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
              }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.06)';
                  e.target.style.boxShadow = '0 25px 60px rgba(34,197,94,0.55)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 15px 40px rgba(34,197,94,0.4)';
                }}
              >
                Plan Your Journey
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;