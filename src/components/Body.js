import RestaurantCard from "./RestaurantCard";
 //import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

 const fetchData = async () => {
  try{
  const data = await fetch("https://www.swiggy.com/dapi/cart");
  if(!data.ok){
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  const json = await data.json();
  console.log(json);
  //Optional Chaining
  const cartItems = json?.data?.cartItems || {};
      const itemsArray = Object.values(cartItems).flatMap(item => item.items);

      setListOfRestaurants(itemsArray);
 }
 catch(error){
  console.error("error fetching data", error);
 };

 //
    return listOfRestaurants.length == 0 ? (
    <Shimmer/>
    ) : (
      <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
         const filterdList = listOfRestaurants.filter(
            (res)=> res.data.avgRating>4
          );
          setListOfRestaurants(filterdList);
         
        }}>Top-Rated Restaurants</button>
      </div>
        <div className="res-container">
        {listOfRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))}
        
        </div>
      </div>
    )
  }
};
  export default Body;