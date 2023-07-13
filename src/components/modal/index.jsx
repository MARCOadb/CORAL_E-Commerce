import "./style.scss";

const Modal = ({ setOpen, open }) => {
  return <div className={!open ? "opacity" : "opacity opacityOpen"} onTouchStart={() => open && setOpen(false)}></div>;
};
export default Modal;
