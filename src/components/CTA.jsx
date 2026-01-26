import React from 'react';
import '../styles/cta.css';

const CTA = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo Nours Eyewear! Saya ingin berkonsultasi tentang koleksi kacamata Anda. Bisa dibantu? 👋');
    window.open(`https://wa.me/685780801122?text=${message}`, '_blank');
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Temukan Gaya Matamu Hari Ini</h2>
            <p>
              Jangan biarkan kesempatan terlewat untuk tampil percaya diri dengan koleksi 
              kacamata premium kami. Hubungi tim kami sekarang untuk konsultasi gratis!
            </p>
            
            <div className="cta-benefits">
              <div className="benefit">
                <i className="fas fa-check-circle"></i>
                <span>Promo Eksklusif</span>
              </div>
              <div className="benefit">
                <i className="fas fa-check-circle"></i>
                <span>Styling Virtual</span>
              </div>
              <div className="benefit">
                <i className="fas fa-check-circle"></i>
                <span>Garansi Produk Premium</span>
              </div>
            </div>
          </div>

          <div className="cta-button-wrapper">
            <button 
              className="cta-button"
              onClick={handleWhatsApp}
            >
              <div className="button-content">
                <i className="fab fa-whatsapp"></i>
                <div className="button-text">
                  <span className="button-main">Hubungi via WhatsApp</span>
                </div>
              </div>
            </button>
            <p className="cta-response-time">
              <i className="fas fa-sparkles"></i> Dibuat untuk generasi muda yang stylish
            </p>
          </div>
        </div>

        <div className="cta-background">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
