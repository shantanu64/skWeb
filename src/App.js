import AboutUs from "./components/AboutUs/AboutUs";
import ContactHome from "./components/ContactUs/contactHome";
import ContactUs from "./components/ContactUs/contactUs";
import Home from "./components/Home/Home";
import LgNav from "./components/NavBar/navBar";
import Services from "./components/Services/Services";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Career from "./components/Career/career"
import JobDetails from "./components/Career/JobDetails";
import ClusterOfficer from "./components/Career/ClusterOfficer";
import DevelopmentOfficer from "./components/Career/DevelopmentOfficer";
import DealershipManager from "./components/Career/DealershipManager";
import AgricultureAssistant from "./components/Career/AgricultureAssistant";
import DigitalMediaMarketer from "./components/Career/DigitalMediaMarketer";
import Entomologist from "./components/Career/Entomologist";
import Marketing from "./components/Career/Marketing";
import Strategic from "./components/Career/Strategic";
import BusinessAnalyst from "./components/Career/BusinessAnalyst";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" name="Home" element={<Home />} />
        <Route exact path="/aboutUs" name="About Us" element={<AboutUs />} />
        <Route exact path="/services" name="Services" element={<Services />} />
        <Route exact path="/career" name="Career" element={<Career />} />
        <Route exact path="/JobDetails" name="details" element={<JobDetails />} />
        <Route exact path="/career/:id?" name="details" element={<ClusterOfficer />} />
        <Route exact path="/DevelopmentOfficer" name="details" element={<DevelopmentOfficer />} />
        <Route exact path="/DealershipManager" name="details" element={<DealershipManager />} />
        <Route exact path="/AgricultureAssistant" name="details" element={<AgricultureAssistant />} />
        <Route exact path="/DigitalMediaMarketer" name="details" element={<DigitalMediaMarketer />} />
        <Route exact path="/Entomologist" name="details" element={<Entomologist />} />
        <Route exact path="/Marketing" name="details" element={<Marketing />} />
        <Route exact path="/Strategic" name="details" element={<Strategic />} />
        <Route exact path="/BusinessAnalyst" name="details" element={<BusinessAnalyst />} />
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
