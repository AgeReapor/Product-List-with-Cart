import "./Menu.scss";
import type { JSONItem } from "../utils/types";
import MenuItem from "./MenuItem";

type MenuProps = {
  orderTracking: Record<string, number>;
  updateOrderCountCallbackFunction: (name: string) => (count: number) => void;
  listOfMenuItems: JSONItem[];
};

export default function Menu({
  orderTracking,
  updateOrderCountCallbackFunction,
  listOfMenuItems,
}: MenuProps) {
  return (
    <>
      <h2>Desserts</h2>
      <div className="menu">
        {listOfMenuItems.map((menuItem) => (
          <MenuItem
            orderTracking={orderTracking}
            key={menuItem.name}
            menuItem={menuItem}
            updateOrderCount={updateOrderCountCallbackFunction(menuItem.name)}
          />
        ))}
      </div>
    </>
  );
}
