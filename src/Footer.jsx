import phoneImage from "./Assets/phone-solid.svg";
import githubImage from "./Assets/github.svg";
import linkedinImage from "./Assets/linkedin.svg";
import mailImage from "./Assets/envelope-solid.svg";
import { Link } from "react-router-dom";


const Footer = ()=>{
    return (
        <>
            <div className="w-full h-24 mt-3 bg-green-400 flex flex-col justify-center items-center">
                <div className="flex mb-3 mt-7">
                <Link to="/contact"><img src={phoneImage} className="w-5 h-5 mr-3 cursor-pointer" alt="" /></Link>
                <a href="https://www.linkedin.com/in/karan-singh-579014292/" target="blank"><img src={linkedinImage} className="w-5 h-5 mr-3 cursor-pointer" alt="" /></a>
                <a href="https://github.com/karansingh8022/" target="blank"></a><img src={githubImage} className="w-5 h-5 mr-3" alt="" />
                <Link to="/contact"><img src={mailImage} className="w-5 h-5 mr-3 cursor-pointer" alt="" /></Link>
                </div>
                <h1 className="text-xs" style={{fontFamily:"ubuntu"}}>This site is made by - Karan Singh - karan338022@gmail.com</h1>
            </div>
        </>
    )

}

export default Footer;