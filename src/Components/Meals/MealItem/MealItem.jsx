import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  
  const addToCartHandler = (enteredQty) => {
    const item = {
      id : props.id,
      name : props.name,
      qty : enteredQty,
      price: props.price
    }
    cartCtx.addItem(item);
  }

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
