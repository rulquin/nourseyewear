import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo Nours Eyewear! 👋');
    window.open(`https://wa.me/685718572857?text=${message}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Tentang Kami</h4>
            <p>
              Nours Eyewear adalah brand kacamata modern yang menghadirkan gaya dan fungsi 
              dalam setiap produk. Kami berkomitmen memberikan pengalaman terbaik untuk pelanggan kami.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Layanan</h4>
            <ul className="footer-links">
              <li><a href="#products">Koleksi Produk</a></li>
              <li><a href="#why">Mengapa Kami</a></li>
              <li><a href="#testimonials">Testimoni</a></li>
              <li><button onClick={handleWhatsApp} className="link-btn">Hubungi Kami</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informasi</h4>
            <ul className="footer-links">
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
              <li><a href="#">Kebijakan Pengembalian</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp Chat</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2026 Nours Eyewear by Nurul Muttaqin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
