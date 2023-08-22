import React from "react";
import "./moreInfo.scss"
import clinikImage from "./images/clinic.png"
import clinikImage1 from "./images/clinic1.png"
import clinikImage2 from "./images/clinic2.png"
import clinikImage3 from "./images/clinic3.png"
import clinikImage4 from "./images/clinic4.png"
import clinikImage5 from "./images/clinic5.png"
import adressIcon from "./images/adressicon.png"
import phoneIcon from "./images/phoneIcon.png"
import metib__star from "../../assets/images/icons/metib__star.svg"
const Info = () => {
    return (
        <React.Fragment>
            <div className="MoreInfo-container">
                <div className="infos">
                    <img className="clinikImage" src={clinikImage} alt="clinikImage" />
                    <div className="startimages">
                        <div className="starImagesInit">
                            <img className="star" src={metib__star} alt="metib__star" />
                            <img className="star"  src={metib__star} alt="metib__star" />
                            <img  src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                        </div>
                    </div>
                    <p className="MoreInfo__p1">Medical Center Focus</p>
                    <p className="MoreInfo__p2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic reprehenderit recusandae nisi, eaque, voluptates tempora porro qui aspernatur error accusamus modi nesciunt quam dolorem quis sequi laudantium quasi numquam! Dolorem reprehenderit ipsam maiores. Quas velit pariatur labore fugiat facilis porro eos id culpa, facere tenetur dolore nihil expedita recusandae!
                    </p>
                    <div className="MoreInfo__adress">
                        <div className="adress__p">
                            <img className="adressIcon" src={adressIcon} alt="adressIcon" />
                            <p className="adress__p1">Adress:</p>
                        </div>
                        <p className="adress__p2">170100, Uzbekistan, Andijan region, City: Andijan, Street Mashrab, block of flats 4th, 38B</p>
                        <div className="attractions__p">
                            Attraction:
                            <p className="attractions__p1">
                                MICROCREDITBANK. ANDIZHAN REGIONAL BRANCH,
                                ANDIJAN FAMILY POLYCLINIC #8.
                            </p>
                        </div>
                        <hr />
                        <div className="phoneNumber">
                            <img src={phoneIcon} className="phoneIcon" alt="phone number" />
                            +998 (95) 200-33-03
                        </div>
                    </div>
                </div>
                <div className="infos">
                    <img className="clinikImage" src={clinikImage1} alt="clinikImage1" />
                    <div className="startimages">
                        <div className="starImagesInit">
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                        </div>
                    </div>
                    <p className="MoreInfo__p1">Sog'lom turmush</p>
                    <p className="MoreInfo__p2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic reprehenderit recusandae nisi, eaque, voluptates tempora porro qui aspernatur error accusamus modi nesciunt quam dolorem quis sequi laudantium quasi numquam! Dolorem reprehenderit ipsam maiores. Quas velit pariatur labore fugiat facilis porro eos id culpa, facere tenetur dolore nihil expedita recusandae!
                    </p>
                    <div className="MoreInfo__adress">
                        <div className="adress__p">
                            <img className="adressIcon" src={adressIcon} alt="adressIcon" />
                            <p className="adress__p1">Adress:</p>
                        </div>
                        <p className="adress__p2">170100, Uzbekistan, Andijan region, City: Andijan, Street Mashrab, block of flats 4th, 38B</p>
                        <div className="attractions__p">
                            Attraction:
                            <p className="attractions__p1">
                                MICROCREDITBANK. ANDIZHAN REGIONAL BRANCH,
                                ANDIJAN FAMILY POLYCLINIC #8.
                            </p>
                        </div>
                        <hr />
                        <div className="phoneNumber">
                            <img src={phoneIcon} className="phoneIcon" alt="phone number" />
                            +998 (95) 200-33-03
                        </div>
                    </div>

                </div>
                <div className="infos">
                    <img className="clinikImage" src={clinikImage2} alt="clinikImage2" />
                    <div className="startimages">
                        <div className="starImagesInit">
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                        </div>
                    </div>
                    <p className="MoreInfo__p1">Diyor</p>
                    <p className="MoreInfo__p2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic reprehenderit recusandae nisi, eaque, voluptates tempora porro qui aspernatur error accusamus modi nesciunt quam dolorem quis sequi laudantium quasi numquam! Dolorem reprehenderit ipsam maiores. Quas velit pariatur labore fugiat facilis porro eos id culpa, facere tenetur dolore nihil expedita recusandae!
                    </p>
                    <div className="MoreInfo__adress">
                        <div className="adress__p">
                            <img className="adressIcon" src={adressIcon} alt="adressIcon" />
                            <p className="adress__p1">Adress:</p>
                        </div>
                        <p className="adress__p2">170100, Uzbekistan, Andijan region, City: Andijan, Street Mashrab, block of flats 4th, 38B</p>
                        <div className="attractions__p">
                            Attraction:
                            <p className="attractions__p1">
                                MICROCREDITBANK. ANDIZHAN REGIONAL BRANCH,
                                ANDIJAN FAMILY POLYCLINIC #8.
                            </p>
                        </div>
                        <hr />
                        <div className="phoneNumber">
                            <img src={phoneIcon} className="phoneIcon" alt="phone number" />
                            +998 (95) 200-33-03
                        </div>
                    </div>
                </div>
                <div className="infos">
                    <img className="clinikImage" src={clinikImage3} alt="clinikImage3" />
                    <div className="startimages">
                        <div className="starImagesInit">
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                        </div>
                    </div>
                    <p className="MoreInfo__p1">Fetus medicine</p>
                    <p className="MoreInfo__p2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic reprehenderit recusandae nisi, eaque, voluptates tempora porro qui aspernatur error accusamus modi nesciunt quam dolorem quis sequi laudantium quasi numquam! Dolorem reprehenderit ipsam maiores. Quas velit pariatur labore fugiat facilis porro eos id culpa, facere tenetur dolore nihil expedita recusandae!
                    </p>
                    <div className="MoreInfo__adress">
                        <div className="adress__p">
                            <img className="adressIcon" src={adressIcon} alt="adressIcon" />
                            <p className="adress__p1">Adress:</p>
                        </div>
                        <p className="adress__p2">170100, Uzbekistan, Andijan region, City: Andijan, Street Mashrab, block of flats 4th, 38B</p>
                        <div className="attractions__p">
                            Attraction:
                            <p className="attractions__p1">
                                MICROCREDITBANK. ANDIZHAN REGIONAL BRANCH,
                                ANDIJAN FAMILY POLYCLINIC #8.
                            </p>
                        </div>
                        <hr />
                        <div className="phoneNumber">
                            <img src={phoneIcon} className="phoneIcon" alt="phone number" />
                            +998 (95) 200-33-03
                        </div>
                    </div>
                </div>
                <div className="infos">
                    <img className="clinikImage" src={clinikImage4} alt="clinikImage4" />
                    <div className="startimages">
                        <div className="starImagesInit">
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                        </div>
                    </div>
                    <p className="MoreInfo__p1">Golden Vodiy</p>
                    <p className="MoreInfo__p2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic reprehenderit recusandae nisi, eaque, voluptates tempora porro qui aspernatur error accusamus modi nesciunt quam dolorem quis sequi laudantium quasi numquam! Dolorem reprehenderit ipsam maiores. Quas velit pariatur labore fugiat facilis porro eos id culpa, facere tenetur dolore nihil expedita recusandae!
                    </p>
                    <div className="MoreInfo__adress">
                        <div className="adress__p">
                            <img className="adressIcon" src={adressIcon} alt="adressIcon" />
                            <p className="adress__p1">Adress:</p>
                        </div>
                        <p className="adress__p2">170100, Uzbekistan, Andijan region, City: Andijan, Street Mashrab, block of flats 4th, 38B</p>
                        <div className="attractions__p">
                            Attraction:
                            <p className="attractions__p1">
                                MICROCREDITBANK. ANDIZHAN REGIONAL BRANCH,
                                ANDIJAN FAMILY POLYCLINIC #8.
                            </p>
                        </div>
                        <hr />
                        <div className="phoneNumber">
                            <img src={phoneIcon} className="phoneIcon" alt="phone number" />
                            +998 (95) 200-33-03
                        </div>
                    </div>
                </div>
                <div className="infos">
                    <img className="clinikImage" src={clinikImage5} alt="clinikImage5" />
                      <div className="startimages">
                        <div className="starImagesInit">
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                            <img src={metib__star} alt="metib__star" />
                        </div>
                    </div>
                    <p className="MoreInfo__p1">Zam-zam med servis</p>
                    <p className="MoreInfo__p2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, hic reprehenderit recusandae nisi, eaque, voluptates tempora porro qui aspernatur error accusamus modi nesciunt quam dolorem quis sequi laudantium quasi numquam! Dolorem reprehenderit ipsam maiores. Quas velit pariatur labore fugiat facilis porro eos id culpa, facere tenetur dolore nihil expedita recusandae!
                    </p>
                    <div className="MoreInfo__adress">
                        <div className="adress__p">
                            <img className="adressIcon" src={adressIcon} alt="adressIcon" />
                            <p className="adress__p1">Adress:</p>
                        </div>
                        <p className="adress__p2">
                            170100, Uzbekistan, Andijan region, City: Andijan, Street Mashrab, block of flats 4th, 38B
                        </p>
                        <div className="attractions__p">
                            Attraction:
                            <p className="attractions__p1">
                                MICROCREDITBANK. ANDIZHAN REGIONAL BRANCH,
                                ANDIJAN FAMILY POLYCLINIC #8.
                            </p>
                        </div>
                        <hr />
                        <div className="phoneNumber">
                            <img src={phoneIcon} className="phoneIcon" alt="phone number" />
                            +998 (95) 200-33-03
                        </div>
                    </div>
                </div>
                <button>More</button>
            </div>
        </React.Fragment>
    );
}

export default Info;