import "./MenuItem.scss";
import imageImport from "../utils/imageImport";
import type { JSONItem } from "../utils/types";
import AddToCart from "./AddToCart";

type MenuItemProps = {
  orderTracking: Record<string, number>;
  menuItem: JSONItem;
  updateOrderCount: (count: number) => void;
};

export default function MenuItem({
  orderTracking,
  menuItem,
  updateOrderCount,
}: MenuItemProps) {
  const { image, name, category, price } = menuItem;
  const { mobile, tablet, desktop } = image;

  function getCurrentOrderCount() {
    return orderTracking[menuItem.name];
  }

  function onAddToCart() {
    updateOrderCount(1);
  }

  function incrementOrderCount() {
    const currentOrderCount = getCurrentOrderCount();
    if (currentOrderCount) updateOrderCount(getCurrentOrderCount() + 1);
    else onAddToCart();
  }

  function decrementOrderCount() {
    var newOrderCount = getCurrentOrderCount() - 1;
    if (newOrderCount < 0) newOrderCount = 0;
    updateOrderCount(newOrderCount);
  }

  function clearOrderCount() {
    updateOrderCount(0);
  }

  return (
    <div className="menu-item">
      <div className="menu-image">
        <img className="desktop" src={imageImport(desktop)} alt={name} />
        <img className="tablet" src={imageImport(tablet)} alt={name} />
        <img className="mobile" src={imageImport(mobile)} alt={name} />

        <AddToCart
          orderCount={getCurrentOrderCount()}
          onAddToCart={onAddToCart}
          incrementOrderCount={incrementOrderCount}
          decrementOrderCount={decrementOrderCount}
          clearOrderCount={clearOrderCount}
        />
      </div>

      <div className="menu-details">
        <span className="category">{category}</span>
        <h3 className="name">{name}</h3>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}

// TODO: Hook up menu item to live values using orderCount
