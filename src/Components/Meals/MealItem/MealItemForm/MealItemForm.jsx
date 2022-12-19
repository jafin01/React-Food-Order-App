import React, { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [qtyIsValid, setQtyIsValid] = useState(true);
  const qtyInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQty = qtyInputRef.current.value;
    const enteredQtyNumber = +qtyInputRef.current.value;

    if (
      enteredQty.trim().length === 0 ||
      enteredQtyNumber < 1 ||
      enteredQtyNumber > 5
    ) {
      setQtyIsValid(false);
      return;
    }

    props.addToCart(enteredQtyNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={qtyInputRef}
        label="Qty"
        input={{
          id: "qty__" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!qtyIsValid && <p>Please Enter a valid qty (0-5)</p>}
    </form>
  );
};

export default MealItemForm;
