import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getEyewears } from '../services/contentful';
import '../styles/productlist.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getEyewears();
        setProducts(data);
      } catch (err) {
        setError('Gagal memuat produk');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyClick = (productName) => {
    const message = encodeURIComponent(`Saya tertarik membeli: ${productName}. Berapa harganya dan ketersediannya? 👓`);
    window.open(`https://wa.me/685718572857?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <section className="products">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Memuat koleksi terbaru...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products">
        <div className="container">
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="products">
      <div className="container">
        <div className="products-header">
          <h2>Koleksi Terbaru Kami</h2>
          <p>Pilih dari rangkaian kacamata stylish yang dirancang untuk mengekspresikan kepribadianmu</p>
        </div>

        {products.length === 0 ? (
          <div className="no-products">
            <p>Belum ada produk tersedia. Kembali lagi nanti ya! 👀</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  {product.image ? (
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  ) : (
                    <div className="product-placeholder">
                      <i className="fas fa-glasses"></i>
                    </div>
                  )}
                  {product.color && (
                    <div className="product-badge">
                      <i className="fas fa-circle" style={{color: product.color}}></i>
                      {product.color}
                    </div>
                  )}
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  
                  {product.style && (
                    <p className="product-style">
                      <i className="fas fa-tag"></i> {product.style}
                    </p>
                  )}

                  <div className="product-description">
                    {product.richDescription ? (
                      documentToReactComponents(product.richDescription)
                    ) : (
                      <p>{product.description}</p>
                    )}
                  </div>

                  <div className="product-footer">
                    <div className="product-price">
                      {product.price && (
                        <p className="price">Rp {product.price.toLocaleString('id-ID')}</p>
                      )}
                    </div>
                    <button 
                      className="btn-buy"
                      onClick={() => handleBuyClick(product.name)}
                    >
                      <i className="fas fa-shopping-cart"></i> Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
