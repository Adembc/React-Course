import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import cartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
export default function Cart(props) {
  const cartCtx = useContext(cartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasorder = cartCtx.items.length > 0;
  const cartAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orders = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((el) => {
        return (
          <CartItem
            key={el.id}
            name={el.name}
            amount={el.amount}
            price={el.price}
            onRemove={cartRemoveItemHandler.bind(null, el.id)}
            onAdd={cartAddItemHandler.bind(null, el)}
          />
        );
      })}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {orders}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasorder && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
}
