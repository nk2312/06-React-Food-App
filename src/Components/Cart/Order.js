import React, { useState ,useContext} from "react";
import Checkout from "./Checkout";
import Card from "../UI/Card";
import CartContext from "../../store/cart-context";

const Order = (props) => {
  const ctx = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitOrderHandler = (userInput) => {
    async function sendData() {
      await fetch(
        "https://food-ordering-app-14185-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            users: userInput,
            orders: props.items,
          }),
        }
      );
    }
    sendData();
    setFormSubmitted(true);
  };

  const cartItem = (
    <Card customClassName="card-modal">
      {props.items.length > 0 ? (
        <div>
          <div className="bill-summary">{props.label}</div>
          <div className="bill-items">
            <div className="bill-heading bill-header-title">
              <p>Items</p>
              <p>Price * Quantity</p>
            </div>
            {props.items.map((data) => {
              return (
                <div className="bill-heading">
                  <p className="bill-para">{data.name}</p>
                  <p className="quant">
                    ${data.price} &nbsp;
                    <span className="quant-price">
                      ({data.price}*{data.amount})
                    </span>
                  </p>
                  <p>
                    <button
                      onClick={ctx.addItem.bind(this, {
                        id: data.id,
                        name: data.name,
                        price: +data.price,
                        amount: 1,
                      })}
                    >
                      +
                    </button>
                    <button onClick={ctx.deleteItem.bind(this, data.id)}>
                      -
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="total-amount">
            <div className="span">Total amount is : ${props.total}</div>
          </div>
          {show && (
            <Checkout
              onCancel={props.cancelbtn}
              onSubmitForm={submitOrderHandler}
            />
          )}
          {!show && (
            <div className="btn-meal">
              <button className="meal-btn" onClick={props.cancelbtn}>
                Cancel
              </button>
              <button
                className="meal-btn"
                onClick={() => {
                  setShow(true);
                }}
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="error">Please select some Item .The cart is empty?</p>
      )}
    </Card>
  );
  return (
    <React.Fragment>
      {!formSubmitted ? cartItem : (
        <Card customClassName="submit">
          <p>
            Form submitted successfully..
            <img src="../../asset/images/success.svg" alt="success" />
          </p>
          <button className="meal-btn" onClick={props.cancelbtn}>
            Close
          </button>
        </Card>
      )}
    </React.Fragment>
  );
};
export default Order;
