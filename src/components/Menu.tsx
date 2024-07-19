import menu from "../assets/json/data.json";

type JSONItem = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

export default function Menu() {
  const menuItems: JSONItem[] = menu;
  for (let i = 0; i < menuItems.length; i++) {
    console.log(menuItems[i]);
  }

  const firstItem = menuItems[0];
  const firstThumbnail = new URL(firstItem.image.thumbnail, import.meta.url)
    .href;

  return (
    <>
      <img src={firstThumbnail} />
      <p> {firstItem.category}</p>
      <h2> {firstItem.name}</h2>
      <span>${firstItem.price.toPrecision(2)}</span>
    </>
  );
}
