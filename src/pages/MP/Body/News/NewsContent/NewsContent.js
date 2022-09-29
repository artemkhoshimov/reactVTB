import React from "react";
import style from './newsContent.module.css'

const NewsContent = (props) =>{
    return (
        <div
        style={{
          width: '429px',
          height: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginRight: '0',
          marginBottom: '0',
          flexShrink: '0',
          boxSizing: 'border-box',
          borderRadius: '0px 0px 0px 0px',
          borderColor: 'transparent',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span className={style.newsContentText}
        >
          <span>
            <span>{props.text}</span>
          </span>
        </span>
      </div>
    )
}

export default NewsContent