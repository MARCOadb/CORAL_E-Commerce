import Breadcrump from "../../components/breadcrumpDesktop";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./style.scss" 
const MyCart = ({category ,id, name, image, price, amount}) => {
    return (
        <>
        <Header/>
        <Breadcrump />
        <h1 className="mycart">My Cart</h1>
        <p>{name}</p>
        <img src={image} alt={id} />
        <div className="cart">
            <div className="productsadd">
            </div>
            <div className="totalorder">
            </div>
            <div className="couponcode">
            </div>
        </div>
        <Footer />
        </>
    )
}
export default MyCart; 