import { Route, Routes, BrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Bag from "../pages/Bag";
import Profile from "../pages/Profile";
import Test from "../pages/Test";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
