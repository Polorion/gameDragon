import * as React from 'react';
import S from './StartField.module.scss'
import Stars from '../../assets/img/starts.webp'
import Title from '../../assets/img/title.webp'
import {useState} from "react";
import {ChoiceField} from "./ChoiceField/ChoiceField.jsx";
import FullScreen from "../../assets/img/fulls.png";

export const StartField = (props) => {
    const toggle = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const [choice, setChoice] = useState(false)

    return (
        <div className={S.body}>
            <button className={S.Full} onClick={toggle}><img src={FullScreen} alt=""/></button>
            {!choice ? <div>

                <div className={S.title}>
                    <div className={S.allTitle}>
                        <div className={S.stars}>
                            <img src={Stars} alt='Stars'/>
                            <img src={Stars} alt='Stars'/>
                            <img src={Stars} alt='Stars'/>
                        </div>

                        <img className={S.titleText} src={Title} alt=""/>
                        <div className={S.stars}>
                            <img src={Stars} alt='Stars'/>
                            <img src={Stars} alt='Stars'/>
                            <img src={Stars} alt='Stars'/>
                        </div>
                    </div>
                </div>
                <div className={S.bodyText}>
                    <div className={S.welcome}>
                        <b>

                            Добро Пожаловать <br/> в игру от ITALY&CO.
                        </b>
                    </div>
                    <div className={S.subtitleWelcome}>
                        Собирайте новогодние игрушки <br/> на праздничную ёлку и обменивайте <br/> их на бонусы в
                        программе
                        лояльности!
                    </div>
                    <div className={S.buttonBox}>

                        <button onClick={() => {
                            props.play()
                            setChoice(true)
                        }} className={S.btnStart}>играть
                        </button>
                    </div>
                </div>
            </div> : <ChoiceField start={props.setStart}/>}

        </div>
    );
};