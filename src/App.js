import { useState } from "react";
import Header from "./Components/UI/Header";
import Meals from "./Components/Meals/Meals";
import Cart  from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useContext } from "react";
import CartContext from "./store/cart-context";


function App() {
  const [valid ,setValid]=useState(false);
  const ctx=useContext(CartContext);

  const showCartHandler=()=>{
    setValid(true);
  }
  const hideCartHandler=()=>{
    setValid(false);
  }

  return (
    <CartProvider>
      <div className="food-img">
      <Header addToCart={showCartHandler} />
      <Meals  />
      {valid && <Cart cancel={hideCartHandler}/>}
    </div>
    </CartProvider>
    

  );
}

export default App;

