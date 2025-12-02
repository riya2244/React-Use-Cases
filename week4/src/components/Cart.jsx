import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import "./Cart.css";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {items.length === 0 ? (
        <p className="cart-empty">
          Your cart is empty. Add some items!
        </p>
      ) : (
        items.map((item) => (
          <div key={item.cartId} className="cart-item">
            <div>
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
            </div>
            <button onClick={() => dispatch(removeItem(item.cartId))}>
              🗑️ Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
