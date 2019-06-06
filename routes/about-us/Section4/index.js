import React from 'react'
import cn from 'classnames'
import styles from './Section4.module.scss'

const Section4 = props => {
  return (
    <div className={cn(props.className, styles.section4)}>
      <div
        className={styles.wrap}
        style={{ backgroundImage: 'url(\'/static/about-us/section4.png\')' }}
      >
        <p className={styles.titleBig}>Our Culture</p>
        <p className={styles.titleSmall}>Work Hard, Play Hard</p>
        <div className={styles.wrapContent}>
          <p className={styles.pContent}>
            As a pioneer in digital consulting and production, we work to bring
            ideas to life by providing end-to-end services that are 100%
            accurate and impactful. We have two working models: technical team
            and project-based solutions - both designed to make your target a
            reality. When we work, we work with maximum effort.
          </p>
          <p className={styles.pContent}>
            When we play, we play hard. Our team is not only passionate about
            work, we are also enjoy socializing together. We understand the
            importance of keeping a healthy amount of leisure in the workplace.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section4
