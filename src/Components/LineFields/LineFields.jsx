import * as React from 'react';
import S from './LineFields.module.scss'
import {SpawnLine} from "../SpawnLine/SpawnLine.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addItem, setIntervalSpawn} from "../../store/spawnLineSlice/spawnLineSlice.js";

export const LineFields = () => {
    const leftSpawn = useSelector(state => state.spawnLine.lines.leftSpawn)
    const centerSpawn = useSelector(state => state.spawnLine.lines.centerSpawn)
    const rightSpawn = useSelector(state => state.spawnLine.lines.rightSpawn)
    const startInterval = useSelector(state => state.spawnLine.interval)
    const startIntervalNumber = useSelector(state => state.spawnLine.intervalNumberSpawn)
    const spawnGame = useSelector(state => state.params.speedSpawn)
    const dispatch = useDispatch()

    useEffect(() => {
        if (startInterval) {
            const q = setInterval(() => {
                dispatch(addItem(Math.floor(Math.random() * 3) + 1))
            }, spawnGame)
            dispatch(setIntervalSpawn(q))
        }
        return () => {
            clearInterval(startIntervalNumber)
        }
    }, [spawnGame])
    // useEffect(() => {
    //     let interval
    //     if (startInterval) {
    //         interval = setInterval(() => {
    //             dispatch(setPosition())
    //         }, speedGame)
    //     } else {
    //         clearInterval(interval)
    //     }
    //
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [startInterval])
    return (
        <div className={S.body}>
            <SpawnLine positionLine={'leftSpawn'} position={1} spawn={leftSpawn}/>
            <SpawnLine positionLine={'centerSpawn'} position={2} spawn={centerSpawn}/>
            <SpawnLine positionLine={'rightSpawn'} position={3} spawn={rightSpawn}/>
        </div>
    );
};