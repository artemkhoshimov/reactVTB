import React from "react";
import style from './body.module.css'
import TableCorrect from "./TableCorrect/TableCorrect";


const BodyWithoutCorrect = (props) => {
    return (
        <div className={style.mainContentFrame}>
            <div className={style.headerTextFrame}> Данные без корректировок</div>
            <div className={style.dateTextFrame}> на 30.07.2020</div>
            <div className={style.buttonsFrame}>
                <button className={style.buttons} >Выбрать базу данных</button>
                <button className={style.buttons}>Редактировать</button>
            </div>
            <div className={style.tableCorrect}>
                <TableCorrect />
            </div>
        </div>
    )
}
export default BodyWithoutCorrect

