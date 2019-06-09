import React from 'react'
import styles from './BottomTitle.module.scss'
import cn from 'classnames'

const BottomTitle = props => {
  return (
    <div className={cn({ [styles.bottomText]: true, [props.className]: true })}>
      <span className={styles.redText}>{props.textLeft}</span> {props.textRight}
    </div>
  )
}

export default BottomTitle
