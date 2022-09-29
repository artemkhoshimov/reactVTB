import React from "react";
import style from '../body.module.css'
import stylesNews from './news.module.css'
import NewsContent from "./NewsContent/NewsContent";


const News = (props) => {
  return (
    <div className={style.mainContentFrame}
    >
      <div className={style.headerContentFrame}
      >
        <span className={style.headerContentText}
        >
          <span>Новости системы</span>
        </span>
        <button className={style.buttonHeaderContent}
        >
          <span className={style.buttonHeaderContentText}
          >
            <span>Смотреть все</span>
          </span>
          <div
            className={style.buttonHeaderContentImage}
          />
        </button>
      </div>
      <div className={style.lineContent} />
      <div className={style.bodyFrame}
      >
        <div className={style.contentBodyFrame}
        >
          <NewsContent text="Добавлен CSV - валидатор" />
          <NewsContent text="Добавлена обратная связь  по QR - коду" />
        </div>
        <div className={stylesNews.newsContentImage} />
      </div>
    </div>
  )
}

export default News