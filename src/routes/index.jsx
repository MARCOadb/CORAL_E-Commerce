import { Route, Routes } from "react-router-dom";
import Private from "./Private";
import About from "../pages/About";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Checkout from "../pages/Checkout";
import Bag from "../pages/Bag";
import Profile from "../pages/Profile";
//import Test from "../pages/Test";
import Login from "../pages/Login";
import useBreakpoint from "../hooks/useBreakPoint";
import ProductPage from "../pages/Product";
import ProductRegister from "../pages/ProductsRegister";
import Search from "../pages/Search";
import NotFound from "../pages/notFound";
//import Ratings from '../pages/Ratings'

export default function RoutesApp() {
  const { phone, desktop } = useBreakpoint();
  return (
    <Routes>
      {desktop ? (
        <>
          <Route
            path={`/CORAL_E-Commerce/home/profile`}
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
          <Route path={`/home/:category`} element={<Categories />} />
          <Route path={`/about/:category`} element={<Categories />} />
          <Route path={`/checkout`} element={<Checkout />} />
          <Route path={`/:category/:id`} element={<ProductPage />} />
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
      <Route path="/CORAL_E-Commerce/" element={<Home />} />
      <Route path="/CORAL_E-Commerce/about" element={<About />} />
      <Route path="/test" element={<ProductRegister />} />
      <Route path="/CORAL_E-Commerce/login" element={<Login />} />
      <Route
        path="/bag"
        element={
          <Private>
            <Bag />
          </Private>
        }
      />
      <Route path="/CORAL_E-Commerce/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/CORAL_E-Commerce/checkout" element={<Checkout />} />
      <Route path="/CORAL_E-Commerce/product" element={<ProductPage />} />
      <Route path="/CORAL_E-Commerce/test" element={<ProductRegister />} />
      <Route path="/CORAL_E-Commerce/login" element={<Login />} />
      <Route path="/CORAL_E-Commerce/search/:searchValue" element={<Search />} />
      {/* <Route path={'/ratings'} element={<Ratings />} />    vai ser: category/id_do_produto/ratings   */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
