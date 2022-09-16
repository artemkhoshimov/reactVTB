import React from 'react'
import styles from './linkContent.module.css'

const LinkContent = (props) => {
  return (
    <div className={styles.contentFrame}>
      <div className={styles.widgetsServisecard}>
        <div className={styles.contentLeftImage}></div>
        <div className={styles.contentRight}
        >
          <span className={styles.contentText}
          >
            <span>Обратная связь</span>
          </span>
          <span className={styles.textQR}
          >
            <span>QR код</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LinkContent
