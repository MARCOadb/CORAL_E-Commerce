import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import getCategoryById from "../../services/getCategoryById";
import { useEffect, useState } from "react";

const Breadcrump = () => {
  const location = useLocation();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const callCategory = async (id) => {
    setLoading(true);
    const cat = await getCategoryById(id);
    return cat.name;
  };
  useEffect(() => {
    callCategory()
      .then((data) => {
        setCategory(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +"/${crumb}";
      return (
        <div className="crumb" key={crumb}>
          <Link to {...currentLink}>
            {crumb}
          </Link>
        </div>
      );
    });
  return (
    <div className="breadcrumbs">
      {crumbs}
      <span></span>
    </div>
  );
};

export default Breadcrump;
