import { useSelector, useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../redux/cartSlice";
import "./Cart.css";

export default function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {items.length === 0 ? (
        <p className="cart-empty">
          Your cart is empty. Add some items!
        </p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.cartId} className="cart-item">
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <div className="cart-item-quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => dispatch(decrementQuantity(item.cartId))}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => dispatch(incrementQuantity(item.cartId))}
                  >
                    +
                  </button>
                </div>
                <span className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <button 
                className="remove-btn"
                onClick={() => dispatch(removeItem(item.cartId))}
              >
                🗑️ Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
