import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import Ellipses from "../../assets/icon/Ellipses";
import DefaultBtn from "../../components/defaultBtn";
import "./style.scss";
const MobileLayout = ({ children, stroke, x, text, icon, dots, footer }) => {
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
      {!footer && <div className={"childrenContainer "}>{children}</div>}
      {footer === 1 && <div className={"childrenContainer maxHeightBtnSide"}>{children}</div>}
      {footer === 2 && <div className={"childrenContainer maxHeightTopBtn"}>{children}</div>}
      {footer && (
        <div className={footer === 2 ? "footerLayout topBtn" : "footerLayout"}>
          <DefaultBtn text="Teste" />
          <DefaultBtn whiteBtn={true} text="View Order" />
        </div>
      )}
    </>
  );
};
export default MobileLayout;
