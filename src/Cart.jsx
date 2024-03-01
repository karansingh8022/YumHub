import { useSelector } from "react-redux";
import RestaurantMenuCard from "./utils/RestaurantMenuCard";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <>
            <div className="grid grid-cols-6">
                <div className="col-start-2 col-span-4" >
                    <div className="grid grid-cols-2">
                        {
                            cartItems.map((restaurant) => {
                                return (
                                    <RestaurantMenuCard info={restaurant} key={restaurant?.id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;