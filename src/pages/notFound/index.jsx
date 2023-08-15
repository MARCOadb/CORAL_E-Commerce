import { useLocation, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import notFound from "../../assets/pics/Search/searchNotFound.png";
import DefaultBtn from "../../components/defaultBtn";
const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.notFoundContainer}>
        <img src={notFound} alt="" />
        <div className={styles.txtContainer}>
          <span className="display-large ">
            <span className="text-primary">404. </span>That's an error
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="display-small ">The requested URL {location.pathname} was not found on this server.</span>
            <span className="display-small ">That’s all we know.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DefaultBtn width={"70%"} onClick={() => navigate("/")}>
              <span className="display-small">Go back to Home</span>
            </DefaultBtn>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
