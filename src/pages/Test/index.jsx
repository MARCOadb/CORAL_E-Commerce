import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";

const sla = () => console.log("aaaaa");
const botoes = [
  { text: "aaaa", outlined: true, onClick: sla },
  { text: "bbbb", onClick: sla },
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
