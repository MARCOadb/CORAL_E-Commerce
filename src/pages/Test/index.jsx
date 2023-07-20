import { useState } from "react";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import BottomModal from "../../components/bottomModal";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";
import getProductById from "../../services/getProductById";
import getProducts from "../../services/getProducts";
import { wishlistProduct } from "../../services/wishlistProduct";
import { addBagProduct } from "../../services/addBagProduct";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import IconBtn from "../../components/iconBtn";
import WishlistSvg from "../../assets/icon/WishlistSvg";

const wishlist = () => wishlistProduct(1);
const bag = () => addBagProduct(2);
const removeItem = () => deleteBagProduct(1);
const botoes = [
  { text: "aaaa", outlined: true, onClick: wishlist },
  { text: "bbbb", onClick: bag },
  { text: "bbbb", onClick: removeItem },
];

const Test = () => {
  const [open, setOpen] = useState(true);
  const sufix = <ArrowSvg></ArrowSvg>;
  const prefix = (
    <IconBtn>
      <WishlistSvg />
    </IconBtn>
  );
  return (
    <BottomModal title="My bag" open={open} setOpen={setOpen} headerSuffix={prefix} buttons={botoes} footerPrefix={prefix}>
      <div style={{ margin: "16px" }}>daksodaskod</div>
    </BottomModal>
  );
};
export default Test;
