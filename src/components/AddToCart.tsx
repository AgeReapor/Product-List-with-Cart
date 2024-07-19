type AddToCartProps = {
  orderCount: number;
};

export default function AddToCart({ orderCount }: AddToCartProps) {
  return (
    <>
      <button className="add-to-cart">Add to Cart</button>
      <button className="order-increment">+</button>
      <span className="order-count">{orderCount}</span>
      <button className="order-decrement">-</button>
    </>
  );
}
