import "./style.scss"
import location from "../../assets/icon/location.svg"
import logos from "../../assets/icon/logos.svg"

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <img className="logos" src={logos} alt="logos" />
         <div className="location">
          <img src={location} alt="location" />
          <p className="us">United States</p>
         </div>
         <span> © 2021 | Cora Leviene All Rights Reserved </span>
      </div>

      <div className="listcontainer">
        <div className="lista">
          <span>Shop by Category</span>
            <a href="#">Skincare</a>
            <a href="#">Personal Care</a>
            <a href="#">Handbags</a>
            <a href="#">Apparels</a>
            <a href="#">Watches</a>
            <a href="#">Eye Wear</a>
            <a href="#">Jewellery</a>
        </div>
        <div className="lista">
          <span>About</span>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
        </div>
        <div className="lista">
          <span>Police</span>
            <a href="#">Return Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">EPR Compliance</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;