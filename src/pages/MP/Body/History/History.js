import React from "react";
import style from '../body.module.css'
import HistoryContent from "./HistoryContent/HistoryContent";

const History = (props) => {
  return (<div className={style.mainContentFrame}
  >
    <div className={style.headerContentFrame}
    >
      <span className={style.headerContentText}
      >
        <span>Моя история</span>
      </span>
      <button className={style.buttonHeaderContent}
      >
        <span className={style.buttonHeaderContentText}
        >
          <span>Подробнее</span>
        </span>
        <div className={style.buttonHeaderContentImage}
        />
      </button>
    </div>
    <div className={style.lineContent} />
    <div className={style.bodyFrame}>
      <div className={style.contentBodyFrame}
      >
        <HistoryContent text="Событие по корректировкам"/>
        <HistoryContent text="Событие по роу дата"/>
      </div>
    </div>
  </div>)
}
export default History