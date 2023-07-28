import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import ChevronRightSmallsvg from "../../assets/icon/ChevronRightSmallsvg";

const Breadcrump = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategory = () => {
    // navigate(`/${page}/${category}`);
  };

  return (
    <div className="breadcrumbs">
      <>
        <span>{location.state?.path}</span>
        <ChevronRightSmallsvg />
        <span style={location.state?.product ? {} : { color: "#626262" }}>{location.state?.category}</span>
        {location.state?.product && <ChevronRightSmallsvg />}
        <span style={{ color: "#626262" }}>{location.state?.product}</span>
      </>
    </div>
  );
};

export default Breadcrump;
