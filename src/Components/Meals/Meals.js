import MealItems from "./MealsItems";
import MealSummary from "./MealSummary";
import React, { useEffect, useState } from "react";


// const DUMMY_MEALS = [
//   { id: 1, name: "Sushi", desc: "Finest Fish and veggies", price: 229 },
//   { id: 2, name: "Chilly Noodles", desc: "chicken, garlic, onion", price: 200 },
//   { id: 3, name: "Panner", desc: "onion tofu and cashew", price: 300 },
//   { id: 4, name: "Indian Thali", desc: "dal mix veg and sweet", price: 400 },
//   { id: 5, name: "Burger", desc: "cheese cabbage and aloo tike", price: 100 },
// ];

const Meals = (props) => {
  const [data, setData] = useState([]);
  const [error,setError]=useState();
  const [isLoading,setLoading]=useState(true);
  useEffect(() => {
    fetch(
      "https://food-ordering-app-14185-default-rtdb.firebaseio.com/meals.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const loadedArray = [];
        for (const item in data) {
          loadedArray.push({
            id: item,
            name: data[item].name,
            desc: data[item].desc,
            price: data[item].price,
          });
        }
        setData(loadedArray);
      })
      .catch((error) => {
      setLoading(false);
      setError(error)});
  }, []);
  return (
    <React.Fragment>
      <MealSummary />
      {isLoading && <spinner/>}
      {error ? <p className="error fetch-error">{error.message}</p>:
      <MealItems data={data} />
      }
    </React.Fragment>
  );
};

export default Meals;
