import * as React from 'react';
import S from './SpawnItem.module.scss'
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllItem, deleteItem, deleteNotScale, setScale} from "../../../store/spawnLineSlice/spawnLineSlice.js";
import {setScore} from "../../../store/playerLineSlice/playerLineSlice.js";
import Bol1 from '../../../assets/img/bols/1.webp'
import Bol2 from '../../../assets/img/bols/2.webp'
import Bol3 from '../../../assets/img/bols/3.webp'
import Bol4 from '../../../assets/img/bols/4.webp'
import Bol5 from '../../../assets/img/bols/5.webp'
import Bol6 from '../../../assets/img/bols/6.webp'
import Bol7 from '../../../assets/img/bols/7.webp'
import Bol8 from '../../../assets/img/bols/8.webp'
import Bol9 from '../../../assets/img/bols/9.webp'
import {ReturnBols} from "../../../helpers/ChoiceBols.js";
import {setDisableGame, setGameEnd} from "../../../store/gameParamsSlice/gameParamsSlice.ts";
import {Bolls} from "./Bolls.jsx";


export const SpawnItem = (props) => {
    const ref = useRef()
    const dispatch = useDispatch()
    const iseResize = useSelector(state => state.params.resize)
    const heightPerson = useSelector(state => state.params.heightPerson)
    const heightContainer = useSelector(state => state.params.heightContainer)
    const positionPlayer = useSelector(state => state.playerLine.player.activePosition)
    const [refreshItem, setRefreshItem] = useState(1)
    const [cols, setCols] = useState(1)
    const speedSpawn = useSelector(state => state.params.speedGame)
    const maxHeight = useSelector(state => state.params.maxHeight)
    const startIntervalNumber = useSelector(state => state.spawnLine.intervalNumberSpawn)


    useEffect(() => {
        setInterval(() => {
            setRefreshItem((prev => prev + 1))
        }, 50)
    }, [speedSpawn])
    useEffect(() => {
        setTimeout(() => {

            setCols((prev => heightContainer * 0.88))
        }, 1)
    }, [iseResize])

    useEffect(() => {


        let interval = setInterval(() => {

            if (heightContainer - heightPerson < ref.current.offsetTop) {

                if (props.positionLine === 'leftSpawn' && positionPlayer === 1) {
                    dispatch(setScore())
                    dispatch(deleteItem({id: props.item.id, positionLine: props.positionLine}))
                } else if (props.positionLine === 'centerSpawn' && positionPlayer === 2) {
                    dispatch(setScore())
                    dispatch(deleteItem({id: props.item.id, positionLine: props.positionLine}))
                } else if (props.positionLine === 'rightSpawn' && positionPlayer === 3) {
                    dispatch(setScore())
                    dispatch(deleteItem({id: props.item.id, positionLine: props.positionLine}))
                } else {
                }
            }
            if (heightContainer < ref.current.offsetTop + ref.current.getBoundingClientRect().height + 10) {
                console.log('game loss')
                clearInterval(startIntervalNumber)
                dispatch(setScale({id: props.item.id, positionLine: props.positionLine}))
                dispatch(setDisableGame(true))
                dispatch(deleteNotScale())
                clearInterval(interval)

                setTimeout(() => {
                    dispatch(setDisableGame(false))
                    dispatch(deleteAllItem())
                    dispatch(setGameEnd(true))
                }, 2000)

            }

        }, 1)

        return () => {
            clearInterval(interval)
        }
    }, [props.item.top, positionPlayer, iseResize])
    const [Bol, setBol] = useState(1)
    useEffect(() => {
        const randomString = Math.floor(Math.random() * 9) + 1
        setBol(randomString)
    }, [])
    return (
        <div ref={ref} className={` ${S.body}`}
             style={{
                 top: cols,
                 transition: `all linear ${speedSpawn}s`,
                 transform: `scale(${props.item.scale ? 5 : 1})`,

             }}
        > {
        }

            <Bolls bols={ReturnBols(Bol)}/>
        </div>
    );
};

