import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";

const cons = () => console.log("console.log dos botao");
const botoes = [
  { text: "dsadas", outline: true, onClick: cons },
  { text: "figo", onClick: cons },
];

export default function Test() {
  const sufix = <ArrowSvg />;
  const prefix = <CrossSvg />;
  return (
    <MobileLayout icon="arrow" iconStroke="#13101E" iconAngle={90} title="My bag" direction="column" buttons={botoes} footerPrefix={prefix} headerSuffix={sufix}>
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
      <Header></Header>
      <Header></Header>
      <Header></Header>
    </MobileLayout>
  );
}
