import "./style.scss";
const IconBtn = ({ children, onClick }) => {
  return (
    <div className="iconBtn" onClick={onClick}>
      {children}
    </div>
  );
};
export default IconBtn;
