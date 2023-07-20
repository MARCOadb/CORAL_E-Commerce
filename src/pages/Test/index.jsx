import { useState } from "react";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import BottomModal from "../../components/bottomModal";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";
import IconBtn from "../../components/iconBtn";
import WishlistSvg from "../../assets/icon/WishlistSvg";

const sla = () => console.log("aaaaa");
const botoes = [{ text: "bbbb", onClick: sla }];

const Test = () => {
  const [open, setOpen] = useState(true);
  const sufix = <ArrowSvg></ArrowSvg>;
  const prefix = (
    <IconBtn>
      <WishlistSvg />
    </IconBtn>
  );
  return (
    <MobileLayout icon="cross">
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
    </MobileLayout>
  );
};
export default Test;
