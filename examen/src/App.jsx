import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Character from "./pages/Character.jsx";
import Male from "./pages/Male.jsx";
import Female from "./pages/Female.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css"
import Footer from "./components/Footer.jsx";
import Filter from "./components/Filter.jsx";

export default function App(){



    return(
        <Router>
            <Header/>           
            <div className="container">
                <Routes>
                    <Route path="/" element={<Character/>}/>
                    <Route path="/male" element={<Male />}/>
                    <Route path="/female" element={<Female />}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    )
}
