import { JSONItem } from "../utils/types";
import imageImport from "../utils/imageImport";
import "./Modal.scss";

type ModalProps = {
  orderTracking: Record<string, number>;
  listOfMenuItems: JSONItem[];
  resetOrders: () => void;
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({
  orderTracking,
  listOfMenuItems,
  resetOrders,
  modalToggle,
  setModalToggle,
}: ModalProps) {
  const listOfMenuItemNames = listOfMenuItems.map((menuItem) => menuItem.name);
  const listOfMenuPrices = listOfMenuItems.map((menuItem) => menuItem.price);
  const listOfActiveOrders = listOfMenuItemNames.filter(
    (name) => orderTracking[name] > 0
  );
  const checkSvg = "../assets/images/icon-order-confirmed.svg";

  function getOrderCost(name: string) {
    return listOfMenuPrices[listOfMenuItemNames.indexOf(name)];
  }

  function getThumbnail(name: string) {
    return listOfMenuItems[listOfMenuItemNames.indexOf(name)].image.thumbnail;
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
  //   function getOrderThumbNail(name: string) {
  //     return listOfMenuItems[listOfMenuItemNames.indexOf(name)].thumbnail;
  //   }

  function modalCartItem(
    thumbnail: string,
    name: string,
    price: number,
    orderCount: number
  ) {
    return (
      <div className="modal-cart-item">
        <img className="thumbnail" src={imageImport(thumbnail)} alt={name} />
        <div className="modal-cart-item-order">
          <p className="modal-cart-item-name">{name}</p>
          <div className="modal-cart-item-details">
            <span>x{orderCount}</span>
            <p className="modal-cart-item-price">@ ${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="modal-cart-item-total-price">
          ${(price * orderCount).toFixed(2)}
        </div>
      </div>
    );
  }

  function generateModalCartItems() {
    return (
      <>
        {listOfActiveOrders.map((name) => {
          const countOfThisOrder = orderTracking[name];
          const costOfThisOrder = getOrderCost(name);
          if (countOfThisOrder > 0) {
            return modalCartItem(
              getThumbnail(name),
              name,
              costOfThisOrder,
              countOfThisOrder
            );
          }
        })}
      </>
    );
  }

  return (
    <div className={"modal" + (modalToggle ? " active" : "")}>
      <div className="modal-content">
        <img className="check-icon" src={checkSvg} alt="✓" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <div className="order-summary">
          <div className="modal-cart-items">{generateModalCartItems()}</div>
          <div className="modal-cart-total">
            <p>Order Total</p>
            <span>${getTotalOrderCost().toFixed(2)}</span>
          </div>
        </div>
        <button
          className="start-new-order-btn"
          onClick={() => {
            resetOrders();
            setModalToggle(false);
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
