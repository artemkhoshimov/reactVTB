import React from 'react'
import styles from './icon.module.css'

const IconFrame = (props) => {
  return (
    <div className={styles.mainIcon}>
      <div className={styles.iconSlave}>
        <div className={styles.logotypeBack}>
          <img
            src="/playground_assets/fill2i135-rnq8.svg"
            alt="Fill2I135"
            className={styles.logotypeFront1Part}
          />
          <img
            src="/playground_assets/fill3i135-of4.svg"
            alt="Fill3I135"
            className={styles.logotypeFront2Part}
          />
        </div>
      </div>
    </div>
  )
}

export default IconFrame
