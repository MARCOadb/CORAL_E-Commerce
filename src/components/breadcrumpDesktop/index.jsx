import { useNavigate } from "react-router-dom";
import "./style.scss";
import ChevronRightSmallsvg from "../../assets/icon/ChevronRightSmallsvg";

const Breadcrump = ({ category, product, page }) => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate(`/${page}`);
  };
  const handleCategory = () => {
    // navigate(`/${page}/${category}`);
  };

  return (
    <div className="breadcrumbs">
      <>
        <span onClick={handlePage}>{page}</span>
        <ChevronRightSmallsvg />
        {/* <span onClick={product?(handleCategory):("")} style={product?({}):({ color: "#626262" })}>{category}</span> */}
        <span style={product ? {} : { color: "#626262" }}>{category}</span>
        {product && <ChevronRightSmallsvg />}
        <span style={{ color: "#626262" }}>{product}</span>
      </>
    </div>
  );
};

export default Breadcrump;
