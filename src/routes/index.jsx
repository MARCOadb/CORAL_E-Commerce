import { Route, Routes } from "react-router-dom";
import Private from "./Private";
import About from "../pages/About";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Bag from "../pages/Bag";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Login from "../pages/Login";
import useBreakpoint from "../hooks/useBreakPoint";
import ProductRegister from "../pages/ProductsRegister";

export default function RoutesApp() {
  const { phone, desktop } = useBreakpoint();
  return (
    <Routes>
      {desktop ? (
        <>
          <Route
            path={`/home/profile`}
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
          <Route path={`/home/:category`} element={<Categories />} />
          <Route path={`/about/:category`} element={<Categories />} />
        </>
      ) : (
        <>
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
          
        </>
      )}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<ProductRegister />} />
      <Route path="/login" element={<Login />} />
      <Route
            path="/bag"
            element={
              <Private>
                <Bag />
              </Private>
            }
          />
      {/* 
        Pagina de produtos
        <Route path={`/home/:category/:id`} element={<ProductPage />} />
        <Route path={`/about/:category/:id`} element={<ProductPage />} /> 
        */}
    </Routes>
  );
}
