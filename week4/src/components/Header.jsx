import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {
  const totalQty = useSelector((state) => state.cart.totalQty);

  return (
    <div className="header-container">
      <h2 className="header-title">
        🛒 Cart Items: 
        <span className="cart-badge">
          {totalQty}
        </span>
      </h2>
    </div>
  );
}
