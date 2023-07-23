import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import getCategoryById from "../../services/getCategoryById";
import { useEffect, useState } from "react";
import getProductById from "../../services/getProductById";
import ChevronRightSmallsvg from "../../assets/icon/ChevronRightSmallsvg"


const Breadcrump = ({idCategory, idProduct}) => {
  const location = useLocation();
  const [category, setCategory] = useState(null);
  const [label, setLabel] = useState(null);
  const [loading, setLoading] = useState(false);
  const breadCrump = async (idCategory, idProduct) => {
    setLoading(true);
    if(idProduct){
      const category = await getCategoryById(idCategory);
      const product = await getProductById(idProduct);
      return ({
        category : category.name,
        product : product.name, 
      })
    }
    else if(idCategory){
      const category = await getCategoryById(idCategory);
      return ({
        category : category.name,
      })
    }
    
  };
  useEffect(() => {
    breadCrump(idCategory,idProduct)

      .then((data) => {
        setCategory(data?.category);
        setLabel(data?.product);
      })
      
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();
  const handlePage = () => {
    navigate(page);
  };
  const handleCategory = () => {
    navigate(category);
  }
  return (
    <div className="breadcrumbs">
    <>
      <div onClick={handlePage}>{page}</div>
      <ChevronRightSmallsvg />
      <div onClick={label?(handleCategory):("")} style={label?({}):({ color: "#626262" })}>{category}</div>
      {label && <ChevronRightSmallsvg />}
      <div style={{ color: '#626262' }}>{label}</div>
    </>
</div>

  );
};

export default Breadcrump;
