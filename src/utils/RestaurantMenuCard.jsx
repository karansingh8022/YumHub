import { image_cdn } from "./constants";
import { useDispatch } from "react-redux";
import { addItems } from "./storeSlice";

const RestaurantDetail = ({ info}) => {
    const { name, imageId, description } = info;

    const dispatch = useDispatch();

    const addItemToCart = (info)=>{
        dispatch(addItems(info));
    }

    return (
        <>
            <div className="grid grid-cols-3 p-2 m-2 rounded-lg shadow-lg hover:shadow-slate-400">
                <div className="col-span-1"><img src={image_cdn + imageId} alt="Restaurant Logo" className="w-full h-28 object-cover aspect-square rounded-2xl" /></div>
                <div className="col-span-2 grid grid-row-4">
                    <h1 className="px-2 row-start-1 text-lg  font-semibold" style={{fontFamily: "ubuntu"}}>{name}</h1>
                    <h1 className="px-2 row-start-2 text-xs" style={{fontFamily: "ubuntu"}}>{description}</h1>
                    <h1><button 
                    className="bg-green-400 mx-2 rounded-lg px-3"
                    style={{fontFamily:"ubuntu"}}
                    onClick={()=>addItemToCart(info)}
                    >Add</button></h1>
                </div>
            </div>
        </>
    )
}

export default RestaurantDetail;