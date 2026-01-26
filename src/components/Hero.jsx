import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo! Saya tertarik dengan produk Nours Eyewear. Bisakah Anda memberikan informasi lebih lanjut? 👀');
    window.open(`https://wa.me/685780801122?text=${message}`, '_blank');
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {/* ATTENTION */}
            <h1 className="hero-title">
              <span className="highlight">Melihat Dunia</span> dengan Gaya
            </h1>
            
            {/* INTEREST & DESIRE */}
            <p className="hero-subtitle">
              Nours Eyewear menghadirkan koleksi kacamata yang tidak hanya melindungi mata, 
              tapi juga mengekspresikan kepribadian unikmu. Desain stylish, kualitas premium, 
              dan harga yang terjangkau untuk generasi muda yang berani tampil beda.
            </p>

            {/* ACTION */}
            <div className="hero-buttons">
              <button 
                className="btn-primary btn-lg"
                onClick={handleWhatsApp}
              >
                <i className="fas fa-shopping-bag"></i> Lihat Koleksi Kami
              </button>
              <button className="btn-outlined btn-lg">
                <i className="fas fa-play-circle"></i> Pelajari Lebih Lanjut
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h3>1000+</h3>
                <p>Pelanggan Puas</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Koleksi Unik</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Garansi Kepuasan</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img 
              src="/kolase1.png" 
              alt="Koleksi Kacamata Premium" 
              className="hero-image-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
