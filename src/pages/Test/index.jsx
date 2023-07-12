import DefaultBtn from "../../components/defaultBtn";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";

export default function Test() {
  return (
    <MobileLayout stroke="#13101E" x={90} text="Teste" topBtn={true} dots={true} icon={1}>
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
