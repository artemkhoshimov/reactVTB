import React from 'react'
import styles from './mainPage.module.css'
import RightFrame from './Menu/Right/RightFrame'
import Body from './Body/Body'


const MainPage = (props) => {
  return (
    <div>
      <div className={styles.mainFrame}>
        <Body></Body>
        <RightFrame></RightFrame>
      </div>
    </div>
  )
}

export default MainPage
