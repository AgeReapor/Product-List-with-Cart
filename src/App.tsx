import "./App.scss";
import jsonMenu from "./assets/json/data.json";
import type { JSONItem } from "./utils/types";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const listOfMenuItems: JSONItem[] = jsonMenu;
  const [orderTracking, setOrderTracking] = useState<Record<string, number>>(
    {}
  );

  function updateOrderCountCallbackFunction(name: string) {
    return (count: number) => {
      const newRecord = {
        [name]: count,
      };

      setOrderTracking({ ...orderTracking, ...newRecord });
    };
  }

  return (
    <>
      <main>
        <Menu
          updateOrderCountCallbackFunction={updateOrderCountCallbackFunction}
          listOfMenuItems={listOfMenuItems}
        />
        <Cart orderTracking={orderTracking} listOfMenuItems={listOfMenuItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
