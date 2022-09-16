import React from 'react'
import styles from '../menuHeader.module.css'

const MpMenu = (props) => {
  return (
    <div className={styles.menuTextFrame}>
      <span className={styles.textMenu}>
        <a href='/' style={{textDecoration:'none',color:'black'}}>Главнaя</a>
      </span>
    </div>
  )
}

export default MpMenu
