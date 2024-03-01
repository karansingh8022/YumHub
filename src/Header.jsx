import { useSelector } from "react-redux";
import logo from "./Assets/logo-removebg-preview.png"
import { Link } from "react-router-dom";

const Header = () => {

    const cartItems = useSelector(store => store.cart.items);

    return (

        <div className="flex justify-between items-center px-6 mb-5 bg-green-400">
            <div>
                <Link to="/"><img src={logo} alt="logo" className="h-28 w-28 bg-transparent" /></Link>
            </div>
            <div className="">
                <ul className="list-none flex justify-between pr-5">
                    <li className="m-2 sm:text-sm text-xs font-semibold" style={{fontFamily:"ubuntu"}}> <a href="https://karansingh8022.github.io/Portfolio/">MY PROFILE</a> </li>
                    <li className="m-2 sm:text-sm text-xs font-semibold" style={{fontFamily:"ubuntu"}}>LOGIN</li>
                    <li className="m-2 sm:text-sm text-xs font-semibold" style={{fontFamily:"ubuntu"}}>SIGNUP</li>
                    <li className="m-2 sm:text-sm text-xs font-semibold" style={{fontFamily:"ubuntu"}}><Link to="/cart">CART-{cartItems.length}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;