
import React from "react";

const Input=React.forwardRef((props,ref)=>{
    return <>
    <label htmlFor={props.id} className="meal-amt">{props.label}</label>
    <input ref={ref} {...props.input}/>
    </>
}
)

export default Input;
