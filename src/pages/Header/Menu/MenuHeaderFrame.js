import React from 'react'
import AgreementMenu from './AgreementMenu/AgreementMenu'
import CorrectMenu from './CorrectMenu/CorrectMenu'
import styles from './menuHeader.module.css'
import MpMenu from './MpMenu/MpMenu'


const MenuHeaderFrame = (props) => {
  return (
    <div className={styles.mainMenuFrame}
    >
      <MpMenu></MpMenu>
      <CorrectMenu></CorrectMenu>
      <AgreementMenu></AgreementMenu>
    </div>
  )
}
export default MenuHeaderFrame
