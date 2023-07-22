import "./style.scss";

/*
Props
  {
    icon?: ReactNode *Svg*;
    onClick?: () => void;
    outlined?: true | false ;
  }
*/

const DefaultBtn = ({ children, outlined, onClick, icon }) => {
  return (
    <div className={outlined ? "defaultBtn outlined" : "defaultBtn"} onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};
export default DefaultBtn;
