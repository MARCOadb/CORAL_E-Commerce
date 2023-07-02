import { Route, Routes, BrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}