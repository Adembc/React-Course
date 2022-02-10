import React, { useReducer } from "react";
import CartContext from "./Cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      //   const updatedItems = [...state.items, action.item];
      const cartIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const currentCart = state.items[cartIndex];
      let updateItem;
      let updateItems;
      if (currentCart) {
        updateItem = {
          ...currentCart,
          amount: currentCart.amount + action.item.amount,
        };
        updateItems = [...state.items];
        updateItems[cartIndex] = updateItem;
      } else {
        updateItem = { ...action.item };
        updateItems = [...state.items, updateItem];
      }
      return { items: updateItems, totalAmount: updatedTotalAmount };
    }
    case "REMOVE": {
      const cartIndex = state.items.findIndex((item) => item.id === action.id);
      const currentCart = state.items[cartIndex];
      const updatedTotalAmount = state.totalAmount - currentCart.price;
      let updatedItems;
      if (currentCart.amount === 1) {
        console.log("what");
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = { ...currentCart, amount: currentCart.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[cartIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default:
      return defaultCartState;
  }
};
export default function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item });
  }; // value will be updated
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
