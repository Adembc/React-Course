import React, { useContext, useEffect, useState } from "react";
import "./HeaderCartButton.js";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import cartContext from "../../store/Cart-context.js";
export default function HeaderCartButton(props) {
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;
  const nbrOfItem = items.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const [isBumbped, setIsBumped] = useState(false);
  const btnClasses = `${classes.button} ${isBumbped ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) return;
    setIsBumped(true);
    const counter = setTimeout(() => {
      setIsBumped(false);
    }, 300);
    return () => clearTimeout(counter);
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nbrOfItem}</span>
    </button>
  );
}
