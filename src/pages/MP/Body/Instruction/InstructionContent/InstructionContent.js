import React from "react";
import instructionStyle from './instructionContent.module.css'
import style from '../../body.module.css'

const InstructionContent = (props) => {
    return (
        <div
            className={style.bodyFrame}
        >
            <div className={style.contentBodyFrame}>
            <span className={instructionStyle.instructionContentText}
            >
                <span>Описание инструкции</span>
            </span>
            </div>
            <div className={instructionStyle.instructionImagecontainer}
            ></div>
        </div>
    )
}
export default InstructionContent