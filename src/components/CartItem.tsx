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
  const clearSvg = "../assets/images/icon-remove-item.svg";

  return (
    <div className="cart-item">
      <div className="cart-order">
        <p className="name">{name}</p>
        <div className="cart-details">
          <span className="order-count">{orderCount}x</span>
          <span className="price">@ ${price.toFixed(2)}</span>
          <span className="total">${(orderCount * price).toFixed(2)}</span>
        </div>
      </div>
      <button className="clear-cart-order" onClick={() => updateOrderCount(0)}>
        <img className="order-item-icon clear" src={clearSvg} alt="x"></img>
      </button>
    </div>
  );
}
