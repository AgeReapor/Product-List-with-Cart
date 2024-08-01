import { useEffect, useState } from "react";
import "./AddToCart.scss";

type AddToCartProps = {
  orderCount: number;
  onAddToCart: () => void;
  incrementOrderCount: () => void;
  decrementOrderCount: () => void;
  clearOrderCount: () => void;
};

export default function AddToCart({
  orderCount,
  onAddToCart,
  incrementOrderCount,
  decrementOrderCount,
  clearOrderCount,
}: AddToCartProps) {
  const incrementSvg = "../assets/images/icon-increment-quantity.svg";
  const decrementSvg = "../assets/images/icon-decrement-quantity.svg";
  const [toggleOrdered, setoggleOrdered] = useState(false);

  useEffect(() => {
    setoggleOrdered(orderCount > 0);
  }, [orderCount]);

  return (
    <div
      className={"menu-button-container" + (toggleOrdered ? " ordered" : "")}
    >
      <button className="add-to-cart" onClick={onAddToCart}>
        <img
          className="cart-icon"
          src="../assets/images/icon-add-to-cart.svg"
          alt="+"
        ></img>
        <span className="cart-text">Add to Cart</span>
      </button>
      <div className="spinbox" style={toggleOrdered ? {} : { display: "none" }}>
        <button className="order-increment" onClick={incrementOrderCount}>
          <img
            className="spinbox-icon increment"
            src={incrementSvg}
            alt="+"
          ></img>
        </button>
        <span className="order-count">{orderCount}</span>
        <button className="order-decrement" onClick={decrementOrderCount}>
          <img
            className="spinbox-icon decrement"
            src={decrementSvg}
            alt="-"
          ></img>
        </button>
      </div>
      <button className="clear-order" onClick={clearOrderCount}>
        Clear
      </button>
    </div>
  );
}
