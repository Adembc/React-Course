import React, { useRef } from "react";
import classes from "./MelaItemForm.module.css";
import Input from "../UI/Input";
export default function MealItemForm(props) {
  const amountInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const entredAmount = +amountInputRef.current.value;
    if (entredAmount < 1 || entredAmount > 5) return;
    props.onAddToCart(entredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 1,
          defaultValue: 1,
        }}
      />
      <button> + Add</button>
    </form>
  );
}
