import RestaurantCard from "./RestaurantCard";
 import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return(
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
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} /> */}
        
        {listOfRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))}
        
        </div>
      </div>
    )
  }
  export default Body;