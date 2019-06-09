import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'
import ScrollBar from '../../components/ScrollBar'
import styles from './about-us.module.scss'
import { moveToSectionAboutUs } from '../../redux/actions/section'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import BottomTitle from '../../components/BottomTitle'
import ScrollBottomIndicator from '../../components/ScrollBottomIndicator'

const AboutUsPage = props => {
  let swiperInstance = null
  const [swiper, updateSwiper] = useState(null)
  useEffect(() => {
    props.moveToSectionAboutUs(1)
  }, [])
  return (
    <div
      className={styles.aboutUs}
      style={{ backgroundImage: 'url(\'/static/page-bg.png\')' }}
    >
      <div className={styles.wrapScrollBar}>
        <ScrollBar
          className={styles.scrollBar}
          currentSection={props.aboutUsSection.currentSection}
          maxSection={props.aboutUsSection.maxSection}
          slideTo={(index, speed, runCallback) => {
            if (swiper !== null) swiper.slideTo(index, speed, runCallback)
          }}
        />
      </div>
      <div className={styles.wrapBottomTitle}>
        <BottomTitle textLeft={'ABOUT'} textRight={'US'} />
      </div>
      <div className={styles.wrapScrollBottom}>
        <ScrollBottomIndicator
          currentSection={props.aboutUsSection.currentSection}
          maxSection={props.aboutUsSection.maxSection}
        />
      </div>
      <Swiper
        mousewheel={{
          sensitivity: 1,
          releaseOnEdges: true
        }}
        direction="vertical"
        containerClass={`swiper-container ${styles.swiper}`}
        //when swiper render, swiperInstance is swiper instance
        getSwiper={swiper => {
          swiperInstance = swiper
          updateSwiper(swiper)
        }}
        //Use swiperInstance in here, outside here use swiper
        on={{
          //on init, set method slideTo
          slideChangeTransitionEnd: () => {
            if (swiperInstance !== null)
              props.moveToSectionAboutUs(swiperInstance.realIndex + 1)
          }
        }}
      >
        <div>
          <Section1 />
        </div>
        <div>
          <Section2 />
        </div>
        <div>
          <Section3 />
        </div>
        <div>
          <Section4 />
        </div>
        <div>
          <Section5 />
        </div>
        <div>
          <Section6 />
        </div>
      </Swiper>
    </div>
  )
}

const mapState = state => ({
  aboutUsSection: state.section.aboutUs
})
const mapDispatch = {
  moveToSectionAboutUs
}
export default connect(
  mapState,
  mapDispatch
)(AboutUsPage)
