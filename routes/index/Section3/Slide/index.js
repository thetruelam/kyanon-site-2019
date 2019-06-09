import React, { useState } from 'react'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'
import styles from './Slide.module.scss'
import cn from 'classnames'

const Slide = props => {
  const [swiper, updateSwiper] = useState(null)
  return (
    <div className={cn({ [props.className]: true, [styles.wrap]: true })}>
      <Swiper
        containerClass={`swiper-container ${styles.swiperContainer}`}
        loop
        getSwiper={updateSwiper}
      >
        <div className={styles.wrapSlide}>
          <div
            className={styles.left}
            style={{ backgroundImage: 'url(\'/static/left.png\')' }}
          />
          <div
            className={styles.mid}
            style={{ backgroundImage: 'url(\'/static/mid.png\')' }}
          >
            <div className={styles.textWrap}>
              <div className={styles.title}>BOx (Bottle Opener X)</div>
              <div className={styles.des}>Startup Tech Partner</div>
              <p>
                A campaign to express consumers’ love, encourage them to share
                positive opinions, recognize & reward for all their
                contributions.
              </p>
              <p>
                We created the influence measurement tool for the Samsung fans
                to express their love for the product through posting the
                comments and sharing the site through Facebook.
              </p>
            </div>
          </div>
          <div
            className={styles.right}
            style={{ backgroundImage: 'url(\'/static/right.png\')' }}
          />
        </div>
        {/* Slide2*/}
        <div className={styles.wrapSlide}>
          <div
            className={styles.left}
            style={{ backgroundImage: 'url(\'/static/left.png\')' }}
          />
          <div
            className={styles.mid}
            style={{ backgroundImage: 'url(\'/static/mid.png\')' }}
          >
            <div className={styles.textWrap}>
              <div className={styles.title}>Title2</div>
              <div className={styles.des}>Startup Tech Partner</div>
              <p>
                A campaign to express consumers’ love, encourage them to share
                positive opinions, recognize & reward for all their
                contributions.
              </p>
              <p>
                We created the influence measurement tool for the Samsung fans
                to express their love for the product through posting the
                comments and sharing the site through Facebook.
              </p>
            </div>
          </div>
          <div
            className={styles.right}
            style={{ backgroundImage: 'url(\'/static/right.png\')' }}
          />
        </div>
        {/*Slide3*/}
        <div className={styles.wrapSlide}>
          <div
            className={styles.left}
            style={{ backgroundImage: 'url(\'/static/left.png\')' }}
          />
          <div
            className={styles.mid}
            style={{ backgroundImage: 'url(\'/static/mid.png\')' }}
          >
            <div className={styles.textWrap}>
              <div className={styles.title}>Title 3</div>
              <div className={styles.des}>Startup Tech Partner</div>
              <p>
                A campaign to express consumers’ love, encourage them to share
                positive opinions, recognize & reward for all their
                contributions.
              </p>
              <p>
                We created the influence measurement tool for the Samsung fans
                to express their love for the product through posting the
                comments and sharing the site through Facebook.
              </p>
            </div>
          </div>
          <div
            className={styles.right}
            style={{ backgroundImage: 'url(\'/static/right.png\')' }}
          />
        </div>
      </Swiper>
      <div className={styles.slideNav}>
        <span
          onClick={() => {
            if (swiper !== null) swiper.slidePrev()
          }}
          className={styles.cursor}
        >
          Prev
        </span>
        <span
          className={cn({ [styles.cursor]: true, [styles.viewCase]: true })}
        >
          View case
        </span>
        <span
          onClick={() => {
            if (swiper !== null) swiper.slideNext()
          }}
          className={styles.cursor}
        >
          Next
        </span>
      </div>
    </div>
  )
}

export default connect(
  null,
  null
)(Slide)
