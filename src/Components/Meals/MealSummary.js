
import React from "react";
import Card from "../UI/Card";
import './style.css';

const MealSummary=(props)=>{
        return <Card customClassName="meals">
            <p className="meals-summary">
               <span className="meal-amt"> YOU ORDER, WE DELIVER</span><br/>
                Our Food is High Quality and made with a lot of love and passion that we share for food
                we make sure our food is served and packed understanding the choice of our customer.
                 WE are open 24*7 serving our customer nothing but the best food !
            </p>
        </Card>
}

export default MealSummary;