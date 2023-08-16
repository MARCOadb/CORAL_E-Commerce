import "./style.scss";
import Modal from "../modal";
import profileImg from "../../assets/pics/Login/profile-default.png"; //placeholder
import ArrowSvg from "../../assets/icon/ArrowSvg";
import TextAndArrow from "../textAndArrow";
import { useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const MobileDrawer = ({ setOpen, open }) => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const goToCategory = (category) => {
    navigate('/categories', {
      state: {
        categoryOpen: true,
        categoryName: category
      },
    });
  };

  return (
    <>
      <Modal setOpen={setOpen} open={open} />
      <div className={!open ? "drawer" : "drawer drawerOpen"}>
        {open && (
          <>
            <div className="profileDiv">
              <div>
                <img src={user?.profilePhoto === null ? profileImg : user?.profilePhoto} className="imgOutline" alt="nome"></img>
                <span>{`Hello, ${user.firstName}`}</span>
              </div>
              <ArrowSvg stroke="black" x={-90} />
            </div>
            <div className="separador"></div>
            <div className="subTitle">
              <span>Top Categories</span>
            </div>
            <div className="listContainer">
              <TextAndArrow x={-90} text="Skincare" onClick={(() => goToCategory("Skincare"))} />
              <TextAndArrow x={-90} text="Apparels" onClick={(() => goToCategory("Apparels"))} />
              <TextAndArrow x={-90} text="Jewellery" onClick={(() => goToCategory("Jewellery"))} />
              <TextAndArrow x={-90} text="Handbags" onClick={(() => goToCategory("Handbags"))} />
              <TextAndArrow x={-90} text="Eyewear" onClick={(() => goToCategory("Eyewear"))} />
              <TextAndArrow x={-90} text="Fragrances" onClick={(() => goToCategory("Fragrances"))} />
              <TextAndArrow x={-90} text="Watches" onClick={(() => goToCategory("Watches"))} />
              <TextAndArrow x={-90} text="About" onClick={(() => navigate('/about'))} />
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
