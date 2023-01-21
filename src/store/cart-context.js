import React from "react";

const CartContext=React.createContext({
    isLoggedIn:'',
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    deleteItem:(id)=>{},

})

export default CartContext;