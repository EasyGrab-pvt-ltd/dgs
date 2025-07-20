import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Services from "../Pages/Services.jsx";
import Resources from "../Pages/Resources.jsx";
import ContactUs from "../Pages/ContactUs.jsx";
import BlogInsights from "../Pages/BlogInsights.jsx";
import Careers from "../Pages/Careers.jsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/resources" element={<Resources/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/blog" element={<BlogInsights/>}/>
                <Route path="/careers" element={<Careers/>}/>
            </Routes>
        </Router>
    );
};
export default AppRoutes;
