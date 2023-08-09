import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import ChevronRightSmallsvg from "../../assets/icon/ChevronRightSmallsvg";

const Breadcrump = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = ({ category, path }) => {
    if (path && category) {
      navigate(`/${path}/${category}`, {
        state: {
          path,
          category,
        },
      });
    } else if (path) {
      navigate(`/${path != "home" ? path : ""}`, {
        state: {
          path,
        },
      });
    }
  };

  return (
    <div className="breadcrumbs">
      <>
        <span onClick={() => handleClick({ path: location.state?.path })}>{location.state?.path}</span>
        <ChevronRightSmallsvg />
        <span
          onClick={location.state?.product ? () => handleClick({ path: location.state?.path, category: location.state?.category }) : () => {}}
          style={location.state?.product ? {} : { color: "#626262" }}
        >
          {location.state?.category}
        </span>
        {location.state?.product && <ChevronRightSmallsvg />}
        <span style={{ color: "#626262" }}>{location.state?.product}</span>
      </>
    </div>
  );
};

export default Breadcrump;
