import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Services from "../Pages/Services.jsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/resources" element={<Services/>}/>
                <Route path="/contact" element={<Services/>}/>
                <Route path="/careers" element={<Services/>}/>
            </Routes>
        </Router>
    );
};
export default AppRoutes;
