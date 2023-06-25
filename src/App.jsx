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
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services" element={<Clinics />} />
        <Route path="services" element={<Doctors />} />
        <Route path="services" element={<Location />} />
        <Route path="services" element={<News />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
