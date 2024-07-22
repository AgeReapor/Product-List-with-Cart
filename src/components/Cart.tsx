import { useEffect, useState } from "react";
import { JSONItem } from "../utils/types";
import CartItem from "./CartItem";

type CartProps = {
  orderTracking: Record<string, number>;
  listOfMenuItems: JSONItem[];
};

export default function Cart({ orderTracking, listOfMenuItems }: CartProps) {
  orderTracking;

  const listOfMenuItemNames = listOfMenuItems.map((menuItem) => menuItem.name);
  const listOfMenuPrices = listOfMenuItems.map((menuItem) => menuItem.price);
  const listOfActiveOrders = listOfMenuItemNames.filter(
    (menuItem) => orderTracking[menuItem] > 0
  );

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    var newItemCount = 0;
    listOfActiveOrders.map((menuItem) => {
      newItemCount += orderTracking[menuItem];
    });
    setCartItemCount(newItemCount);
  }, [orderTracking]);

  return (
    <div className="cart">
      <h2>Your Cart({cartItemCount})</h2>
      {listOfActiveOrders.map((menuItem) => (
        <CartItem
          key={menuItem}
          name={menuItem}
          orderCount={orderTracking[menuItem]}
          price={listOfMenuPrices[listOfMenuItemNames.indexOf(menuItem)]}
        />
      ))}
    </div>
  );
}
