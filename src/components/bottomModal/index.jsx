import DefaultBtn from "../defaultBtn";
import Modal from "../modal";
import "./style.scss";

/*PROPS
  {
    title?: String;
    headerSuffix?: ReactNode;
    footerPrefix?: ReactNode;
    buttons?:ReactNode;
    setOpen:()=>void;
    open:Boolean;
  }
*/

const BottomModal = ({ title, children, headerSuffix, footerPrefix, buttons, setOpen, open }) => {
  return (
    <>
      <Modal setOpen={setOpen} open={open}></Modal>

      <div className={!open ? "bottomModal" : "bottomModal bottomModalOpen"}>
        {(title || headerSuffix) && (
          <div className="bottomHeader">
            <div className="bottomHeaderContainer text-low-emphasis title-regular">
              {title}
              {headerSuffix}
            </div>
          </div>
        )}
        {children}
        {(!!buttons?.length || footerPrefix) && (
          <div className="bottomFooter">
            {footerPrefix}
            {buttons?.map((item, index) => (
              <DefaultBtn outlined={item.outlined} key={index} onClick={item.onClick}>
                {item.text}
              </DefaultBtn>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default BottomModal;
