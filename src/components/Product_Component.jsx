import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Product_Component.css';
import Modal_Product from './Modal_Product';
import Header from './Header';

function Product_Component() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the backend
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3200/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Product_Container">
        <Header />
        <div className="Product_Content">
        <img
        src={`data:${product.images[0].contentType};base64,${btoa(
          new Uint8Array(product.images[0].data.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        )}`}
        alt={product.name}
        className="image_product"
      />
      <div className="information_product">
        <div className="creation_product">
          <h1>{product.name}</h1>
          <p>By </p>
        </div>
        <div className="price_product">
          <p>{product.price} €</p>
        </div>
      </div>
      <div className="creator"></div>
      <div className="description_product">
        <p>{product.description}</p>
      </div>
      </div>
      <Modal_Product />
    </div>
  );
}

export default Product_Component;
