import { useParams } from "react-router-dom";
import RestaurantDetail from "./utils/RestaurantMenuCard";
import useRestaurantMenu from "./Hooks/useRestaurantMenu";
import Shimmer from "./utils/Shimmer";


const RestaurantMenu = () => {
    const restaurantId = useParams();
    
    const [restaurantMenu, setRestaurantMenu] = useRestaurantMenu(restaurantId);

    return (restaurantMenu.length === 0) ? <Shimmer/> : (
        <>
            <div className="grid grid-cols-6">
                <div className="col-start-2 col-span-4" >
                    <div className="grid grid-cols-2">
                        {
                            restaurantMenu.map((cards) => {
                                const itemCards = cards?.card?.card?.itemCards;
                                if (itemCards != undefined) {
                                    for (const itemCard of itemCards) {
                                        return (
                                            <>
                                                <RestaurantDetail key={itemCard?.card?.info?.id} info={itemCard?.card?.info}/>
                                            </>
                                        )
                                    }
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default RestaurantMenu;