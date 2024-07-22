import "./Menu.scss";
import type { JSONItem } from "../utils/types";
import MenuItem from "./MenuItem";

type MenuProps = {
  updateOrderCountCallbackFunction: (name: string) => (count: number) => void;
  listOfMenuItems: JSONItem[];
};

export default function Menu({
  updateOrderCountCallbackFunction,
  listOfMenuItems,
}: MenuProps) {
  return (
    <>
      <div className="menu">
        {listOfMenuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            menuItem={menuItem}
            updateOrderCount={updateOrderCountCallbackFunction(menuItem.name)}
          />
        ))}
      </div>
    </>
  );
}
