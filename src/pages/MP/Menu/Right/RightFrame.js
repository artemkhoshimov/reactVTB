import React from 'react'
import LinkFrame from './LinkMenu/LinkFrame'
import styles from './rightFrame.module.css'
import Task from './TasksMenu/Task'

const RightFrame = (props) => {
  return (
    <div className={styles.rightFrame}>
      <div className={styles.rightFrameSlave}>
        <Task></Task>
        <LinkFrame></LinkFrame>
      </div>
    </div>
  )
}

export default RightFrame
