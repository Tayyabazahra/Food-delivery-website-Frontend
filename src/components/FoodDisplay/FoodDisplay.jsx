import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoodList = category === "All" 
    ? food_list 
    : food_list.filter(item => item.category === category);

  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Food Dishes near you!</h2>
        <div className="food-display-list">
          {filteredFoodList?.map((item, index) => (
            <Fooditem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
