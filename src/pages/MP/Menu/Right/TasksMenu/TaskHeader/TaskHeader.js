import React from 'react'
import stylesRightFrame from '../../rightFrame.module.css'
import styles from './taskHeader.module.css'

const TaskHeader = (props) => {
  return (
    <div>
      <div className={stylesRightFrame.headerRightFrame}>
        <div className={stylesRightFrame.headerRightName}>
          <span className={stylesRightFrame.headerText}>
            <span>Мои задачи</span>
          </span>
          <div className={styles.headerTextBadge}>
            <span className={styles.headerTextBadgeValue}>5</span>
          </div>
        </div>
        <img
          src="/playground_assets/arrowschevronrighti135-sfbf.svg"
          alt="ArrowsChevronRightI135"
          style={{
            width: '24px',
            height: '24px',
            marginRight: '0',
            marginBottom: '0',
            boxSizing: 'border-box',
            position: 'relative',
          }}
        />
      </div>
    </div>
  )
}
export default TaskHeader
