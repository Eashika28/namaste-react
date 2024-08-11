import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    useState[resInfo, setResInfo]=(null);

    useEffect(() =>{
        fetchMenu();
    }, []);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + "resId");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        };

        const resId = useParams();

        if(resInfo === null) return <Shimmer/>;
        
        const {name} = resInfo?.cards[2]?.card?.card?.info;
    
    return (
        <div className="menu">
            <h1> Restaurant Name: {name}</h1>
            <h2>Menu</h2>
            <h3>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </h3>
        </div>
    )
}

export default RestaurantMenu;