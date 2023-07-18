import { useEffect } from "react";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";
import getProductById from "../../services/getProductById";
import getProducts from "../../services/getProducts";
import { wishlistProduct } from "../../services/wishlistProduct";
import { addBagProduct } from "../../services/addBagProduct";
import { deleteBagProduct } from "../../services/deleteBagProduct";

const wishlist = () => wishlistProduct(1);
const bag = () => addBagProduct(2);
const removeItem = () => deleteBagProduct(1);
const botoes = [
  { text: "aaaa", outlined: true, onClick: wishlist },
  { text: "bbbb", onClick: bag },
  { text: "bbbb", onClick: removeItem },
];

const Test = () => {
  const prefix = <ArrowSvg></ArrowSvg>;
  const sufix = <CrossSvg />;
  return (
    <MobileLayout icon="arrow" iconStroke="black" iconAngle={90} title="My bag" headerSuffix={sufix} buttons={botoes} direction="column">
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
    </MobileLayout>
  );
};
export default Test;
