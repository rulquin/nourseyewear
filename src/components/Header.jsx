import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo Nours Eyewear! Saya ingin berkonsultasi tentang produk Anda. 👋');
    window.open(`https://wa.me/685780801122?text=${message}`, '_blank');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img 
            src="/logo-nours.svg" 
            alt="Nours Eyewear Logo" 
            className="logo-image"
          />
          <span>Nours Eyewear</span>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('why')} className="nav-link">
            Tentang Nours
          </button>
          <button onClick={() => scrollToSection('products')} className="nav-link">
            Koleksi
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">
            Testimoni
          </button>
          <button 
            className="nav-cta"
            onClick={handleWhatsApp}
          >
            <i className="fab fa-whatsapp"></i> Hubungi Kami
          </button>
        </nav>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
