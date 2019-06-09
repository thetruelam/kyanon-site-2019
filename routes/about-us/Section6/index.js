import React from 'react'
import styles from './Section6.module.scss'
import cn from 'classnames'

const Section6 = props => {
  return (
    <div className={cn(props.className, styles.section6)}>
      <div
        className={styles.centerDiv}
        style={{ backgroundImage: 'url(\'/static/about-us/section6.png\')' }}
      >
        <div className={styles.wrapContent}>
          <p className={styles.title}>
            Want to <span style={{ color: '#c00' }}>Join Us?</span>
          </p>
          <p className={styles.content}>
            Kyanon Digital is always looking for{' '}
            <span style={{ color: '#c00' }}>
              dynamic and talented individuals
            </span>
          </p>
        </div>
      </div>
      <div className={styles.button}>Browse Jobs</div>
    </div>
  )
}

export default Section6
