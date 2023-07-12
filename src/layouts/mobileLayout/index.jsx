import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import Ellipses from "../../assets/icon/Ellipses";
import DefaultBtn from "../../components/defaultBtn";
import "./style.scss";
const MobileLayout = ({ children, stroke, x, text, topBtn, icon, dots }) => {
  return (
    <>
      <div className="headerLayout">
        <div className="containerLayout">
          {icon === 1 && <ArrowSvg stroke={stroke} x={x} />}
          {icon === 2 && <CrossSvg stroke={stroke} />}
          <span>{text}</span>
        </div>
        {dots && <Ellipses />}
      </div>
      <div className="childrenContainer">{children}</div>
      <div className={topBtn ? "footerLayout topBtn" : "footerLayout"}>
        <DefaultBtn text="Teste" />
        <DefaultBtn whiteBtn={true} text="View Order" />
      </div>
    </>
  );
};
export default MobileLayout;
