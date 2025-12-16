import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addItem, fetchProducts } from "../redux/cartSlice";
import "./Product.css";

export default function Product() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.cart);

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div className="product-loading">Loading products... ⏳</div>;
  }

  if (error) {
    return <div className="product-error">Error: {error}</div>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
          </div>
          <button onClick={() => dispatch(addItem({ id: product.id, name: product.title, price: product.price }))}>
            ➕ Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
