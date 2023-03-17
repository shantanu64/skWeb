import AboutUs from "./components/AboutUs/AboutUs";
import ContactHome from "./components/ContactUs/contactHome";
import ContactUs from "./components/ContactUs/contactUs";
import Home from "./components/Home/Home";
import LgNav from "./components/NavBar/navBar";
import Services from "./components/Services/Services";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" name="Home" element={<Home />} />
        <Route exact path="/aboutUs" name="About Us" element={<AboutUs />} />
        <Route exact path="/services" name="Services" element={<Services />} />
        <Route
          exact
          path="/contactUs"
          name="Contact Us"
          element={<ContactHome />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
