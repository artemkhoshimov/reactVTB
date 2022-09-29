import React from 'react'
import Instruction from './Instruction/Instruction'
import News from './News/News'
import History from './History/History'

const Body = (props) => {
  return (
    <div>
      <div
        style={{
          width: '785px',
          maxWidth: '785px',
          height: '736px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px 28px',
          marginRight: '0',
          marginBottom: '0',
          boxSizing: 'border-box',
          borderRadius: '0px 0px 0px 0px',
          borderColor: 'transparent',
          position: 'relative',
          top: '63px',
          left: '115px'
        }}
      >
        <Instruction></Instruction>
        <News></News>
        <History />
      </div>
    </div>
  )
}

export default Body
