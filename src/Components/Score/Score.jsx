import * as React from 'react';
import S from './Score.module.scss'
import {useDispatch, useSelector} from "react-redux";
import bols from '../../assets/img/bols/1.webp'
import {useEffect} from "react";
import {resetSpeed} from "../../store/gameParamsSlice/gameParamsSlice.ts";

export const Score = () => {
    const score = useSelector(state => state.playerLine.player.score)
    const dispatch = useDispatch()
    console.log(score)
    useEffect(() => {
        if (score === 10) {
            dispatch(resetSpeed({speed: 4.5, spawn: 1500}))
        }
        if (score === 20) {
            dispatch(resetSpeed({speed: 4, spawn: 1500}))
        }
        if (score === 30) {
            dispatch(resetSpeed({speed: 3.6, spawn: 1400}))
        }
        if (score === 40) {
            dispatch(resetSpeed({speed: 3, spawn: 1200}))
        }
        if (score === 50) {
            dispatch(resetSpeed({speed: 2.7, spawn: 1100}))
        }
        if (score === 60) {
            dispatch(resetSpeed({speed: 2.4, spawn: 950}))
        }
        if (score === 100) {
            dispatch(resetSpeed({speed: 1.5, spawn: 750}))
        }
    }, [score])
    return (
        <div className={S.body}>
            <div className={S.score}>

                {score}
            </div>
            <div className={S.imgBox}>

                <img src={bols} alt=""/>
            </div>
        </div>
    );
};