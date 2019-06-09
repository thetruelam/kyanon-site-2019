import React, { useRef } from 'react'
import { connect } from 'react-redux'
import Slide from './Slide'
import FollowUs from './FollowUs'
import styles from './index.module.scss'
import SlideIndicator from '../../../components/SlideIndicator'

const KV = props => {
  const slideRef = useRef()
  return (
    <div className={styles.kv}>
      <FollowUs className={styles.followus} />
      <Slide ref={slideRef} />
      <SlideIndicator
        moveSlideRight={() => slideRef.current.slideNext()}
        moveSlideLeft={() => slideRef.current.slidePrev()}
        className={styles.fixedPageIndicator}
        currentSlide={props.currentSlideSection1}
        maxSlide={props.maxSlideSection1}
      />
    </div>
  )
}
const mapState = state => ({
  currentSlideSection1: state.section.homePage.section1.currentSlide,
  maxSlideSection1: state.section.homePage.section1.maxSlide
})
export default connect(mapState)(KV)
