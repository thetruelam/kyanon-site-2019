import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'
import styles from './career.module.scss'
import BottomTitle from '../../components/BottomTitle'
import ScrollBottomIndicator from '../../components/ScrollBottomIndicator'
import { moveToSectionCareer } from '../../redux/actions/section'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const CareerPage = props => {
  let swiperInstance = null
  const [swiper, updateSwiper] = useState(null)
  useEffect(() => {
    props.moveToSectionCareer(1)
  }, [])
  return (
    <div
      className={styles.career}
      style={{ backgroundImage: 'url(\'/static/page-bg.png\')' }}
    >
      <div className={styles.wrapBottomTitle}>
        <BottomTitle textLeft={'CAREERS'} textRight={'JOBS'} />
      </div>
      <div className={styles.wrapScrollBottom}>
        <ScrollBottomIndicator
          currentSection={props.section.currentSection}
          maxSection={props.section.maxSection}
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
              props.moveToSectionCareer(swiperInstance.realIndex + 1)
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
      </Swiper>
    </div>
  )
}

const mapState = state => ({
  section: state.section.career
})
const mapDispatch = {
  moveToSectionCareer
}
export default connect(
  mapState,
  mapDispatch
)(CareerPage)
