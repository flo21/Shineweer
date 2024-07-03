import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './DisplayCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function DisplayCard() {
  const [products, setProducts] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3200/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    // Initialize likeCounts from localStorage
    const storedLikeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
    setLikeCounts(storedLikeCounts);

    fetchProducts();
  }, []);

  const handleLikeClick = (name) => {
    const updatedLikeCounts = { ...likeCounts, [name]: (likeCounts[name] || 0) + 1 };
    localStorage.setItem('likeCounts', JSON.stringify(updatedLikeCounts));
    setLikeCounts(updatedLikeCounts);
  };

  return (
    <div className="card_Container">
      {products.map((product) => (
        <div key={product._id} className="global_Card">
          <Link to={`/product/${product._id}`}>
            <img
              className="card_image"
              src={`data:${product.images[0].contentType};base64,${btoa(
                new Uint8Array(product.images[0].data.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
                )
              )}`}
              alt={product.name}
            />
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClick(product.name);
            }}
            className="like-button"
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default DisplayCard;
