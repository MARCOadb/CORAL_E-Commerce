import "./style.scss";

const Modal = ({ setOpen, open }) => {
  return <div className={!open ? "opacity" : "opacity opacityOpen"} onClick={() => open && setOpen(false)}></div>; //o onClick era um onTouchStart
};
export default Modal;
