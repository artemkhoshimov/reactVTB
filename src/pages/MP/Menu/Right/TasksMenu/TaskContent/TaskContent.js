import React from 'react'
import styles from './taskContent.module.css'

const TaskContent = (props) => {
  return (
    <div className={styles.contentMain}>
      <div className={styles.contentSlave}>
        <div className={styles.contentSlave2}>
          <div className={styles.taskCoreIndicator}>
            <img
              src="/playground_assets/statusunreadi135-kqtn.svg"
              alt="StatusUnreadI135"
              className={styles.statusUnread}
            />
          </div>
          <div className={styles.content}
          >
            <div className={styles.contentSlave3}
            >
              <span className={styles.textContent}
              >
                <span>Заявка на согласование отпуска</span>
              </span>
              <div className={styles.avatarFrame}
              >
                <img
                  src="/playground_assets/frame339976i135-0qae.svg"
                  alt="Female01I135"
                  className={styles.avatarPhoto}
                />
              </div>
            </div>
            <span className={styles.textTimeDelay}
            >
              <span>5 мин назад</span>
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0 0 0 22px',
            marginRight: '0',
            marginBottom: '0',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            borderRadius: '0px 0px 0px 0px',
            borderColor: 'transparent',
            position: 'relative',
          }}
        ></div>
      </div>
    </div>
  )
}
export default TaskContent
