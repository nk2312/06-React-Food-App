

import './style.css';
import React from 'react';
import CartIcon from './CartIcon';
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Button=(props)=>{

    const ctx=useContext(CartContext)

    const [btnHighlight,setBtnHighlight]=useState(false);
    const {items}=ctx

    const btnClass=`add-to-cart-btn ${btnHighlight? 'bump':''}`;
    
    useEffect(()=>{
        if(items.length===0){
            return
        }
        setBtnHighlight(true)

        const timer=setTimeout(()=>{setBtnHighlight(false)},300);

        return()=>{clearTimeout(timer)}
    }
        
        ,[items])

    return <div className={btnClass}>
        <span>
            <CartIcon/>
        </span>
        <span onClick={props.AddToCart}>Add to Cart</span>
        <span>
            <div className='badge'>{props.itemNo}</div>
        </span>
    </div>
}

export default Button;