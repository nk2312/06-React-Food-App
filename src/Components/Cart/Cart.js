import React from "react";
import Card from "../UI/Card";
import ReactDOM from "react-dom";
import "./style.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Order from "./Order";

//const total = [12, 23, 45].reduce((initialValue, currentValue) => { return initialValue + currentValue }, 0)

export const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.cancelbtn}></div>;
};


const Cart = (props) => {
  const ctx = useContext(CartContext);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop cancelbtn={props.cancel} />,
        document.getElementById("back-drop")
      )}
      {ReactDOM.createPortal(
        <Order
          cancelbtn={props.cancel}
          label="Bill Summary"
          total={ctx.totalAmount}
          items={ctx.items}
        />,
        document.getElementById("order-modal")
      )}
    </React.Fragment>
  );
};

export default Cart;
