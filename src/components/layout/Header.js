import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css";
import mealImage from "../..//img/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="meal" />
      </div>
    </React.Fragment>
  );
}
