import React from 'react';
import '../styles/why.css';

const Why = () => {
  const reasons = [
    {
      icon: 'fa-eye',
      title: 'Perlindungan Maksimal',
      description: 'Lensa berkualitas premium yang melindungi mata dari radiasi UV dan kelelahan layar.'
    },
    {
      icon: 'fa-palette',
      title: 'Desain Trendy',
      description: 'Koleksi eksklusif yang dirancang oleh desainer berpengalaman mengikuti tren global.'
    },
    {
      icon: 'fa-leaf',
      title: 'Material Ramah Lingkungan',
      description: 'Menggunakan bahan berkelanjutan yang ramah lingkungan tanpa mengorbankan kualitas.'
    },
    {
      icon: 'fa-heart',
      title: 'Nyaman Dipakai',
      description: 'Desain ergonomis yang ringan dan nyaman dipakai sepanjang hari tanpa rasa tekanan.'
    },
    {
      icon: 'fa-tag',
      title: 'Harga Terjangkau',
      description: 'Kualitas premium dengan harga yang bersahabat untuk semua kalangan muda.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Garansi Resmi',
      description: 'Garansi 2 tahun dan layanan purna jual terbaik untuk kepuasan pelanggan.'
    }
  ];

  return (
    <section className="why">
      <div className="container">
        <div className="why-header">
          <h2>Mengapa Memilih Nours Eyewear?</h2>
          <p>Kami bukan hanya menjual kacamata, tapi memberikan pengalaman gaya hidup yang sempurna</p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">
                <i className={`fas ${reason.icon}`}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
