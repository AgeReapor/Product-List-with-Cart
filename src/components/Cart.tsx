import "./Cart.scss";
import { useEffect, useState } from "react";
import { JSONItem } from "../utils/types";
import CartItem from "./CartItem";

type CartProps = {
  orderTracking: Record<string, number>;
  listOfMenuItems: JSONItem[];
  updateOrderCountCallbackFunction: (name: string) => (count: number) => void;
};

export default function Cart({
  orderTracking,
  listOfMenuItems,
  updateOrderCountCallbackFunction,
}: CartProps) {
  const listOfMenuItemNames = listOfMenuItems.map((menuItem) => menuItem.name);
  const listOfMenuPrices = listOfMenuItems.map((menuItem) => menuItem.price);
  const listOfActiveOrders = listOfMenuItemNames.filter(
    (name) => orderTracking[name] > 0
  );

  const [cartItemCount, setCartItemCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const carbonNeutralSvg = "../assets/images/icon-carbon-neutral.svg";
  const emptyNoticeSvg = "../assets/images/illustration-empty-cart.svg";

  function getOrderCost(name: string) {
    return listOfMenuPrices[listOfMenuItemNames.indexOf(name)];
  }

  function getTotalOrderCost() {
    var sum = 0;
    listOfActiveOrders.forEach((name) => {
      const countOfThisOrder = orderTracking[name];
      const costOfThisOrder = getOrderCost(name);
      sum += countOfThisOrder * costOfThisOrder;
    });
    return sum;
  }

  useEffect(() => {
    var newItemCount = 0;
    setIsEmpty(listOfActiveOrders.length === 0);
    listOfActiveOrders.map((name) => {
      newItemCount += orderTracking[name];
    });
    setCartItemCount(newItemCount);
  }, [orderTracking]);

  return (
    <div className={"cart" + (isEmpty ? " empty" : "")}>
      <h2>Your Cart({cartItemCount})</h2>
      {listOfActiveOrders.map((name) => (
        <CartItem
          key={name}
          name={name}
          orderCount={orderTracking[name]}
          price={getOrderCost(name)}
          updateOrderCount={updateOrderCountCallbackFunction(name)}
        />
      ))}
      <div className="order-total">
        <p>Order Total</p>
        <span className="total-price">${getTotalOrderCost().toFixed(2)} </span>
      </div>
      <div className="delivery-details">
        <img src={carbonNeutralSvg} alt=""></img>
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>
      <button className="checkout-button">Confirm Order</button>
      <div className="empty-notice">
        <img src={emptyNoticeSvg} alt=""></img>
        <p>Your added items will appear here</p>
      </div>
    </div>
  );
}
