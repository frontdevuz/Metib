import React from "react";
import "./App.scss";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Clinics from "./pages/clinics/clinics";
import Doctors from "./pages/doctors/doctors";
import Location from "./pages/location/location";
import News from "./pages/news/news";
import Notfound from "./pages/notfound/notfound";
import Navbar from "./views/navbar/navbar";
import Footer from "./views/footer/footer";
// impo
// import Ai from "./pages/ai/ai";
import { Routes, Route } from "react-router-dom";
import Info from "./pages/moreInfo/moreInfo";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="clinics" element={<Clinics />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="location" element={<Location />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<Notfound />} />
        <Route path="info" element={<Info />} />
        {/* <Route path="ai" element={<Ai />} /> */}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
