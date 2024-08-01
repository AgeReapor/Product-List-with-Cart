import "./MenuItem.scss";
import imageImport from "../utils/imageImport";
import type { JSONItem } from "../utils/types";
import AddToCart from "./AddToCart";
import { useEffect, useState } from "react";

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

  const [toggleOrdered, setToggleOrdered] = useState(false);

  function getCurrentOrderCount() {
    if (!orderTracking[menuItem.name]) return 0;
    return orderTracking[menuItem.name];
  }

  useEffect(() => {
    if (getCurrentOrderCount() > 0) setToggleOrdered(true);
    else setToggleOrdered(false);
  }, [orderTracking]);

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
      <div className={"image-container border-" + toggleOrdered}>
        <img
          className="menu-img desktop"
          src={imageImport(desktop)}
          alt={name}
        />
        <img className="menu-img tablet" src={imageImport(tablet)} alt={name} />
        <img className="menu-img mobile" src={imageImport(mobile)} alt={name} />

        <AddToCart
          orderCount={getCurrentOrderCount()}
          onAddToCart={onAddToCart}
          incrementOrderCount={incrementOrderCount}
          decrementOrderCount={decrementOrderCount}
          clearOrderCount={clearOrderCount}
          toggleOrdered={toggleOrdered}
        />
      </div>

      <div className="menu-details">
        <span className="category">{category}</span>
        <h3 className="name">{name}</h3>
        <span className="price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
}

// TODO: Hook up menu item to live values using orderCount
