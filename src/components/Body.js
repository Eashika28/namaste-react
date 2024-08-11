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
  
  const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.466080617452484&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
  const json = await data.json();
  //Optional Chaining
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    return listOfRestaurants.length == 0 ? (
    <Shimmer/>
    ) : (
      <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box"/>
        <button>Search</button>
      </div>
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