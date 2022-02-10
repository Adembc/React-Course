import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/Cart-provider";
function App() {
  const [isHidden, setIsHidden] = useState(false);
  const showCartHandler = () => {
    setIsHidden(true);
  };
  const hideCartHandler = () => {
    setIsHidden(false);
  };
  return (
    <CartProvider>
      {isHidden && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
