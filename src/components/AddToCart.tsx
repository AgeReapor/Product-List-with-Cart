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
  return (
    <>
      <button className="add-to-cart" onClick={onAddToCart}>
        Add to Cart
      </button>
      <button className="order-increment" onClick={incrementOrderCount}>
        +
      </button>
      <span className="order-count">{orderCount}</span>
      <button className="order-decrement" onClick={decrementOrderCount}>
        -
      </button>
      <button className="clear-order" onClick={clearOrderCount}>
        Clear
      </button>
    </>
  );
}
