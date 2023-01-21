

import MealForm from './MealForm';
import CartContext from '../../store/cart-context';
import './style.css';
import { useContext } from 'react';
const MealItem=(props)=>{
    const ctx=useContext(CartContext);
    const price="$ "+props.price.toFixed(2);
    const addToCartHandler=(amt)=>{ctx.addItem({id:props.id,name:props.name,price:+(props.price),amount:amt})}
    return (
        <div className="add-meals">
        <div>
            <p className="meal-name">{props.name}</p>
            <p className="meal-desc">{props.desc} fish and veggies</p>
            <p className="meal-amt">{price}</p>
        </div>
        <MealForm getAmount={addToCartHandler}/>
        </div>
)
}

export default MealItem;