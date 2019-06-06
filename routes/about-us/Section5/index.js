import React, { useState, useEffect } from 'react'
import styles from './Section5.module.scss'
import cn from 'classnames'
import Swiper from 'react-id-swiper'
import { moveToSlideAboutUsSection5 } from '../../../redux/actions/section'
import { connect } from 'react-redux'

const Section5 = props => {
  let swiperInstance = null
  const [swiper, updateSwiper] = useState(null)
  useEffect(() => {
    props.moveToSlideAboutUsSection5(1)
  }, [])
  return (
    <div className={cn(props.className, styles.section5)}>
      <div className={styles.title}>
        <p className={styles.redTitle}>
          Team <span style={{ color: '#cf403d' }}>Activities</span>
        </p>
        <p className={styles.blackTitle}>
          This is how we nourish our creativity
        </p>
      </div>
      <div className={styles.slideIndicator}>
        <div className={styles.numIndicator}>
          <span>{props.section5.currentSlide}</span>{' '}
          <span className={styles.gray}>of {props.section5.maxSlide}</span>
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
              props.moveToSlideAboutUsSection5(swiperInstance.realIndex + 1)
          }
        }}
        loop
        //Use swiperInstance in here, outside here use swiper
        //on init, set method slideTo
      >
        <div className={styles.wrapSlide}>
          <div className={styles.wrapImg}>
            <img src={'/static/about-us/section5.png'} className={styles.img} />
          </div>
          <div className={styles.wrapContent}>
            <p className={styles.contentTitle}>Archery</p>
            <p className={styles.contentDes}>It’s our biggest hobby</p>
            <p className={styles.content}>
              To enhance our abilities, we design outstanding activities that
              are cohesive. We build real-life experiences that prepare us to
              focus optimally on a project.
            </p>
          </div>
        </div>
        <div className={styles.wrapSlide}>
          <div className={styles.wrapImg}>
            <img
              src={'/static/about-us/section5_2.png'}
              className={styles.img}
            />
          </div>
          <div className={styles.wrapContent}>
            <p className={styles.contentTitle}>Regular Training</p>
            <p className={styles.contentDes}>
              Continuous learning for amateur and veteran archers
            </p>
            <p className={styles.content}>
              We always have training sessions integrated in our schedule to
              ensure that we are always learning.
            </p>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

const mapState = state => ({
  section5: state.section.aboutUs.section5
})
const mapDispatch = {
  moveToSlideAboutUsSection5
}
export default connect(
  mapState,
  mapDispatch
)(Section5)
