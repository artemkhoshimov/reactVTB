import React from 'react'
import MainPage from './pages/MP/MainPage'
import styles from './mainFrame.module.css'
import Header from './pages/Header/Header'

const MainFrame = (props) => {
  var isShow = false
  function changeRoles() {
    isShow = isShow ? false : true
  }

  return (
    <div>
      <div className={styles.fullPageFrame}>
        <button onClick={changeRoles}>change role</button>
        <Header></Header>
        <MainPage></MainPage>
      </div>
    </div>
  )
}

export default MainFrame
