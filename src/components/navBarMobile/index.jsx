import "./style.scss"
import bagon from "../../assets/icon/bag.svg"
import categoryon from "../../assets/icon/category.svg"
import homeon from "../../assets/icon/home.svg"
import useBreakpoint from "../../hooks/useBreakPoint"
import ProfileSvg from "../../assets/icon/Profilesvg"
import { useNavigate } from "react-router-dom"


// componentizar as img


const  NavBarMobile = () => {
  const { phone, desktop } = useBreakpoint();
  const navigate = useNavigate();
  const handleClick = () =>{ 
    navigate("/about")
  }
  return (
    <div className="navbar">
      <div className="all">
        <img onClick={handleClick} src={homeon} alt="home"/>
        <img onClick={handleClick} src={categoryon} alt="category"/>
        <ProfileSvg onClick={handleClick}/>
        <img onClick={handleClick} src={bagon} alt="bag"/>
      </div>
    </div>
    

    );
  }


export default NavBarMobile;