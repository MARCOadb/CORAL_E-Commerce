import "./style.scss";
const DefaultBtn = ({ text, whiteBtn }) => {
  return (
    <div className={whiteBtn ? "defaultBtn whiteBtn" : "defaultBtn"}>
      <span>{text}</span>
    </div>
  );
};
export default DefaultBtn;
