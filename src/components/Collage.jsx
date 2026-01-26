import React from 'react';
import '../styles/collage.css';

const Collage = () => {
  const collageImages = [
    {
      id: 1,
      src: '/collage1.jpg',
      title: 'Premium Collection'
    },
    {
      id: 2,
      src: '/collage2.jpg',
      title: 'Premium Collection'
    },
    {
      id: 3,
      src: '/collage3.jpg',
      title: 'Premium Collection'
    },
    {
      id: 4,
      src: '/collage4.jpg',
      title: 'Premium Collection'
    },
    {
      id: 5,
      src: '/collage5.jpg',
      title: 'Premium Collection'
    },
    {
      id: 6,
      src: '/collage6.jpg',
      title: 'Premium Collection'
    }
  ];

  return (
    <section className="collage-section">
      <div className="container">
        <div className="collage-header">
          <h2>Koleksi Premium Kami</h2>
          <p>Lihat keindahan dan inovasi dalam setiap frame</p>
        </div>

        <div className="collage-grid">
          {collageImages.map((image) => (
            <div key={image.id} className="collage-item">
              <img 
                src={image.src}
                alt={image.title}
                className="collage-image"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"%3E%3Crect fill="%23E0E7FF" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%236366F1" text-anchor="middle" dominant-baseline="middle" font-family="Arial"%3EPremium Image%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="collage-overlay">
                <div className="overlay-content">
                  <i className="fas fa-eye"></i>
                  <span>{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collage;
