import * as React from 'react';
import S from './Player.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setPositionPlayer} from "../../../store/playerLineSlice/playerLineSlice.js";
import {useRef} from "react";

export const Player = ({position, img}) => {

    const activePosition = useSelector(state => state.playerLine.player.activePosition)
    const dispatch = useDispatch()
    const isDisable = useSelector(state => state.params.disable)
    const setPlayerActive = () => {
        if (!isDisable) {

            dispatch(setPositionPlayer(position))
        }
    }
    return (
        <div onClick={setPlayerActive}
             style={{opacity: activePosition !== position ? 0.2 : 1}}
             className={S.body}>
            <div className={`${S.player} ${position===2&&S.center}`}>
                <img src={img} alt=""/>
            </div>
        </div>
    );
};