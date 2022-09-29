import React from "react";
import style from './body.module.css'
import TableCorrect from "./TableCorrect/TableCorrect";


const BodyWithCorrect = (props) => {
    return (
        <div className={style.mainContentFrame}>
            <div className={style.headerTextFrame}> Данные с корректировками</div>
            <div className={style.dateTextFrame}> на 15.08.2020</div>
            <div className={style.buttonsFrame}>
            </div>
            <div className={style.tableCorrect}>
                <TableCorrect />
            </div>
        </div>
    )
}

export default BodyWithCorrect

