import React from 'react'
import styles from './task.module.css'
import TaskContent from './TaskContent/TaskContent'
import TaskHeader from './TaskHeader/TaskHeader'

const Task = (props) => {
  return (
    <div className={styles.taskFrame}>
      <TaskHeader></TaskHeader>
      <TaskContent></TaskContent>
    </div>
  )
}

export default Task
