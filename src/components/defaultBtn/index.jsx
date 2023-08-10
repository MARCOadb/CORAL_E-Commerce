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

const DefaultBtn = ({ children, outlined, onClick, icon, id, width, height }) => {
  return (
    <div id={id && id} className={outlined ? `defaultBtn outlined` : `defaultBtn`} onClick={onClick} style={{ width: width, height: height }}>
      {icon}
      <span>{children}</span>
    </div>
  );
};
export default DefaultBtn;
