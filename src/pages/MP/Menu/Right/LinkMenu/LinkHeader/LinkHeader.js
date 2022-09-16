import React from 'react'
import stylesRightFrame from '../../rightFrame.module.css'


const LinkHeader = (props) => {
  return (
    <div className={stylesRightFrame.headerRightFrame}
    >
      <span className={stylesRightFrame.headerText}
      >
        <span>Полезные ссылки</span>
      </span>
    </div>
  )
}
export default LinkHeader
