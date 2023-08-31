import { useLocation, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import notFound from "../../assets/pics/Search/searchNotFound.png";
import DefaultBtn from "../../components/defaultBtn";
import useBreakpoint from "../../hooks/useBreakPoint";
const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = useBreakpoint()
  return (
    <>
      <div className={styles.notFoundContainer}>
        <img src={notFound} alt="" />
        <div className={styles.txtContainer}>
          <span className={phone ? 'display-medium' : 'display-large'}>
            <span className="text-primary">404. </span>That's an error
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={phone ? 'body-medium' : 'display-medium'}>The requested URL <span style={{ textDecoration: 'underline' }}>{location.pathname}</span> was not found on this server.</span>
            <span className={phone ? 'body-medium' : 'display-medium'}>That’s all we know.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: '50px' }}>
            <DefaultBtn width={"70%"} onClick={() => navigate("/CORAL_E-Commerce/")}>
              <span className={phone ? 'body-medium' : 'display-medium'}>Go back to Home</span>
            </DefaultBtn>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
