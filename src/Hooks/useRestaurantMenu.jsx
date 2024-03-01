import { useState, useEffect } from "react";
import { menu_cdn } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        getRestaurantMenu();
    }, []);

    const getRestaurantMenu = async () => {
        try {
            // const restaurantMenuData = await fetch(menu_cdn + restaurantId.id);
            // const restaurantMenu = await restaurantMenuData.json();

            // const menu = restaurantMenu.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards;
            const menu = menu_cdn.cards;
            setRestaurant(menu);
        }
        catch (error) {
            console.error("error fetching the data: ", error);
        }
    }
    const setRestaurantMenu = (menu) => {
        setRestaurant(menu);
    }

    return [restaurant, setRestaurantMenu];
}

export default useRestaurantMenu;