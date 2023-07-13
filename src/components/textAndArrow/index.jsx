import ArrowSvg from "../../assets/icon/ArrowSvg";
import "./style.scss";
const TextAndArrow = ({ stroke, width, height, x, text }) => {
  return (
    <div className="container">
      <span>{`${text}`}</span>
      <ArrowSvg stroke={stroke && stroke} width={width && width} height={height && height} x={x && x} />
    </div>
  );
};
export default TextAndArrow;
