import menu from "../assets/json/data.json";
import type { JSONItem } from "../utils/types";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menuItems: JSONItem[] = menu;

  return (
    <div className="menu">
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.name} menuItem={menuItem} count={0} />
      ))}
    </div>
  );
}
