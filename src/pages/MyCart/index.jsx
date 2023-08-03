import Breadcrump from "../../components/breadcrumpDesktop";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CartProduct from "../../components/cartProduct";
import "./style.scss" 
import { useContext, useEffect } from "react";
import { BagContext } from "../../contexts/BagContext";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import { AuthContext } from "../../contexts/AuthContext";
const MyCart = () => {
    const {userProducts, taxPrice, subTotal, totalPrice, loading, update} = useContext(BagContext)
    useEffect(()=>update(),[])
    const {user} = useContext(AuthContext)
    const deleteProduct = (itemId) => {
        deleteBagProduct(user.uid, itemId, true);
        update();
      };
    return (
        <>
        <Header/>
        <Breadcrump />

        <div>
          {userProducts?.map((item, index) => (
            <div>
              <CartProduct price showQnt data={item.data} qnt={item.qnt} key={item.uid} itemId={item.uid} />
              <span key={index}>Wishlist</span>
              <span key={++index} onClick={()=>deleteProduct(item.uid)}
              onTouchStart={()=>deleteProduct(item.uid)}
              >Remove</span>
              {console.log(item.uid)}
            </div>
          ))}
        </div>
        <h1 className="mycart">My Cart</h1>
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