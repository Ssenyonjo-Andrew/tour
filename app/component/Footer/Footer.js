import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ],
    services: [
      { name: 'Guided Tours', path: '/service' },
      { name: 'Adventure Trips', path: '/service' },
      { name: 'Cultural Experiences', path: '/service' },
      { name: 'Custom Packages', path: '/service' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Booking Terms', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SSERUZ TOURS AND TRAVEL</h3>
            <div className="footer-motto">...Every mile is a smile</div>
            <p>Your gateway to amazing adventures and unforgettable experiences around the world. We create meaningful journeys that respect destinations and uplift communities.</p>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <div className="newsletter-signup">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>

          <div className="footer-legal">
            <p>&copy; {currentYear}. All rights reserved.</p>
            <div className="legal-links">
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
