import React from 'react'
import Masonry from 'react-masonry-component'
import cn from 'classnames'
import styles from './Section3.module.scss'

const Section3 = props => {
  return (
    <div className={cn(props.className, styles.section3)}>
      <div className={styles.wrapMasonry}>
        <Masonry className={styles.masonry}>
          <div className={styles.wrapImg}>
            <img className={styles.img} src="/static/about-us/section3/1.png" />
            <div className={styles.text}>
              <div className={styles.num}>70+</div>
              <div className={styles.des}>number of archers</div>
            </div>
          </div>
          <div className={styles.wrapImg}>
            <img className={styles.img} src="/static/about-us/section3/2.png" />
            <div className={styles.text}>
              <div className={styles.num}>100+</div>
              <div className={styles.des}>coffee cups per day</div>
            </div>
          </div>
          <div className={styles.wrapImg}>
            <img className={styles.img} src="/static/about-us/section3/3.png" />
            <div className={styles.text}>
              <div className={styles.num}>10+</div>
              <div className={styles.des}>outstanding monthly activities</div>
            </div>
          </div>
          <div className={styles.wrapImg}>
            <img className={styles.img} src="/static/about-us/section3/4.png" />
            <div className={styles.text}>
              <div className={styles.num}>150+</div>
              <div className={styles.des}>Phở Bowl per day.</div>
            </div>
          </div>
          <div className={styles.wrapImg}>
            <img className={styles.img} src="/static/about-us/section3/6.png" />
            <div className={styles.text}>
              <div className={styles.num}>30+</div>
              <div className={styles.des}>Dota matches</div>
            </div>
          </div>
        </Masonry>
      </div>
    </div>
  )
}

export default Section3
