import React from 'react'
/*import { connect } from 'react-redux'*/
import styles from './Section5.module.scss'
import cn from 'classnames'

const Section5 = props => {
  return (
    <div className={cn({ [styles.section5]: true, [props.className]: true })}>
      <div className={styles.wrap}>
        <div className={styles.contentLeft}>
          <div className={styles.alignText}>
            <h2 className={styles.titleH2}>Where?</h2>
            <h5 className={styles.subtitleH5}>Singapore Office:</h5>
            <p className={styles.contentP}>
              470 North Bridge Road, #05-12 Bugis Cube Singapore 188735
            </p>
            <p className={styles.contentP}>Singapore 229456</p>
            <p className={styles.contentP} />
            <h5 className={styles.subtitleH5}>Vietnam Office:</h5>
            <p className={styles.contentP}>231 -233 Le Thanh Ton, </p>
            <p className={styles.contentP}>Ben Thanh Ward, District 1, HCM</p>
            <p className={styles.contentP} />
            <h5 className={styles.subtitleH5}>Production House:</h5>
            <p className={styles.contentP}>294-296 Truong Sa, Ward 2</p>
            <p className={styles.contentP}>Phu Nhuan District, HCM</p>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.alignTextRight}>
            <h2 className={styles.rightH2}>Ready to make the perfect shot?</h2>
            <hr className={styles.marginHR} />
            <p className={styles.contentPRight}>
              You are always welcome to see where the magic takes place by
              visiting our Archer’s Base. Let’s breathe life to your ideas and
              hit that target, and you’ll get to meet our team of archers, too.
              Talk to you soon!{' '}
            </p>
            <p className={styles.emailRight}>
              contact@kyanon.digital | (+84) 28 3517 1080
            </p>
            <img src="/static/map_home.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section5
