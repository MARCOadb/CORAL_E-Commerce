import "./style.scss";
import Modal from "../modal";
import profileImg from "../../assets/icon/bag.svg"; //placeholder
import ArrowSvg from "../../assets/icon/ArrowSvg";
import TextAndArrow from "../textAndArrow";

const nome = "Vicente"; //placeholder

const MobileDrawer = ({ setOpen, open }) => {
  return (
    <>
      <Modal setOpen={setOpen} open={open} />
      <div className={!open ? "drawer" : "drawer drawerOpen"}>
        {open && (
          <>
            <div className="profileDiv">
              <div>
                <img src={profileImg} className="imgOutline" alt="nome"></img>
                <span>{`Hello, ${nome}`}</span>
              </div>
              <ArrowSvg stroke="black" x={-90} />
            </div>
            <div className="separador"></div>
            <div className="subTitle">
              <span>Top Categories</span>
            </div>
            <div className="listContainer">
              <TextAndArrow x={-90} text="Skincare" />
              <TextAndArrow x={-90} text="Apparels" />
              <TextAndArrow x={-90} text="Jwellery" />
              <TextAndArrow x={-90} text="Handbags" />
              <TextAndArrow x={-90} text="Eyeware" />
              <TextAndArrow x={-90} text="Fragrance" />
              <TextAndArrow x={-90} text="Watches" />
              <TextAndArrow x={-90} text="About" />
            </div>
            <div className="separador"></div>
            <div className="subTitle">
              <span>Contact Us</span>
            </div>
            <div className="listContainer contact">
              <TextAndArrow stroke="black" x={-90} text="Help & Support" />
              <TextAndArrow stroke="black" x={-90} text="Feedback & Suggestions" />
              <TextAndArrow stroke="black" x={-90} text="Visit Wbsites" />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default MobileDrawer;
