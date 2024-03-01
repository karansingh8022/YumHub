import { useState, useEffect} from "react";
import { RESTAURANT_CDN_URL } from "../utils/constants";

const useRestaurantData = () => {
    const [restaurants, setRestaurants] = useState([]);

    const settingRestaurant = (restaurants) => {
        setRestaurants(restaurants);
    }

    
    const getRestaurantData = async () => {
        try {
            // const fetchData = await fetch(RESTAURANT_CDN_URL);
            // const jsonData = await fetchData.json();
            const jsonData = RESTAURANT_CDN_URL.restaurants;
            
            // const remove = jsonData?.data?.success?.cards?.splice(0, 4);
            // const { restaurants } = jsonData?.data?.success?.cards[0]?.gridWidget?.gridElements?.infoWithStyle;

            settingRestaurant(jsonData);
        }
        catch (error) {
            console.error("error fetching data: ", error);
        }
    }
    
    useEffect(() => {
        getRestaurantData();
    }, []);


    return [restaurants, settingRestaurant];
}

export default useRestaurantData;