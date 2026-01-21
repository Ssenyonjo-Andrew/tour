import React from 'react';

const GalleryPage = () => {
  const galleryImages = [
    // WhatsApp Images (January 12, 2026)
    { id: 1, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.10 PM.jpeg", alt: "East African adventure" },
    { id: 2, src: "/pics/mountain.jpg", alt: "Scenic landscape" },
    { id: 3, src: "/pics/IMG-20260119-WA0077.jpg", alt: "Cultural experience" },
    { id: 4, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.13 PM.jpeg", alt: "Wildlife safari" },
    { id: 5, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.14 PM.jpeg", alt: "Mountain adventure" },
    { id: 6, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.15 PM.jpeg", alt: "Beach paradise" },
    { id: 7, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.16 PM.jpeg", alt: "Safari experience" },
    { id: 8, src: "/pics/IMG-20260119-WA0035.jpg", alt: "Cultural festival" },
    { id: 9, src: "/pics/WhatsApp Image 2026-01-12 at 10.17.46 PM.jpeg", alt: "Guided tour experience" },
    { id: 10, src: "/pics/WhatsApp Image 2026-01-12 at 10.17.47 PM.jpeg", alt: "Expert guide" },
    { id: 11, src: "/pics/WhatsApp Image 2026-01-12 at 10.17.51 PM.jpeg", alt: "Cultural immersion" },
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
    { id: 25, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.23 PM.jpeg", alt: "Mountain expedition" },
    { id: 26, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.24 PM.jpeg", alt: "Safari experience" },
    { id: 27, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.00 PM.jpeg", alt: "Nature photography" },
    { id: 28, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.02 PM.jpeg", alt: "Cultural heritage site" },
    { id: 29, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.05 PM.jpeg", alt: "Adventure sport" },
    { id: 30, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.08 PM.jpeg", alt: "Wildlife photography" },
    { id: 31, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.09 PM.jpeg", alt: "Traditional craft" },
    { id: 32, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.10 PM.jpeg", alt: "Mountain trekking" },
    { id: 33, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.11 PM.jpeg", alt: "Safari tour" },
    { id: 34, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.12 PM.jpeg", alt: "Cultural tour" },
    { id: 35, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.14 PM.jpeg", alt: "Nature walk" },
    { id: 36, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.15 PM.jpeg", alt: "Adventure guide" },
    { id: 37, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.16 PM.jpeg", alt: "Wildlife safari" },
    { id: 38, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.17 PM.jpeg", alt: "Cultural experience" },
    { id: 39, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.18 PM.jpeg", alt: "Mountain adventure" },
    { id: 40, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.19 PM.jpeg", alt: "Safari adventure" },
    { id: 41, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.20 PM.jpeg", alt: "Nature exploration" },
    { id: 42, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.12 PM (1).jpeg", alt: "Heritage site" },
    { id: 43, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.13 PM (1).jpeg", alt: "Animal encounter" },
    { id: 44, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.14 PM (1).jpeg", alt: "Peak climbing" },
    { id: 45, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.15 PM (1).jpeg", alt: "Beach destination" },
    { id: 46, src: "/pics/WhatsApp Image 2026-01-12 at 10.13.16 PM (1).jpeg", alt: "Safari journey" },
    { id: 47, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.02 PM (1).jpeg", alt: "Cultural celebration" },
    { id: 48, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.03 PM (1).jpeg", alt: "Wildlife sanctuary" },
    { id: 49, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.08 PM (1).jpeg", alt: "Safari landscape" },
    { id: 50, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.11 PM (1).jpeg", alt: "Nature trail" },
    { id: 51, src: "/pics/WhatsApp Image 2026-01-12 at 10.18.21 PM (1).jpeg", alt: "Cultural performance" },
    { id: 52, src: "/pics/IMG-20260119-WA0085.jpg", alt: "Mountain expedition" },
    { id: 53, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.02 PM (1).jpeg", alt: "Cultural heritage site" },
    { id: 54, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.05 PM (1).jpeg", alt: "Adventure sport" },
    { id: 55, src: "/pics/IMG-20260119-WA0069.jpg", alt: "Traditional craft" },
    { id: 56, src: "/pics/IMG-20260112-WA0157.jpg", alt: "Mountain trekking" },
    { id: 57, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.12 PM (1).jpeg", alt: "Cultural tour" },
    { id: 58, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.12 PM (2).jpeg", alt: "Cultural tour" },
    { id: 59, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.16 PM (1).jpeg", alt: "Wildlife safari" },
    { id: 60, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.17 PM (2).jpeg", alt: "Cultural experience" },
    { id: 61, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.18 PM (1).jpeg", alt: "Mountain adventure" },
    { id: 62, src: "/pics/WhatsApp Image 2026-01-12 at 10.21.19 PM (1).jpeg", alt: "Safari adventure" },

    // IMG Files (January 12, 2026)
    { id: 63, src: "/pics/IMG-20260112-WA0116.jpg", alt: "East African landscape" },
    { id: 64, src: "/pics/IMG-20260112-WA0117.jpg", alt: "Cultural experience" },
    { id: 65, src: "/pics/IMG-20260112-WA0118.jpg", alt: "Wildlife encounter" },
    { id: 66, src: "/pics/IMG-20260112-WA0119.jpg", alt: "Adventure activity" },
    { id: 67, src: "/pics/IMG-20260112-WA0120.jpg", alt: "Nature scenery" },
    { id: 68, src: "/pics/IMG-20260112-WA0121.jpg", alt: "Safari experience" },
    { id: 69, src: "/pics/IMG-20260112-WA0122.jpg", alt: "Mountain view" },
    { id: 70, src: "/pics/IMG-20260112-WA0124.jpg", alt: "Cultural site" },
    { id: 71, src: "/pics/IMG-20260112-WA0125.jpg", alt: "Wildlife observation" },
    { id: 72, src: "/pics/IMG-20260112-WA0127.jpg", alt: "Adventure trail" },
    { id: 73, src: "/pics/IMG-20260112-WA0128.jpg", alt: "Nature walk" },
    { id: 74, src: "/pics/IMG-20260112-WA0129.jpg", alt: "Safari landscape" },
    { id: 75, src: "/pics/IMG-20260112-WA0130.jpg", alt: "Cultural celebration" },
    { id: 76, src: "/pics/IMG-20260112-WA0131.jpg", alt: "Mountain expedition" },
    { id: 77, src: "/pics/IMG-20260112-WA0132.jpg", alt: "Traditional ceremony" },
    { id: 78, src: "/pics/IMG-20260112-WA0133.jpg", alt: "Wildlife sanctuary" },
    { id: 79, src: "/pics/IMG-20260112-WA0134.jpg", alt: "Beach paradise" },
    { id: 80, src: "/pics/IMG-20260112-WA0135.jpg", alt: "Forest exploration" },
    { id: 81, src: "/pics/IMG-20260112-WA0136.jpg", alt: "River adventure" },
    { id: 82, src: "/pics/IMG-20260112-WA0137.jpg", alt: "Cultural immersion" },
    { id: 83, src: "/pics/IMG-20260112-WA0138.jpg", alt: "Safari tour" },
    { id: 84, src: "/pics/IMG-20260112-WA0139.jpg", alt: "Mountain climbing" },
    { id: 85, src: "/pics/IMG-20260112-WA0140.jpg", alt: "Nature photography" },
    { id: 86, src: "/pics/IMG-20260112-WA0142.jpg", alt: "Wildlife photography" },
    { id: 87, src: "/pics/IMG-20260112-WA0143.jpg", alt: "Adventure guide" },
    { id: 88, src: "/pics/team.jpg", alt: "Traditional craft" },
    { id: 89, src: "/pics/IMG-20260112-WA0147.jpg", alt: "Eco-friendly travel" },
    { id: 90, src: "/pics/IMG-20260112-WA0148.jpg", alt: "Sustainable tourism" },
    { id: 91, src: "/pics/IMG-20260112-WA0149.jpg", alt: "Community tourism" },
    { id: 92, src: "/pics/IMG-20260112-WA0150.jpg", alt: "Local culture" },
    { id: 93, src: "/pics/IMG-20260112-WA0151.jpg", alt: "Heritage site" },
    { id: 94, src: "/pics/IMG-20260112-WA0152.jpg", alt: "Historical monument" },
    { id: 95, src: "/pics/IMG-20260112-WA0153.jpg", alt: "Archaeological site" },
    { id: 96, src: "/pics/IMG-20260112-WA0154.jpg", alt: "Ancient ruins" },
    { id: 97, src: "/pics/IMG-20260112-WA0156.jpg", alt: "Traditional architecture" },
    { id: 98, src: "/pics/IMG-20260112-WA0157.jpg", alt: "Colonial history" },

    // IMG Files (January 19, 2026)
    { id: 99, src: "/pics/IMG-20260119-WA0016.jpg", alt: "East African wildlife" },
    { id: 100, src: "/pics/IMG-20260119-WA0017.jpg", alt: "Safari adventure" },
    { id: 101, src: "/pics/IMG-20260119-WA0018.jpg", alt: "Cultural festival" },
    { id: 102, src: "/pics/IMG-20260119-WA0019.jpg", alt: "Mountain trekking" },
    { id: 103, src: "/pics/IMG-20260119-WA0020.jpg", alt: "Nature exploration" },
    { id: 104, src: "/pics/IMG-20260119-WA0021.jpg", alt: "Wildlife safari" },
    { id: 105, src: "/pics/IMG-20260119-WA0022.jpg", alt: "Beach vacation" },
    { id: 106, src: "/pics/IMG-20260119-WA0023.jpg", alt: "Forest walk" },
    { id: 107, src: "/pics/IMG-20260119-WA0024.jpg", alt: "River cruise" },
    { id: 108, src: "/pics/IMG-20260119-WA0025.jpg", alt: "Cultural performance" },
    { id: 109, src: "/pics/IMG-20260119-WA0026.jpg", alt: "Mountain view" },
    { id: 110, src: "/pics/IMG-20260119-WA0027.jpg", alt: "Sunset safari" },
    { id: 111, src: "/pics/IMG-20260119-WA0028.jpg", alt: "Traditional dance" },
    { id: 112, src: "/pics/IMG-20260119-WA0029.jpg", alt: "Wildlife photography" },
    { id: 113, src: "/pics/IMG-20260119-WA0030.jpg", alt: "Adventure sports" },
    { id: 114, src: "/pics/IMG-20260119-WA0031.jpg", alt: "Nature photography" },
    { id: 115, src: "/pics/IMG-20260119-WA0032.jpg", alt: "Cultural exchange" },
    { id: 116, src: "/pics/IMG-20260119-WA0033.jpg", alt: "Mountain expedition" },
    { id: 117, src: "/pics/IMG-20260119-WA0034.jpg", alt: "Safari experience" },
    { id: 118, src: "/pics/IMG-20260119-WA0035.jpg", alt: "Beach relaxation" },
    { id: 119, src: "/pics/IMG-20260119-WA0036.jpg", alt: "Forest exploration" },
    { id: 120, src: "/pics/IMG-20260119-WA0037.jpg", alt: "River adventure" },
    { id: 121, src: "/pics/IMG-20260119-WA0039.jpg", alt: "Cultural immersion" },
    { id: 122, src: "/pics/IMG-20260119-WA0041.jpg", alt: "Safari tour" },
    { id: 123, src: "/pics/IMG-20260119-WA0042.jpg", alt: "Mountain climbing" },
    { id: 124, src: "/pics/IMG-20260119-WA0043.jpg", alt: "Nature discovery" },
    { id: 125, src: "/pics/IMG-20260119-WA0044.jpg", alt: "Wildlife observation" },
    { id: 126, src: "/pics/IMG-20260119-WA0045.jpg", alt: "Cultural celebration" },
    { id: 127, src: "/pics/IMG-20260119-WA0046.jpg", alt: "Adventure activity" },
    { id: 128, src: "/pics/IMG-20260119-WA0047.jpg", alt: "Traditional ceremony" },
    { id: 129, src: "/pics/IMG-20260119-WA0048.jpg", alt: "Safari landscape" },
    { id: 130, src: "/pics/IMG-20260119-WA0049.jpg", alt: "Mountain trail" },
    { id: 132, src: "/pics/IMG-20260119-WA0050.jpg", alt: "Nature walk" },
    { id: 133, src: "/pics/IMG-20260119-WA0051.jpg", alt: "Wildlife sanctuary" },
    { id: 134, src: "/pics/IMG-20260119-WA0052.jpg", alt: "Cultural site" },
    { id: 135, src: "/pics/IMG-20260119-WA0068.jpg", alt: "Adventure destination" },
    { id: 136, src: "/pics/IMG-20260119-WA0069.jpg", alt: "Eco-tourism" },
    { id: 137, src: "/pics/IMG-20260119-WA0070.jpg", alt: "Sustainable travel" },
    { id: 138, src: "/pics/IMG-20260119-WA0072.jpg", alt: "Community tourism" },
    { id: 139, src: "/pics/IMG-20260119-WA0073.jpg", alt: "Local experience" },
    { id: 140, src: "/pics/IMG-20260119-WA0074.jpg", alt: "Heritage tourism" },
    { id: 141, src: "/pics/IMG-20260119-WA0075.jpg", alt: "Historical site" },
    { id: 142, src: "/pics/IMG-20260119-WA0076.jpg", alt: "Archaeological discovery" },
    { id: 143, src: "/pics/IMG-20260119-WA0077.jpg", alt: "Ancient monument" },
    { id: 144, src: "/pics/IMG-20260119-WA0078.jpg", alt: "Traditional architecture" },
    { id: 145, src: "/pics/IMG-20260119-WA0079.jpg", alt: "Colonial building" },
    { id: 146, src: "/pics/IMG-20260119-WA0080.jpg", alt: "Modern development" },
    { id: 147, src: "/pics/IMG-20260119-WA0082.jpg", alt: "Urban landscape" },
    { id: 148, src: "/pics/IMG-20260119-WA0083.jpg", alt: "City exploration" },
    { id: 149, src: "/pics/IMG-20260119-WA0084.jpg", alt: "Metropolitan area" },
    { id: 150, src: "/pics/IMG-20260119-WA0085.jpg", alt: "Urban adventure" },
    { id: 151, src: "/pics/IMG-20260119-WA0088.jpg", alt: "City safari" },
    { id: 152, src: "/pics/IMG-20260119-WA0090.jpg", alt: "Urban wildlife" },
    { id: 153, src: "/pics/IMG-20260119-WA0094.jpg", alt: "Modern exploration" },
    { id: 154, src: "/pics/IMG-20260119-WA0096.jpg", alt: "Current experiences" },
    { id: 155, src: "/pics/IMG-20260119-WA0097.jpg", alt: "Recent discoveries" },
    { id: 156, src: "/pics/IMG-20260119-WA0098.jpg", alt: "Latest adventures" },
    { id: 157, src: "/pics/IMG-20260119-WA0099.jpg", alt: "New experiences" },
    { id: 158, src: "/pics/IMG-20260119-WA0100.jpg", alt: "Fresh discoveries" },
    { id: 159, src: "/pics/IMG-20260119-WA0101.jpg", alt: "Emerging destinations" },
    { id: 160, src: "/pics/IMG-20260119-WA0102.jpg", alt: "Novel experiences" },
    { id: 161, src: "/pics/IMG-20260119-WA0103.jpg", alt: "Unique adventures" },
    { id: 162, src: "/pics/IMG-20260119-WA0104.jpg", alt: "Special journeys" },
    { id: 163, src: "/pics/IMG-20260119-WA0105.jpg", alt: "Exclusive experiences" },
    { id: 164, src: "/pics/IMG-20260119-WA0106.jpg", alt: "Premium travel" },
    { id: 165, src: "/pics/IMG-20260119-WA0107.jpg", alt: "Luxury adventures" },
    { id: 166, src: "/pics/IMG-20260119-WA0108.jpg", alt: "Elite experiences" },
    { id: 167, src: "/pics/IMG-20260119-WA0109.jpg", alt: "Superior journeys" },
    { id: 168, src: "/pics/IMG-20260119-WA0110.jpg", alt: "Exceptional travel" },
    { id: 169, src: "/pics/IMG-20260119-WA0111.jpg", alt: "Outstanding adventures" },
    { id: 170, src: "/pics/IMG-20260119-WA0112.jpg", alt: "Remarkable experiences" },
    { id: 171, src: "/pics/IMG-20260119-WA0113.jpg", alt: "Memorable journeys" },
    { id: 172, src: "/pics/IMG-20260119-WA0114.jpg", alt: "Unforgettable travel" },

    // Additional Images
    { id: 173, src: "/pics/ad1.jpeg", alt: "Adventure destination" },
    { id: 174, src: "/pics/ad2.jpeg", alt: "Adventure experience" },
    { id: 175, src: "/pics/africa.jpeg", alt: "African landscape" },
    { id: 176, src: "/pics/aruu.jpg", alt: "Aruu Falls waterfall" },
    { id: 177, src: "/pics/ceo.jpg", alt: "SSERUZ leadership" },
    { id: 178, src: "/pics/cul1.jpeg", alt: "Cultural experience" },
    { id: 179, src: "/pics/des.jpg", alt: "Destination view" },
    { id: 180, src: "/pics/home.jpg", alt: "Home landscape" },
    { id: 181, src: "/pics/home1.jpg", alt: "Home scenery" },
    { id: 182, src: "/pics/home2.jpg", alt: "Home environment" },
    { id: 183, src: "/pics/logo.jpg.jpg", alt: "SSERUZ logo" },
    { id: 184, src: "/pics/mountain.jpg", alt: "Mountain landscape" },
    { id: 185, src: "/pics/service.jpg", alt: "Service experience" },
    { id: 186, src: "/pics/service1.jpg", alt: "Service activity" },
    { id: 187, src: "/pics/service2.jpg", alt: "Service engagement" },
    { id: 188, src: "/pics/service3.jpg", alt: "Service interaction" },
    { id: 189, src: "/pics/team.jpg", alt: "Team experience" },
    { id: 190, src: "/pics/tp.jpg", alt: "Team portrait" },
    { id: 191, src: "/pics/water.jpeg", alt: "Water adventure" },
    { id: 192, src: "/pics/water1.jpg", alt: "Water experience" }
  ];

  const imagesPerRow = Math.ceil(galleryImages.length / 4);
  const row1 = galleryImages.slice(0, imagesPerRow);
  const row2 = galleryImages.slice(imagesPerRow, imagesPerRow * 2);
  const row3 = galleryImages.slice(imagesPerRow * 2, imagesPerRow * 3);
  const row4 = galleryImages.slice(imagesPerRow * 3);

  const ImageCard = ({ image, index }) => (
    <div
      key={`${image.id}-${index}`}
      style={{
        position: 'relative',
        minWidth: 'clamp(280px, 25vw, 380px)',
        height: '260px',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '2px solid rgba(34,197,94,0.2)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        cursor: 'pointer',
        flexShrink: 0,
        background: '#0a0a0a'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)';
        e.currentTarget.style.borderColor = '#22c55e';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(34,197,94,0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
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
          objectPosition: 'center top',
          transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)'
        }}
        onMouseEnter={(e) => { e.target.style.transform = 'scale(1.15)'; }}
        onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
        onError={(e) => {
          console.warn(`Failed to load image: ${image.src}`);
          e.target.style.display = 'none';
          // Optionally show a fallback
          e.target.parentElement.innerHTML = `
            <div style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
              color: rgba(255,255,255,0.6);
              font-size: 14px;
              text-align: center;
              padding: 10px;
            ">
              Image unavailable
            </div>
          `;
        }}
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
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
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
            Discover the beauty, culture, and adventure of East Africa through our curated collection of unforgettable moments
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

        {/* Multi-Row Scrolling Gallery */}
        <div style={{
          padding: 'clamp(2rem, 5vh, 3rem) 0 clamp(3rem, 8vh, 5rem)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Row 1 */}
          <div style={{
            marginBottom: 'clamp(1.5rem, 4vh, 2.5rem)',
            overflow: 'hidden'
          }}>
            <div
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 2vw, 2rem)',
                width: '200%',
                animation: 'scrollLeft 80s linear infinite',
                willChange: 'transform'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
              onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
            >
              {[...row1, ...row1].map((img, idx) => <ImageCard key={idx} image={img} index={idx} />)}
            </div>
          </div>

          {/* Row 2 */}
          <div style={{
            marginBottom: 'clamp(1.5rem, 4vh, 2.5rem)',
            overflow: 'hidden'
          }}>
            <div
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 2vw, 2rem)',
                width: '200%',
                animation: 'scrollRight 60s linear infinite',
                willChange: 'transform'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
              onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
            >
              {[...row2, ...row2].map((img, idx) => <ImageCard key={idx} image={img} index={idx} />)}
            </div>
          </div>

          {/* Row 3 */}
          <div style={{
            marginBottom: 'clamp(1.5rem, 4vh, 2.5rem)',
            overflow: 'hidden'
          }}>
            <div
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 2vw, 2rem)',
                width: '200%',
                animation: 'scrollLeft 100s linear infinite',
                willChange: 'transform'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
              onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
            >
              {[...row3, ...row3].map((img, idx) => <ImageCard key={idx} image={img} index={idx} />)}
            </div>
          </div>

          {/* Row 4 */}
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 2vw, 2rem)',
                width: '200%',
                animation: 'scrollRight 90s linear infinite',
                willChange: 'transform'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
              onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
            >
              {[...row4, ...row4].map((img, idx) => <ImageCard key={idx} image={img} index={idx} />)}
            </div>
          </div>
        </div>

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
              lineHeight: '1.6'
            }}>
              Let SSERUZ TOURS AND TRAVEL craft your perfect East African adventure.
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