import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import DefaultBtn from "../../components/defaultBtn";
import "./style.scss";
/*
Props
  {
    buttons: Config[];
    direction?: "column" | "row";
    footerPrefix?: ReactNode;
    icon?: "arrow" | "cross";
    iconStroke?: string;
    iconAngle?: number;
    iconOnclick?: () => void;
    headerSuffix?: ReactNode;
    title?: string;
  }
Config
  {
    text: string;
    outline: boolean;
    onClick: () => void;
  }
*/

const MobileLayout = ({ children, headerSuffix, title, buttons, direction = "row", footerPrefix, icon, iconStroke, iconAngle, iconOnclick }) => {
  return (
    <div className="layout">
      <div className="headerLayout">
        <div className="containerLayout">
          {icon === "arrow" && <ArrowSvg stroke={iconStroke} x={iconAngle} onClick={iconOnclick} />}
          {icon === "cross" && <CrossSvg stroke={iconStroke} onClick={iconOnclick} />}
          <span>{title}</span>
        </div>
        {headerSuffix}
      </div>

      <div className={"childrenContainer"}>{children}</div>
      {(!!buttons?.length || footerPrefix) && (
        <div className={direction === "row" ? "footerLayout" : "footerLayout columnFooter"}>
          {footerPrefix}
          {buttons?.map((item, index) => (
            <DefaultBtn outlined={item.outlined} key={index} onClick={item.onClick}>
              {item.text}
            </DefaultBtn>
          ))}
        </div>
      )}
    </div>
  );
};
export default MobileLayout;
