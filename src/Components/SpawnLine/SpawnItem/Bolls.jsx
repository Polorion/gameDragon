import * as React from 'react';
import S from './SpawnItem.module.scss'
import {useState} from "react";

export const Bolls = (props) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1)
    return (
        <div className={S.bools}>

            <img
                style={{
                    animationDuration: `${randomNumber}s`
                }}
                src={props.bols.boll} alt=""/>
        </div>
    );
};