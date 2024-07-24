import * as React from 'react';
import S from './PlayerField.module.scss'
import {Player} from "./Player/Player";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {heightPersonSet, setPositionTopPlayer} from "../../store/gameParamsSlice/gameParamsSlice.ts";

import {ReturnPlayer} from "../../helpers/chosePeson.js";

export const PlayerField = () => {
    const ref = useRef()
    const dispatch = useDispatch()
    const numberOwner = useSelector(state => state.playerLine.player.owner)
    const [q, w] = useState(1)
    useEffect(() => {
        const windowRaz = () => {
            // setHeight(containerRef.current.clientWidth);
            w(Math.random)
            dispatch(heightPersonSet(ref.current.getBoundingClientRect().height))
        };
        windowRaz()
        window.addEventListener("resize", windowRaz);
        window.addEventListener("orientationchange", windowRaz);
        return () => {
            window.removeEventListener("resize", windowRaz);
            window.removeEventListener("orientationchange", windowRaz);
        };
    }, []);
    useEffect(() => {
        dispatch(setPositionTopPlayer(ref.current.getBoundingClientRect().height))
        dispatch(heightPersonSet(ref.current.getBoundingClientRect().height))
    }, [q])
    const {left, center, right} = ReturnPlayer(Number(numberOwner))

    return (
        <div ref={ref} className={S.body}>
            <Player img={left} position={1} left={1}/>
            <Player img={center}  position={2} left={50}/>
            <Player img={right} position={3} left={100}/>

        </div>
    );
};