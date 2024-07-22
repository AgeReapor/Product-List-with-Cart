import "./MenuItem.scss";
import imageImport from "../utils/imageImport";
import type { JSONItem } from "../utils/types";
import AddToCart from "./AddToCart";
import { useEffect, useState } from "react";

type MenuItemProps = {
  menuItem: JSONItem;
  updateOrderCount: (count: number) => void;
};

export default function MenuItem({
  menuItem,
  updateOrderCount,
}: MenuItemProps) {
  const { image, name, category, price } = menuItem;
  const { mobile, tablet, desktop } = image;

  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    updateOrderCount(orderCount);
  }, [orderCount]);

  function onAddToCart() {
    setOrderCount(1);
  }

  function incrementOrderCount() {
    setOrderCount(orderCount + 1);
  }

  function decrementOrderCount() {
    var newOrderCount = orderCount - 1;
    if (newOrderCount < 0) newOrderCount = 0;
    setOrderCount(newOrderCount);
  }

  function clearOrderCount() {
    setOrderCount(0);
  }

  return (
    <div className="menu-item">
      <div className="menu-image">
        <img className="desktop" src={imageImport(desktop)} alt={name} />
        <img className="tablet" src={imageImport(tablet)} alt={name} />
        <img className="mobile" src={imageImport(mobile)} alt={name} />

        <AddToCart
          orderCount={orderCount}
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
