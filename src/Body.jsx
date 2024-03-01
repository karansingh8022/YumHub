import useRestaurantData from "./Hooks/useRestaurantData";
import RestaurantCard from "./utils/RestaurantCard";
import { useState} from "react";
import Shimmer from "./utils/Shimmer";
import { Link } from "react-router-dom";


const filterData = (search, allRestaurants) => {
    const restaurant = allRestaurants.filter((restaurant) => (restaurant?.info?.name.toLowerCase().includes(search.toLowerCase())));
    return restaurant;
}

const Body = () => {
    const [allRestaurants, setAllRestaurant] = useRestaurantData([]);
    const [filterRestaurant, setFilterRestaurant] = useRestaurantData([]);
    const [search, setSearch] = useState("");

 
    return (allRestaurants.length === 0)?<Shimmer/>: (
        <>
            <div className="grid lg:grid-cols-6 sm:grid-cols-4">
                <div className="lg:col-start-4 sm:col-start-3 sm:col-span-2 col-start-2 col-span-1 mr-10">
                    <div>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                            className="bg-slate-300 rounded-full ps-4 w-full h-7 outline-none"
                            placeholder="Search"
                        />
                        <button
                            onClick={() => {
                                const filterRestaurantData = filterData(search, allRestaurants);
                                setFilterRestaurant(filterRestaurantData);
                            }}
                            className="-mx-8"
                        >🍳
                        </button>
                    </div>
                </div>
                <div className="lg:col-start-2 sm:col-start-0 sm:col-span-4 col-span-2 mx-10" >
                    <div className="grid sm:grid-cols-4 grid-cols-2">
                        {
                            filterRestaurant.map((restaurant) => {
                                return (
                                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                                        <RestaurantCard {...restaurant?.info}  />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;