import React from 'react'
import BodyCorr from './Body/BodyCorr'
import style from './data.module.css'
import SideBar from './SideBar/SideBar'

const Data = (props) => {
  return (
    <div>
      <div
        className={style.dataFrame}
      >
      <SideBar/>
      <BodyCorr/>
      </div>
    </div>
  )
}


export default Data