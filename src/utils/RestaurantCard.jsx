import { image_cdn } from "./constants";
import ratingImage from "../Assets/favicon-16x16.png"

const RestaurantCard = ({name, cloudinaryImageId, locality, avgRating, cuisines }) => {
    return (
        <>
            <div className="p-2 m-2 rounded-lg shadow-lg hover:shadow-slate-400 h-80 w-full">
                <div className=""><img src={image_cdn + cloudinaryImageId} alt="Restaurant Logo" className="w-full h-48 object-cover aspect-square rounded-2xl py-1" /></div>
                <h1 className="px-2 text-lg font-semibold truncate" style={{fontFamily: "ubuntu"}}>{name}</h1>
                <span className="flex px-2"><img src={ratingImage} alt="Rating" className="w-4 h-4 my-1" /><h1 className="px-1">{avgRating}</h1></span>
                
                <h1 className="px-2 text-sm truncate" style={{fontFamily: "ubuntu"}}>{cuisines.join(", ")}</h1>
                <h1 className="px-2 truncate text-sm" style={{fontFamily: "ubuntu"}}>{locality}</h1>
            </div>
        </>
    )
}

export default RestaurantCard;