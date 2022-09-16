import React from 'react'
import LinkHeader from './LinkHeader/LinkHeader'
import styles from './link.module.css'
import LinkContent from './LinkContent/LinkContent'

const LinkFrame = (props) => {
  return (
    <div className={styles.linkFrame}>
      <LinkHeader></LinkHeader>
      <LinkContent></LinkContent>
    </div>
  )
}
export default LinkFrame
