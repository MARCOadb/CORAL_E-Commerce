import ArrowSvg from "../../assets/icon/ArrowSvg";
import "./style.scss";
const TextAndArrow = ({ stroke, width, height, x, text, onClick }) => {
  return (
    <div className="container" onClick={onClick && onClick} >
      <span>{`${text}`}</span>
      <ArrowSvg stroke={stroke && stroke} width={width && width} height={height && height} x={x && x} />
    </div>
  );
};
export default TextAndArrow;
