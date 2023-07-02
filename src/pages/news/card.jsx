import React from 'react'
import metib__news from "../../assets/images/svg/metib__news.svg";
import metib__molecula from "../../assets/images/svg/metib__bg-molecula.svg";

const Card = ({news}) => {
    return (
        <div  className="news__card">
            <img src={metib__molecula} alt="This is a metib molecula img" className="news__img" />
            <div className="news__card-top">
                <img
                    src={metib__news}
                    alt="This is a news card img"
                    className="news__card-img"
                />
                <span className="news__span">{news.number}</span>
            </div>
            <div className="news__card-bottom">
                <h2 className="news__title">
                    Shifoxonamizning so'ngi yangliklari
                </h2>
                <p className="news__text">
                    Risus fringilla curabitur dui nibh ipsum velit lacus.
                    Integer morbi massa libero ultrices elit congue ac orci.
                </p>
            </div>
        </div>
    )
}

export default Card