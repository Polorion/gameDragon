import * as React from 'react';
import S from './ChoiceField.module.scss'
import Slider from "react-slick";
import player1 from "../../../assets/img/players/1/2.webp";
import player2 from "../../../assets/img/players/2/2.webp";
import player3 from "../../../assets/img/players/3/2.webp";
import player4 from "../../../assets/img/players/4/2.png.webp";
import player5 from "../../../assets/img/players/5/2.png.webp";
import player6 from "../../../assets/img/players/6/2.png.webp";
import player7 from "../../../assets/img/players/7/2.png.webp";
import player8 from "../../../assets/img/players/8/2.png.webp";
import player9 from "../../../assets/img/players/9/2.png.webp";
import player10 from "../../../assets/img/players/10/2.png.webp";
import arrow from "../../../assets/img/arrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Persona from "./Persona/Persona.jsx";
import {useEffect, useState} from "react";
import {Returnlogo} from "../../../helpers/choiceLogo.js";

export const ChoiceField = (props) => {
    const [next, setNext] = useState(1)
    const [timer, setTimer] = useState(false)
    const img = [
        {img: player2, name: "2"},
        {img: player3, name: "3"},
        {img: player4, name: "4"},
        {img: player5, name: "5"},
        {img: player6, name: "6"},
        {img: player7, name: "7"},
        {img: player8, name: "8"},
        {img: player9, name: "9"},
        {img: player10, name: "10"},
    ];
    const startTimer = (number) => {
        setTimer(true)

        if (number === 1) {
            if (next >= 9) {
                setNext(1)
                setNext(prevState => prevState - 1)
            }

            setNext(prevState => prevState + 1)
        } else {
            if (next <= 0) {
                setNext(9)
            }
            setNext(prevState => prevState - 1)

        }
        setTimeout(() => {

            setTimer(prevState => false)
        }, 600)
    }

    function SampleNextArrow(props) {
        const {onClick} = props;
        return (
            <div
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: `45%`,
                    right: "5%",
                    zIndex: '111111',
                    width:'11%',
                }}
            >
                <button
                    className={`${S.arrow} ${timer && S.bisabled}`}
                    onClick={() => {
                        startTimer(1)
                    }}

                    title={"Дальше"}
                >
                    <img src={arrow} alt=""/>
                </button>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const {onClick} = props;
        return (
            <div
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: `45%`,
                    left: "5%",
                    zIndex: '111111',
                    width:'11%',

                }}
            >
                <button onClick={() => {
                    startTimer(2)
                }}
                        style={{transform: "rotate(180deg)"}}
                        className={`${S.arrow} ${timer && S.bisabled}`} title={"Назад"}>
                    <img src={arrow} alt=""/>
                </button>
            </div>
        );
    }

    var settings = {
        arrows: true,
        className: "center",
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0%",
        swipe: false,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,

    };


    const logo = Returnlogo(next)

    return (
        <div className={S.body}>
            <div className={S.logo}><img src={logo.img} alt=""/></div>

            <Slider {...settings}>
                {img.map((el, i) => {
                    return (
                        <Persona
                            el={el}
                            key={i}
                            img={el.img}
                            name={el.name}
                            start={props.start}
                        />
                    );
                })}
            </Slider>
        </div>

    );
};