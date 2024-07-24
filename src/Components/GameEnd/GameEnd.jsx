import * as React from 'react';
import S from './GameEnd.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";
import {resetSpeed, setGameEnd} from "../../store/gameParamsSlice/gameParamsSlice.ts";
import {resetScore} from "../../store/playerLineSlice/playerLineSlice.js";
import elka from '../../assets/img/elka.png'
import axios from "axios";
import {deleteAllItem} from "../../store/spawnLineSlice/spawnLineSlice.js";

export const GameEnd = () => {

    const [load, setLoad] = useState(false);
    const [ERROR, SETERROR] = useState("");
    const scorePlayer = useSelector(state => state.playerLine.player.score)

    const org_id = "03650000-6bec-ac1f-086e-08d99fc3c262";
    const [value, setValue] = useState("+7");
    const inputHandler = (e) => {
        setValue((prevState) => e.target.value);
    };

    const handlerSubmit = async () => {
        setLoad(true);
        SETERROR("передаю ваши данные");

        let tokenResponse
        try {
            tokenResponse = await getToken();
        } catch (err) {
            setLoad(false);
            SETERROR("проблемы на сервере");
        }
        if (tokenResponse.data.status < 250) {
            const token = tokenResponse.data.token;
            errorRef.current = 1;


            let userResponse;
            try {
                userResponse = await getUser(token);
            } catch (err) {
                setLoad(false);
                SETERROR("Данный номер не участвует в программе лояльности");
            }

            if(userResponse){
            const userID = userResponse.data.id;
            const userIDWalet = userResponse.data.walletBalances.find(
                (el) =>
                    el.wallet.name ===
                    "Бонусы Italy - Общая программа по накоплению и списанию бонусов"
            );
            const categoryResponse = await getCategory(token);
            const idCategory = categoryResponse.data.find(
                (el) => el.name === "WOLF_GAME_COMPLEATED"
            );

            let addCategoryResponse
                try {
                    addCategoryResponse = await addCategory(
                        token,
                        idCategory.id,
                        userID
                    );
                } catch (err) {
                    setLoad(false);
                    SETERROR("ошибка сервера");
                }

            if (addCategoryResponse.data ===111) {
                // await sendMessage(token,scorePlayer,value)

                let addBonusResponse
                try {
                 addBonusResponse = await addBonus(
                    token,
                    userIDWalet.wallet.id,
                    userID,
                    scorePlayer
                );

                } catch (err) {
                    setLoad(false);
                    SETERROR("ошибка сервера");
                }
                SETERROR("Бонусы были начислины вам на счет ");
            } else {

                SETERROR("Вы уже участвовали в игре");
            }

            }
        } else {
            SETERROR("ошибка сервера");
        }
        setLoad(false);
    };
    const getUser = (token) => {
        return axios.post(`http://217.119.31.27:2000/getuser`, {
            token: token,
            number: value,
            org_id: org_id,
        });
    };
    const getCategory = (token) => {
        return axios.post(`http://217.119.31.27:2000/getcategory`, {
            token: token,
            org_id: org_id,
        });
    };
    const addCategory = (token, idCategory, idUser) => {
        return axios.post(`http://217.119.31.27:2000/addcategory`, {
            token: token,
            org_id: org_id,
            idCategory: idCategory,
            idUser: idUser,
        });
    };
    const sendMessage = (token, sum, phone) => {
        return  axios.post(`http://217.119.31.27:2000/sendMessage`, {
            token: token,
            sum: sum,
            phone: phone,
        });
    };
    const addBonus = (token, walletId, idUser, sum) => {
        return axios

            .post(`http://217.119.31.27:2000/down`, {
                token: token,
                organizationId: org_id,
                walletId: walletId,
                customerId: idUser,
                sum: sum,
            })
            .then((res) => console.log(res));
    };
    const getToken = () => {
        return axios.post(`http://217.119.31.27:2000/gettoken`);

    };

    const errorRef = useRef(10);
    const score = useSelector(state => state.playerLine.player.score)
    const [bonus, setBonus] = useState(false)
    const dispatch = useDispatch()
    const end = () => {
        switch (score) {
            case 1:
                return 'ИГРУШКОЙ'
            case 2:
                return 'ИГРУШКАМИ'
            case 3:
                return 'ИГРУШКАМИ'
            default :
                return 'ИГРУШКАМИ'
        }
    }
    return (
        <div className={S.body}>


            {!bonus ? <div className={S.All}>
                    <div className={S.title}>
                        <div className={S.titleOver}>
                            Ура! Вы украсили елку <br/> {score} {end()}

                        </div>
                        <div>


                        </div>
                    </div>
                    <div className={S.elka}>
                        <img src={elka} alt=""/>
                    </div>
                    <div className={S.btns}>
                        <div>

                            <button onClick={() => {
                                setBonus(true)
                            }} className={S.send}> ПОЛУЧИТЬ БОНУСЫ
                            </button>
                        </div>
                        <div>

                            <button onClick={() => {
                                dispatch(setGameEnd(false))
                                dispatch(resetScore())
                                dispatch(resetSpeed({speed: 5, spawn: 2000}))

                                dispatch(deleteAllItem())
                            }
                            } className={S.replay}>ПОВТОРИТЬ ИГРУ
                            </button>
                        </div>
                    </div>

                    <div className={S.info}>
                        *бонусы засчитываются только один раз
                    </div>
                </div> :
                <div className={S.getBonus}>
                    <div className={S.bonusTitle}>
                        Введите номер телефона к которому привязана <br/> карта лояльности <br/>
                        и получите бонусы на свой счет
                    </div>
                    <div className={S.number}>
                        <input onInput={inputHandler} value={value} type="text"/>
                    </div>

                    <button onClick={(e) => {
                        e.preventDefault();
                        handlerSubmit();
                    }} className={`${S.getBonusBTN} ${load&&S.dis}`}>ЗАБРАТЬ ПОДАРОК
                    </button>
                    <div className={S.text}>{ERROR}</div>

                </div>}
        </div>
    );
};