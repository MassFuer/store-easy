import "./Home.css";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import { getProducts } from "../../services/api"; // Example of importing a service function

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example: Fetch products on dashboard load
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        console.log("Products:", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Discover a wide range of products at unbeatable prices!</p>
      <div className="featured-products">
        <h2>Featured Products</h2>
        {/* Product cards will be rendered here */}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
