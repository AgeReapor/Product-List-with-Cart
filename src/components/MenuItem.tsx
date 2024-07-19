import "./MenuItem.scss";
import imageImport from "../utils/imageImport";
import type { JSONItem } from "../utils/types";
import AddToCart from "./AddToCart";

type MenuItemProps = {
  menuItem: JSONItem;
  count: number;
};

export default function MenuItem({ menuItem, count }: MenuItemProps) {
  const { image, name, category, price } = menuItem;
  const { mobile, tablet, desktop } = image;

  return (
    <>
      <div className="menu-image">
        <img className="desktop" src={imageImport(desktop)} alt={name} />
        <img className="tablet" src={imageImport(tablet)} alt={name} />
        <img className="mobile" src={imageImport(mobile)} alt={name} />

        <AddToCart orderCount={count} />
      </div>

      <div className="menu-details">
        <span className="category">{category}</span>
        <h3 className="name">{name}</h3>
        <span className="price">${price}</span>
      </div>
    </>
  );
}
