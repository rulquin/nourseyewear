import React from 'react';
import '../styles/socialproof.css';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Ria Putri',
      title: 'Content Creator',
      image: '👩‍🎨',
      text: 'Nours Eyewear tidak hanya stylish, tapi juga sangat nyaman dipakai sepanjang hari. Sekarang koleksi kacamata saya jadi lebih lengkap!',
      rating: 5
    },
    {
      name: 'Dani Wijaya',
      title: 'Entrepreneur',
      image: '👨‍💼',
      text: 'Kualitasnya premium dengan harga yang terjangkau. Ini adalah pilihan terbaik untuk fashion statement saya di kantor dan acara sosial.',
      rating: 5
    },
    {
      name: 'Sinta Sarina',
      title: 'Photography Student',
      image: '📸',
      text: 'Desainnya keren dan variasinya banyak. Saya sudah beli 3 warna berbeda karena benar-benar puas dengan produk Nours!',
      rating: 5
    },
    {
      name: 'Bayu Hertanto',
      title: 'Fashion Enthusiast',
      image: '👕',
      text: 'Pelayanan customer service-nya sangat responsif dan helpful. Rekomendasi yang pas terbukti berhasil upgrade style saya.',
      rating: 5
    }
  ];

  return (
    <section className="socialproof">
      <div className="container">
        <div className="socialproof-header">
          <h2>Dipercaya oleh Ribuan Pelanggan Muda</h2>
          <p>Cerita dari mereka yang sudah merasakan transformasi gaya dengan Nours Eyewear</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.image}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="socialproof-stats">
          <div className="stat-box">
            <h3>1,250+</h3>
            <p>Pelanggan Puas</p>
          </div>
          <div className="stat-box">
            <h3>4.9⭐</h3>
            <p>Rating Rata-rata</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>Produk Pilihan</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Garansi Uang Kembali</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
