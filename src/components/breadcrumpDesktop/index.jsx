import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import ChevronRightSmallsvg from "../../assets/icon/ChevronRightSmallsvg";

const Breadcrump = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.state.itemName) {
      navigate(`/${location.state.path}/${location.state.category}`, {
        state: {
          path: location.state.path,
          category: location.state.category,
        },
      });
    } else {
      navigate(`/${location.state.path != "home" ? location.state.path : ""}`, {
        state: {
          path: location.state.path,
        },
      });
    }
  };

  return (
    <div className="breadcrumbs">
      <>
        <span onClick={handleClick}>{location.state?.path}</span>
        <ChevronRightSmallsvg />
        <span onClick={location.state?.itemName ? handleClick : () => {}} style={location.state?.itemName ? {} : { color: "#626262" }}>
          {location.state?.category}
        </span>
        {location.state?.itemName && <ChevronRightSmallsvg />}
        <span style={{ color: "#626262" }}>{location.state?.itemName}</span>
      </>
    </div>
  );
};

export default Breadcrump;
