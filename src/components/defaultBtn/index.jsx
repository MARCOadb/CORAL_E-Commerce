import "./style.scss";

/*
Props
  {
    icon?: ReactNode *Svg*;
    onClick?: () => void;
    outlined?: true | false;
    id?: String;
  }
*/

const DefaultBtn = ({ children, outlined, onClick, icon, id }) => {
  return (
    <div id={id && id} className={outlined ? `defaultBtn outlined` : `defaultBtn`} onClick={onClick}>
      {icon}
      <span>{children}</span>
    </div>
  );
};
export default DefaultBtn;
