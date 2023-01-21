import Input from "../UI/Input";
import { useRef } from "react";

const MealForm=(props)=>{
    const enteredInput=useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
        const enteredAmount=enteredInput.current.value;
        const enteredAmt=+enteredAmount;
        props.getAmount(enteredAmt);
    }
    return (
        <form className="meal-form" onSubmit={submitHandler}>
        <Input 
        label="Amount" 
        ref={enteredInput}
        input={{type:"text",min:"1",max:"5",step:"1",id:"amount"+props.id}}
        />
        <button type="submit" className="meal-btn">+ Add</button>
    </form>
    )

}

export default MealForm;