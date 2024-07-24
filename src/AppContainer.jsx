import * as React from 'react';
import App from "./App.jsx";
import {useEffect, useRef} from "react";
import audio from '../src/assets/audio/muz.mp3'
import {useDispatch, useSelector} from "react-redux";

export const AppContainer = () => {


    const audioRef = useRef();
    const playSound = () => {
        audioRef.current.play();
        audioRef.current.volume = 0.1;
    };
    const stopSound = () => {
        audioRef.current.pause();
    };


    // useEffect(() => {
    //     const qwe = setInterval(() => {
    //         console.log(speedGame)
    //         console.log(spawnGame)
    //         dispatch(speedGameSet(speedGame - 0.1))
    //         dispatch(spawnGameSet(spawnGame - 300))
    //     }, 2000)
    //     return (() => {
    //         clearInterval(qwe)
    //     })
    // }, [])
    return (
        <div className={'body'}>
            <audio loop="loop" ref={audioRef} src={audio}></audio>

            <App control={{playSound, stopSound}}/>
        </div>
    );
};