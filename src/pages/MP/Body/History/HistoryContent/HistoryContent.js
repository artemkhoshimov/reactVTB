import React from "react";
import style from './historyContent.module.css'


const HistoryContent = (props) => {
  return (
    <div className={style.historyContentText}>
      <span>{props.text}</span>
    </div>
  )
}

export default HistoryContent