import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import {food_list} from "../assets/frontend_assets/assets"

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  //const url = "http://localhost:5555";
  const url= "https://food-delivery-backend-flax.vercel.app";
  const [food_list, setFoodList] = useState([]);
  const [cartitems, setcartitems] = useState(0);
  const updateToken = (newToken, id) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };
  const fetchFoodList = async () => {
    const response = await axios.get("https://food-delivery-backend-flax.vercel.app/food/listFood");
    setFoodList(response.data.data);
  };

   const loadCartData= async(token)=>{
        if(token){
          const response=await axios.post(url+"/cart/getCart",{},{headers:{token}})
          setcartitems(response.data.cart);
        }
   }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  }, []);


  const addtocart = async (itemId) => {
    if (!cartitems[itemId]) {
      setcartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartitems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));
    }
    if(token){
      await axios.post(url+"/cart/addToCart",{itemId},{headers:{token}})
    }

  };

  const removefromcart = async(itemId) => {
    setcartitems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: removedItem, ...newCartItems } = prev;
        return newCartItems;
      }
    });
    if(token){
      await axios.post(url+"/cart/removeFromCart",{itemId},{headers:{token}})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartitems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    token,
    cartitems,
    url,
    setcartitems,
    addtocart,
    removefromcart,
    getTotalCartAmount,
    updateToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
