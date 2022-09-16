import React from "react";
import style from './instruction.module.css'

const Instruction = (props) =>{
    return (
        <div className={style.instructionFrame}
      >
        <div className={style.instruction_textcontainer}
        >
          <div
            style={{
              width: '288px',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginRight: '0',
              marginBottom: '0',
              flexShrink: '0',
              boxSizing: 'border-box',
              borderRadius: '0px 0px 0px 0px',
              borderColor: 'transparent',
              position: 'relative',
            }}
          >
            <span
              style={{
                color: 'black',
                height: 'auto',
                textAlign: 'left',
                lineHeight: '24px',
                marginRight: '0',
                marginBottom: '8px',
                alignSelf: 'stretch',
                fontWeight:'800'
              }}
            >
              <span>Инструкция</span>
            </span>
            <span
              style={{
                color: 'var(--dl-color-lightweb_text-secondary)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: '20px',
                marginRight: '0',
                marginBottom: '0',
                alignSelf: 'stretch',
              }}
            >
              <span>Краткое описание инструкции по системе</span>
            </span>
          </div>
        </div>
        <div className={style.instructionImagecontainer}
        ></div>
      </div>
    )
}
export default Instruction