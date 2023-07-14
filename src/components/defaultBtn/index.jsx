import "./style.scss";
const DefaultBtn = ({ children, outlined, onClick }) => {
  return (
    <div className={outlined ? "defaultBtn outlined" : "defaultBtn"} onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};
export default DefaultBtn;
