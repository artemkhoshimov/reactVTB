import React from 'react'
import styles from './menuHeader.module.css'
import TemplateMenu from './TemplateMenu'




const MenuHeaderFrame = (props) => {

  const myRef = React.createRef();
  return (
    <div>
      <div className={styles.mainMenuFrame}>
        <TemplateMenu Link to ={myRef} refT="/main" text="Главная" />
        <TemplateMenu Link to ={myRef} refT="/data" text="Данные" />
        <TemplateMenu Link to ={myRef} refT="/corrects" text="Корректировки" />
        <TemplateMenu Link to ={myRef} refT="/rawData" text="Загрузка raw data" />
      </div>
    </div>
  )
}


export default MenuHeaderFrame
