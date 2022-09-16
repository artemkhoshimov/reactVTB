import React from 'react'
import styles from './body.module.css'
import History from './History/History'
import Instruction from './Instruction/Instruction'
import News from './News/News'

const Body = (props) => {
  return (
    <div>
      <div className={styles.mainFrameBody}>
        <Instruction></Instruction>
        {/* <News></News> */}
        <History></History>
      </div>
    </div>
  )
}

export default Body
