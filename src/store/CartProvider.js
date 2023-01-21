import CartContext from "./cart-context";
import { useReducer,useState } from "react";

const defaultCartItem = {
    items: [],
    totalAmount: 0
}

const InitialCartItems = (prevState, action) => {
    if (action.type === 'ADD ITEM') {
        const updatedTotal = prevState.totalAmount + action.value.price * action.value.amount;
        let updatedItems;
        let updatedItem;

        const newItemIndex=prevState.items.findIndex((item)=>item.id===action.value.id);//item already exist
        const existingItem=prevState.items[newItemIndex];
        if(existingItem){
            updatedItem={...existingItem,amount:action.value.amount+existingItem.amount};
            updatedItems=[...prevState.items];
            updatedItems[newItemIndex]=updatedItem;
            console.log(updatedItem);
            return{
                totalAmount:updatedTotal,
                items:updatedItems
            }

        }
        else{
         updatedItems = prevState.items.concat(action.value);
         return {
            items: updatedItems,
            totalAmount: updatedTotal
        }
        }
       
    }
    if(action.type==='REMOVE ITEM'){
        let updatedItem;
        let updatedItems;
        const existingItemIndex=prevState.items.findIndex(item=>item.id===action.id);//checks item does exist;
        const existingItem=prevState.items[existingItemIndex];
        let updatedTotal=prevState.totalAmount-existingItem.amount;
        if(existingItem.amount===1){
            updatedItems=prevState.items.filter(item=>item.id!==action.id);
        }
        else{
            updatedItem={...existingItem,amount:existingItem.amount-1};
            updatedItems=[...prevState.items];
            updatedItems[existingItemIndex]=updatedItem;
        }
        return {
            totalAmount:updatedTotal,
            items:updatedItems
        }
    }
    return defaultCartItem
}

const CartProvider = (props) => {

    const deleteItemHandler = (id) => {
        dispatchItems({ type: 'REMOVE ITEM', id: id })
    }

    const addItemHandler = (items) => {
        dispatchItems({ type: 'ADD ITEM', value: items })
    }

    const [cartItems, dispatchItems] = useReducer(InitialCartItems, defaultCartItem)
    const [isLoggedIn,setIsLoggedIn] =useState(false);
    const ctx = {
        isLoggedIn: isLoggedIn,
        items: cartItems.items,
        totalAmount: cartItems.totalAmount,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler,
        logIn:()=>{setIsLoggedIn(!isLoggedIn);}
    }
    return <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
}

export default CartProvider;