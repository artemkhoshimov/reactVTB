import React from "react";
import InstructionContent from "./InstructionContent/InstructionContent";
import style from '../body.module.css'

const Instruction = (props) => {
  return (
    <div className={style.mainContentFrame}
    >
      <div className={style.headerContentFrame}
      >
        <span className={style.headerContentText}
        >
          <span>Инструкция</span>
        </span>
      </div>
      <div className={style.lineContent} />
      <InstructionContent></InstructionContent>
    </div>
  )
}
export default Instruction