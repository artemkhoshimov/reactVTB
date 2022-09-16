import React from 'react'
import styles from './header.module.css'
import IconFrame from './Icon/IconFrame.js'
import MenuHeaderFrame from './Menu/MenuHeaderFrame'
import Auth from './Auth/Auth'

const Header = (props) => {
  return (
    <div>
      <div className={styles.headerFrame}>
        <IconFrame></IconFrame>
        <MenuHeaderFrame></MenuHeaderFrame>
        <Auth></Auth>
      </div>
    </div>
  )
}

export default Header
