import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [bubbleProps, setBubbleProps] = useState([]);

  const galleryImages = [
    { src: "/api/placeholder/450/320", title: "Mountain Gorillas", category: "Wildlife" },
    { src: "/api/placeholder/450/320", title: "Murchison Falls", category: "Nature" },
    { src: "/api/placeholder/450/320", title: "Cultural Heritage", category: "Culture" },
    { src: "/api/placeholder/450/320", title: "Safari Adventures", category: "Wildlife" },
    { src: "/api/placeholder/450/320", title: "Rwenzori Mountains", category: "Adventure" },
    { src: "/api/placeholder/450/320", title: "Lake Victoria", category: "Nature" },
    { src: "/api/placeholder/450/320", title: "Queen Elizabeth Park", category: "Wildlife" },
    { src: "/api/placeholder/450/320", title: "Traditional Dance", category: "Culture" },
  ];

  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  const wildlifeImages = [
    "/pics/home.jpg",
    "/pics/home1.jpg",
    "/pics/home2.jpg",
  ];

  // Generate bubble properties on client side to avoid hydration mismatch
  useEffect(() => {
    const bubbles = [...Array(15)].map((_, i) => ({
      width: Math.random() * 25 + 8,
      height: Math.random() * 25 + 8,
      background: `rgba(34, 197, 94, ${Math.random() * 0.4 + 0.1})`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 12 + 18}s`,
      animationDelay: `${Math.random() * 15}s`,
    }));
    setBubbleProps(bubbles);
  }, []);

  const services = [
    {
      img: "https://images.pexels.com/photos/32181440/pexels-photo-32181440.jpeg",
      title: "Gorilla Trekking",
      description: "Experience close encounters with mountain gorillas in their natural habitat across East Africa's forests",
      stats: "98% Success Rate",
    },
    {
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Safari Expeditions",
      description: "Explore East Africa's premier national parks and wildlife reserves in open 4x4 vehicles",
      stats: "15+ Parks Covered",
    },
    {
      img: "https://images.pexels.com/photos/15766937/pexels-photo-15766937.jpeg",
      title: "Mountain Climbing",
      description: "Conquer legendary peaks like the Rwenzori Mountains and other East African ranges",
      stats: "Expert Guides",
    },
    {
      img: "https://images.pexels.com/photos/4404522/pexels-photo-4404522.jpeg",
      title: "Cultural Tours",
      description: "Immerse in authentic traditions, dances and communities across East Africa",
      stats: "20+ Ethnic Groups",
    },
    {
      img: "https://images.pexels.com/photos/2343011/pexels-photo-2343011.jpeg",
      title: "Nature Walks",
      description: "Discover diverse ecosystems, rainforests and scenic landscapes on guided walks",
      stats: "Eco-Friendly",
    },
    {
      img: "/pics/water1.jpg",
      title: "Water Adventures",
      description: "Kayaking, white-water rafting and boat safaris on East Africa's pristine waters",
      stats: "All Skill Levels",
    },
  ];

  useEffect(() => {
    // Optional: keep scroll tracking if you plan to use it later
  }, []);

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', position: 'relative' }}>
      {/* Floating Bubbles Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        {/* Generate multiple bubbles with consistent properties */}
        {bubbleProps.map((bubble, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              background: bubble.background,
              borderRadius: '50%',
              left: bubble.left,
              top: bubble.top,
              animation: `floatBubble${i % 3 + 1} ${bubble.animationDuration} ease-in-out infinite`,
              animationDelay: bubble.animationDelay,
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)',
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes scrollRight { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
        @keyframes scrollBackground { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollBackgroundReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        @keyframes floatBubble1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-120px) translateX(80px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-240px) translateX(160px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-180px) translateX(120px) scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes floatBubble2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(100px) translateX(-100px) scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: translateY(200px) translateX(-200px) scale(1.1);
            opacity: 0.5;
          }
          75% {
            transform: translateY(150px) translateX(-150px) scale(0.8);
            opacity: 0.3;
          }
        }

        @keyframes floatBubble3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translateY(-150px) translateX(100px) scale(1.3);
            opacity: 0.7;
          }
          66% {
            transform: translateY(-300px) translateX(200px) scale(0.7);
            opacity: 0.3;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d3d1f 100%)' }}>
        {/* Scrolling Background Images – unchanged */}

        <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '400%', height: '100%', animation: 'scrollBackground 30s linear infinite', display: 'flex' }}>
            {wildlifeImages.concat(wildlifeImages, wildlifeImages, wildlifeImages).map((image, index) => (
              <img key={index} src={image} alt="" style={{ width: '25%', height: '100%', objectFit: 'cover', opacity: 0.8, filter: 'blur(0.1px) brightness(0.8)' }} />
            ))}
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '400%', height: '100%', animation: 'scrollBackgroundReverse 25s linear infinite', display: 'flex' }}>
            {wildlifeImages.concat(wildlifeImages, wildlifeImages, wildlifeImages).map((image, index) => (
              <img key={`rev-${index}`} src={image} alt="" style={{ width: '25%', height: '100%', objectFit: 'cover', opacity: 0.1, filter: 'blur(1px) brightness(0.6) contrast(1.2)' }} />
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 5 }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', zIndex: 10 }} />

        {/* Floating glows unchanged */}

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', width: '100%', zIndex: 30, position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ animation: 'fadeInUp 1s ease-out', maxWidth: '600px' }}>
              <div style={{ marginTop: '35px', display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 24px', borderRadius: '999px', marginBottom: '32px', background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(22,163,74,0.05) 100%)', backdropFilter: 'blur(10px)' }}>
                <span style={{ color: '#22c55e', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>EAST AFRICA</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', fontWeight: '900', color: '#ffffff', marginBottom: '20px', lineHeight: '1', letterSpacing: 'clamp(-1px, -0.8vw, -4px)' }}>
                SSERUZ TOURS AND TRAVEL
              </h1>

              <p style={{ fontSize: '1.875rem', color: '#22c55e', fontWeight: '300', fontStyle: 'italic', marginBottom: '32px', letterSpacing: '1px' }}>
                ...Every mile is a smile
              </p>

              <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.75', marginBottom: '40px', maxWidth: '576px' }}>
                Discover East Africa's wildlife, nature, and culture. Sustainable adventures across Uganda, Rwanda, Kenya, and Tanzania.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px', justifyContent: 'center' }}>
                <Link href="/destinations">
                  <button style={{ padding: '20px 40px', fontSize: '1rem', fontWeight: '700', borderRadius: '50px', border: 'none', background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color: '#000000', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 10px 30px rgba(34,197,94,0.3)' }}
                    onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 15px 40px rgba(34,197,94,0.5)'; }}
                    onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 30px rgba(34,197,94,0.3)'; }}>
                    Explore Destinations
                  </button>
                </Link>

                <Link href="/service">
                  <button style={{ padding: '20px 40px', fontSize: '1rem', fontWeight: '700', borderRadius: '50px', border: '2px solid #22c55e', background: 'transparent', color: '#22c55e', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.target.style.background = 'rgba(34,197,94,0.1)'; e.target.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)'; }}>
                    Our Services
                  </button>
                </Link>
              </div>

              <div style={{ display: 'flex', gap: 'clamp(20px, 8vw, 40px)', paddingTop: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[{ label: 'Certified', value: 'Eco-Tourism' }, { label: 'Local', value: 'Community' }, { label: 'Licensed', value: 'Operator' }].map((item, i) => (
                  <div key={i} style={{ textAlign: 'center', minWidth: '120px' }}>
                    <div style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.75rem)', color: 'rgba(255,255,255,0.5)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                    <div style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', color: '#22c55e', fontWeight: '700' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', animation: 'float 3s ease-in-out infinite' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '3px' }}>SCROLL</span>
          <div style={{ width: '2px', height: '48px', background: 'linear-gradient(to bottom, #22c55e, transparent)', animation: 'pulse 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '144px 40px', backgroundColor: '#000000', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-block', padding: '12px 24px', borderRadius: '50px', marginBottom: '24px', background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(22,163,74,0.05) 100%)' }}>
              <span style={{ color: '#22c55e', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '2px' }}>OUR EXPERTISE</span>
            </div>
            <h2 style={{ fontSize: '4rem', fontWeight: '900', color: '#ffffff', marginBottom: '20px', letterSpacing: '-2px' }}>
              Premium East African <span style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experiences</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.75' }}>
              Specialized tours crafted by experts who know East Africa's hidden gems
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {services.map((service, index) => (
              <div key={index} style={{
                padding: '44px',
                borderRadius: '30px',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(34,197,94,0.03) 100%)',
                border: '1px solid rgba(34,197,94,0.15)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(22,163,74,0.05) 100%)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(34,197,94,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(34,197,94,0.03) 100%)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    marginBottom: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                />
                <h3 style={{ fontSize: '1.875rem', fontWeight: '800', color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.5px' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.7', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '30px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '0.875rem', fontWeight: '700' }}>
                  <span>✓</span> <span>{service.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section – updated title */}
      <section style={{
        padding: '128px 0',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.9) 100%)',
        position: 'relative',
        backgroundImage: 'url("https://images.pexels.com/photos/19730393/pexels-photo-19730393.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat:'no-repeat',
      }}>
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }} />

        <div style={{ textAlign: 'center', marginBottom: '64px', padding: '0 40px', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '4rem', fontWeight: '900', color: '#ffffff', marginBottom: '20px', letterSpacing: '-2px' }}>
            Discover East Africa's <span style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Beauty</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}>
            From mountain gorillas to stunning lakes and waterfalls — experience the heart of Africa
          </p>
        </div>

        {/* Gallery content unchanged */}
        {/* ... your existing gallery scrolling rows ... */}
      </section>

      {/* CTA Section – updated text */}
      <section style={{ padding: '144px 40px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0a0a0a 0%, #0d3d1f 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '4.5rem', fontWeight: '900', color: '#ffffff', marginBottom: '24px', lineHeight: '1.2', letterSpacing: '-2px' }}>
            Ready to Explore<br/>
            <span style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>East Africa?</span>
          </h2>

          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '48px', lineHeight: '1.75' }}>
            Let us craft your perfect East African adventure — from gorilla trekking to cultural immersions and epic safaris.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <button style={{ padding: '24px 48px', fontSize: '1.125rem', fontWeight: '800', borderRadius: '50px', border: 'none', background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color: '#000000', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 15px 40px rgba(34,197,94,0.4)' }}
                onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 20px 50px rgba(34,197,94,0.5)'; }}
                onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 15px 40px rgba(34,197,94,0.4)'; }}>
                Start Planning Today
              </button>
            </Link>

            <Link href="/contact">
              <button style={{ padding: '24px 48px', fontSize: '1.125rem', fontWeight: '800', borderRadius: '50px', border: '2px solid #22c55e', background: 'transparent', color: '#22c55e', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.target.style.background = 'rgba(34,197,94,0.1)'; e.target.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)'; }}>
                Contact Us
              </button>
            </Link>
          </div>

          {/* Contact info – removed icons, kept text */}
          <div style={{ marginTop: '64px', padding: '32px', borderRadius: '50px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '32px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(34,197,94,0.2)' }}>
            {[
              { label: 'info@sseruz.com' },
              { label: '+256 775 769883' },
              { label: 'Kampala, Uganda' }
            ].map((contact, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>{contact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;