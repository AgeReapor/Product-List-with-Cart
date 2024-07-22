type CartItemProps = {
  name: string;
  orderCount: number;
  price: number;
  updateOrderCount: (count: number) => void;
};

export default function CartItem({
  name,
  orderCount,
  price,
  updateOrderCount,
}: CartItemProps) {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <div className="cart-details">
        <span className="order-count">{orderCount}x</span>
        <span className="price">${price.toFixed(2)}</span>
        <span className="total">${(orderCount * price).toFixed(2)}</span>
        <button className="clear-order" onClick={() => updateOrderCount(0)}>
          x
        </button>
      </div>
    </div>
  );
}
