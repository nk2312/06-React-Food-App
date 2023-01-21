import Button from "./Button";
import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";


const Header = (props) => {
  const obj = useContext(CartContext);
  const totalNoOfItems = obj.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);


  return (
    <>
      <div className="header">
        <h1>FOOD-APP</h1>
        <Button AddToCart={props.addToCart} itemNo={totalNoOfItems} />
      </div>
    </>
  );
};

export default Header;
