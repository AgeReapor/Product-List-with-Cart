import "./App.scss";
import jsonMenu from "./assets/json/data.json";
import type { JSONItem } from "./utils/types";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const listOfMenuItems: JSONItem[] = jsonMenu;
  const [orderTracking, setOrderTracking] = useState<Record<string, number>>(
    {}
  );
  const [modalToggle, setModalToggle] = useState(false);

  function updateOrderCountCallbackFunction(name: string) {
    return (count: number) => {
      const newRecord = {
        [name]: count,
      };

      setOrderTracking({ ...orderTracking, ...newRecord });
    };
  }

  function resetOrders() {
    setOrderTracking({});
  }

  function submitOrder() {
    setModalToggle(true);
  }

  return (
    <>
      <main>
        <Menu
          orderTracking={orderTracking}
          updateOrderCountCallbackFunction={updateOrderCountCallbackFunction}
          listOfMenuItems={listOfMenuItems}
        />
        <Cart
          orderTracking={orderTracking}
          listOfMenuItems={listOfMenuItems}
          updateOrderCountCallbackFunction={updateOrderCountCallbackFunction}
          submitOrder={submitOrder}
        />
      </main>
      <Modal
        orderTracking={orderTracking}
        listOfMenuItems={listOfMenuItems}
        resetOrders={resetOrders}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
      <Footer />
    </>
  );
}

export default App;
