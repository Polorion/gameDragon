import * as React from 'react';
import S from './SpawnLine.module.scss'
import {SpawnItem} from "./SpawnItem/SpawnItem";
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem, stopInterval} from "../../store/spawnLineSlice/spawnLineSlice.js";

export const SpawnLine = ({spawn, position, positionLine}) => {
    const dispatch = useDispatch()

    const positionItems = () => {
        switch (position) {
            case 1:
                return 'flex-start'
            case 2:
                return 'center'
            case 3:
                return 'flex-end'
        }
    }
    return (
        <div
            className={S.body}
            style={{alignItems: (positionItems())}}>
         

            {spawn.items.map(el => <SpawnItem position={position} positionLine={positionLine} key={el.id} item={el}/>)}
        </div>
    );
};