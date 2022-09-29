import React from 'react'
import styles from './mainFrame.module.css'
import Header from './pages/Header/Header'
import BodyMP from './pages/BodyMP'


const MainFrame = (props) =>  (
    <div>
      <div className={styles.fullPageFrame}>
        <button>change role</button>
        <Header></Header>
        <BodyMP></BodyMP>
      </div>
    </div>
  )


export default MainFrame
