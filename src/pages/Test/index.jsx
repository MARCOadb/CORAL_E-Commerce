import { useEffect, useState } from "react";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import BottomModal from "../../components/bottomModal";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";
import getProductById from "../../services/getProductById";
import getProducts from "../../services/getAllProducts";
import { wishlistProduct } from "../../services/wishlistProduct";
import { addBagProduct } from "../../services/addBagProduct";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import IconBtn from "../../components/iconBtn";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import Product from "../../components/product";
import getAllProducts from "../../services/getAllProducts";
import DefaultBtn from "../../components/defaultBtn";
import MyCart from "../MyCart";

const wishlist = () => wishlistProduct(2);
const bag = () => addBagProduct(1);
const removeItem = () => deleteBagProduct(1);

const Test = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    const produtos = await getAllProducts();
    return produtos;
  };

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);
  const abreModal = () => {
    setOpen(true);
  };
  const botoes = [
    { text: "Wishlist", outlined: true, onClick: wishlist },
    { text: "Bag item", onClick: bag },
    { text: "Remove item from bag", onClick: removeItem },
    { text: "Abre modal", outlined: true, onClick: abreModal },
  ];
  const sufix = <ArrowSvg></ArrowSvg>;
  const prefix = (
    <IconBtn>
      <WishlistSvg />
    </IconBtn>
  );
  return (
    <>
      <BottomModal title="Title" headerSuffix={sufix} open={open} setOpen={setOpen} buttons={botoes}>
        {!loading &&
          products?.map((item, index) => {
            if (index === 1) return <Product largura={136} altura={136} data={item} />;
          })}
      </BottomModal>
      <MobileLayout title="Title" icon="cross" buttons={botoes} direction="collumn" headerSuffix={sufix}>
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <MyCart />
      </MobileLayout>
    </>
  );
};
export default Test;
