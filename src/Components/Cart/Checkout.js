import "./style.css";
import { useState, useRef } from "react";

const isInValid = (input) => input.trim() === "";
const isFiveChar = (input) => input.length < 5;

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    email: true,
    city: true,
    pincode: true,
    street: true,
  });
  const name = useRef("");
  const email = useRef("");
  const city = useRef("");
  const pincode = useRef("");
  const street = useRef("");
  let formValid = false;

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredPincode = pincode.current.value;
    const enteredCity = city.current.value;
    const enteredStreet = street.current.value;

    const enteredNameIsValid = !isInValid(enteredName);
    const enteredEmailIsValid = !isInValid(enteredEmail);
    const enteredCityIsValid = !isInValid(enteredCity);
    const enteredPincodeIsValid = !isFiveChar(enteredPincode);
    const enteredStreetIsValid = !isInValid(enteredStreet);

    formValid =
      enteredCityIsValid &&
      enteredEmailIsValid &&
      enteredPincodeIsValid &&
      enteredStreetIsValid &&
      enteredNameIsValid;

    if (!formValid) {
      setFormIsValid({
        name: enteredEmailIsValid,
        email: enteredEmailIsValid,
        city: enteredCityIsValid,
        pincode: enteredPincodeIsValid,
        street: enteredStreetIsValid,
      });
      return;
    }
    props.onSubmitForm({
      name: enteredName,
      email: enteredEmail,
      city: enteredCity,
      pincode: enteredPincode,
      street: enteredStreet,
    });
    //otherwise send the form and submit
  };

  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <div className="input-div">
        <label htmlFor="name">Name :</label>
        <input type="text" ref={name} id="name" />
      </div>
      {!formIsValid.name && (
        <p className="invalid">Please enter a valid Name</p>
      )}
      <div className="input-div">
        <label htmlFor="email">Email :</label>
        <input type="email" ref={email} id="email" />
      </div>
      {!formIsValid.email && (
        <p className="invalid">Please enter a valid Email</p>
      )}
      <div className="input-div">
        <label htmlFor="city">City :</label>
        <input type="text" ref={city} id="city" />
      </div>
      {!formIsValid.city && (
        <p className="invalid">Please enter a valid city name</p>
      )}
      <div className="input-div">
        <label htmlFor="postalCode">Pincode:</label>
        <input type="text" ref={pincode} id="postalCode" />
      </div>
      {!formIsValid.pincode && (
        <p className="invalid">Please enter a pincode</p>
      )}
      <div className="input-div">
        <label htmlFor="street">Street :</label>
        <input type="text" ref={street} id="street" />
      </div>
      {!formIsValid.street && (
        <p className="invalid">Please enter a valid Street Name</p>
      )}
      <button className="checkout" type="submit">
        Confirm
      </button>
      <button className="checkout" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default Checkout;
