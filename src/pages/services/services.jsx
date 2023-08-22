import React from "react";
import "./servises.scss"
import { Link } from "react-router-dom";
import img from "./sImages/img.jpg"
import img1 from "./sImages/img1.jpg"
import img2 from "./sImages/img2.jpg"
import img3 from "./sImages/img3.jpg"
import img4 from "./sImages/img4.jpg"
import img5 from "./sImages/img5.jpg"
import img6 from "./sImages/img6.jpg"
import img7 from "./sImages/img7.jpg"
import Container from "../../components/container/container"

const Services = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="Servises-container">
          <div className="Servises__categories">
            <a href="#category1">FAMILY MEDICINE</a>
            <a href="#category2">WOMEN'S HEALTH</a>
            <a href="#category3">CHILDREN'S HEALTH</a>
            <a href="#category4">MEN'S HEALTH</a>
            <a href="#category5">CHRONIC DISEASE MANAGEMENT</a>
            <a href="#category6">PHYSICAL THERAPY</a>
            <a href="#category7">DENTISTRY</a>
            <a href="#category8">LABORATORY</a>
          </div>
          <div className="Servises-containerInit">
            <div className="category" id="category1">
              <h1 className="category__h1">FAMILY MEDICINE</h1>
              <img className="fMedicine__h1" src={img} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
            <div className="category" id="category2">
              <h1 className="category__h1">WOMEN'S HEALTH</h1>
              <img className="fMedicine__h1" src={img1} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
            <div className="category" id="category3">
              <h1 className="category__h1">CHILDREN'S HEALTH</h1>
              <img className="fMedicine__h1" src={img2} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
            <div className="category" id="category4">
              <h1 className="category__h1" >MEN'S HEALTH</h1>
              <img className="fMedicine__h1" src={img3} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
            <div className="category" id="category5">
              <h1 className="category__h1">CHRONIC DISEASE MANAGEMENT</h1>
              <img className="fMedicine__h1" src={img4} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
            <div className="category" id="category6">
              <h1 className="category__h1" >PHYSICAL THERAPY</h1>
              <img className="fMedicine__h1" src={img5} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
            <div className="category" id="category7">
              <h1 className="category__h1" >denistry</h1>
              <img className="fMedicine__h1" src={img6} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a te
                am approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
            <div className="category" id="category8">
              <h1 className="category__h1">laboratory</h1>
              <img className="fMedicine__h1" src={img7} alt="" />
              <p className="fMedicine__p">
                The Tashkent International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
              </p>
              <p className="fMedicine__p1">
                TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we'll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
              </p>
              <p className="fMedicine__2">
                <p className="fMedicine__languages">Languages:</p>
                All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Services;