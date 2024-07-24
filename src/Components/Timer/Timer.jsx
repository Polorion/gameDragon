import * as React from 'react';
import S from './Timer.module.scss'
import {setDisableGame, setGameEnd} from "../../store/gameParamsSlice/gameParamsSlice.ts";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const Timer = ({hours = 0, minutes = 2, seconds = 0}) => {
    const [paused, setPaused] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);

    const tick = () => {
        if (paused || over) return;

        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s == 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
        setPaused(false);
        setOver(false);
    };

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });
    const dispatch = useDispatch()
    useEffect(() => {
        if (over) {
            dispatch(setGameEnd(true))
        }
    })

    return (
        <div className={S.body}>
            <p>{`${m
                .toString()
                .padStart(1, '0')}:${s.toString().padStart(2, '0')}`}</p>
            {/*<div>{over ? "Time's up!" : ''}</div>*/}
            {/*<button onClick={() => setPaused(!paused)}>*/}
            {/*    {paused ? 'Resume' : 'Pause'}*/}
            {/*</button>*/}
            {/*<button onClick={() => reset()}>Restart</button>*/}
        </div>
    );
};