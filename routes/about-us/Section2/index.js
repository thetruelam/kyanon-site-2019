import React, { useState, useEffect } from 'react'
import styles from './Section2.module.scss'
import cn from 'classnames'
import Swiper from 'react-id-swiper'
import { moveToSlideAboutUsSection2 } from '../../../redux/actions/section'
import { connect } from 'react-redux'

const Section2 = props => {
  let swiperInstance = null
  const [swiper, updateSwiper] = useState(null)
  useEffect(() => {
    props.moveToSlideAboutUsSection2(1)
  }, [])
  return (
    <div className={cn(props.className, styles.section2)}>
      <div className={styles.title}>
        <p className={styles.blackTitle}>You should know</p>
        <p className={styles.redTitle}>IMPORTANT ASPECTS</p>
      </div>
      <div className={styles.slideIndicator}>
        <div className={styles.numIndicator}>
          <span>{props.section2.currentSlide}</span>{' '}
          <span className={styles.gray}>of {props.section2.maxSlide}</span>
        </div>
        <div
          onClick={() => {
            if (swiper !== null) swiper.slidePrev()
          }}
          className={styles.prev}
        >
          {'<'}
        </div>
        <div
          onClick={() => {
            if (swiper !== null) swiper.slideNext()
          }}
          className={styles.next}
        >
          {'>'}
        </div>
      </div>
      <Swiper
        containerClass={`swiper-container ${styles.swiper}`}
        //when swiper render, swiperInstance is swiper instance
        getSwiper={swiper => {
          swiperInstance = swiper
          updateSwiper(swiper)
        }}
        effect="fade"
        fadeEffect={{ crossfade: true }}
        on={{
          slideChangeTransitionEnd: () => {
            if (swiperInstance !== null)
              props.moveToSlideAboutUsSection2(swiperInstance.realIndex + 1)
          }
        }}
        loop
        //Use swiperInstance in here, outside here use swiper
        //on init, set method slideTo
      >
        <div className={styles.wrapSlide}>
          <div className={styles.wrapImg}>
            <img src={'/static/about-us/section2.png'} className={styles.img} />
          </div>
          <div className={styles.wrapContent}>
            <p className={styles.contentTitle}>OUR VALUE</p>
            <ul className={styles.ul}>
              <li>
                <p>
                  We trust in each other’s abilities. This is how clients can
                  trust our teams to perform tasks with speed and accuracy.
                </p>
              </li>
              <li>
                <p>
                  Agility. With our agile and flexible approach, we are able to
                  accommodate client ideas and make necessary changes until the
                  technology is perfected.
                </p>
              </li>
              <li>
                <p>
                  Focus. We prioritize our client’s goals and tailor our
                  services to achieve their target.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapSlide}>
          <div className={styles.wrapImg}>
            <img
              src={'/static/about-us/section2_2.png'}
              className={styles.img}
            />
          </div>
          <div className={styles.wrapContent}>
            <p className={styles.contentTitle}>OUR LIFE AS ARCHERS</p>
            <ul className={styles.ul}>
              <li>
                <p>
                  Power. We apply innovation to every technology we design and
                  develop, creating an impact with our results.
                </p>
              </li>
              <li>
                <p>
                  Distinguishing Kyanon Digital as the thought leader in the
                  digital production industry.
                </p>
              </li>
              <li>
                <p>
                  Grooming and training archer teams to sustain digital
                  supremacy.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

const mapState = state => ({
  section2: state.section.aboutUs.section2
})
const mapDispatch = {
  moveToSlideAboutUsSection2
}
export default connect(
  mapState,
  mapDispatch
)(Section2)
