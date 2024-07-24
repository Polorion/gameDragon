import {useEffect, useRef, useState} from 'react'

import {useDispatch, useSelector} from "react-redux";
import {heightContainerSet, setResize} from "./store/gameParamsSlice/gameParamsSlice.ts";
import {LineFields} from "./Components/LineFields/LineFields.jsx";
import {PlayerField} from "./Components/PlayerField/PlayerField";
import S from './App.module.scss'
import {StartField} from "./Components/StartField/StartField.jsx";
import {Score} from "./Components/Score/Score.jsx";
import {Timer} from "./Components/Timer/Timer.jsx";
import {GameEnd} from "./Components/GameEnd/GameEnd.jsx";
import * as React from "react";
import FullScreen from './assets/img/fulls.png'

function App(props) {
    const containerRef = useRef()
    const [height, setHeight] = useState(10)
    const [start, setStart] = useState(false)
    const dispatch = useDispatch()
    const gameEnd = useSelector(state => state.params.gameEnd)


    useEffect(() => {
        const windowRaz = () => {
            // setHeight(containerRef.current.clientWidth);
            ;
            setHeight(window.innerWidth)
            setTimeout(() => {
                dispatch(heightContainerSet(containerRef.current.getBoundingClientRect().height))
                dispatch(setResize())
            }, 100)
        };
        windowRaz()
        window.addEventListener("resize", windowRaz);
        window.addEventListener("orientationchange", windowRaz);
        return () => {
            window.removeEventListener("resize", windowRaz);
            window.removeEventListener("orientationchange", windowRaz);
        };
    }, []);
    const toggle = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };


    if (gameEnd) {
        return (
            <div onClick={(e) => {
            }} className={S.app}>
                <div ref={containerRef} className={S.container} style={{height: height / 2.03}}>

                    <div className={S.games}>
                        <button className={S.Full} onClick={toggle}><img src={FullScreen} alt=""/></button>
                        <GameEnd/>
                    </div>
                </div>
            </div>

        );
    }


    return (
        <div onClick={(e) => {
        }} className={S.app}>
            <div ref={containerRef} className={S.container} style={{height: height / 2.03}}>


                {start ? <div className={S.game}>
                    {/*<button className={S.Full} onClick={toggle}><img src={FullScreen} alt=""/></button>*/}
                    <Score/>
                    <Timer/>
                    <LineFields/>
                    <PlayerField/>
                </div> : <StartField play={props.control.playSound} setStart={setStart}/>}

            </div>
        </div>

    );
}

export default App
