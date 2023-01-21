
import MealItem from "./MeaItem";
import Card from "../UI/Card";
import React from "react";
const MealItems=(props)=>{

    return (
    <Card customClassName="meal-items">
        {props.data.map((meal)=>{return <MealItem key={meal.id} id={meal.id} name={meal.name} desc={meal.desc} price={meal.price}/>})} 
    </Card>
    )
}

export default MealItems;