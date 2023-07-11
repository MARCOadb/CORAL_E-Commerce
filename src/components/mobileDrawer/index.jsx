import "./style.scss";
import Modal from "../modal";

const MobileDrawer = ({ setOpen, open }) => {
  return (
    <>
      <Modal setOpen={setOpen} open={open} />
      <div className={!open ? "drawer" : "drawer drawerOpen"}>
        {open && (
          <>
            <div></div>
            <div className="separador"></div>
            <div>
              <h1>Top Categories</h1>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="separador"></div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default MobileDrawer;
