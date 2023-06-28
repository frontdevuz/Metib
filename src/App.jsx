import React from "react";
import "./App.scss";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Clinics from "./pages/clinics/clinics";
import Doctors from "./pages/doctors/doctors";
import Location from "./pages/location/location";
import News from "./pages/news/news";
// import Ai from "./pages/ai/ai";
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
        <Route path="clinics" element={<Clinics />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="location" element={<Location />} />
        <Route path="news" element={<News />} />
        {/* <Route path="ai" element={<Ai />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
