import * as React from "react";
import S from "./ChoicePlayer.module.scss";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {setOwner} from "../../../../store/playerLineSlice/playerLineSlice.js";

const Persona = (props) => {
    const ref = useRef(null);
    const dispatch = useDispatch()

    return (
        <button
            ref={ref}
            className={S.persona}
            onClick={() => {
                dispatch(setOwner(props.name))
                props.start(true)
            }}
        >
            <img src={props.img} alt=""/>
        </button>
    );
};

export default Persona;
