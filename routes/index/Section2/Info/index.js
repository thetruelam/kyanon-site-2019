import { connect } from 'react-redux'
import styles from './info.module.scss'
import SlideIndicator from '../../../../components/SlideIndicator'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import * as sectionAction from '../../../../redux/actions/section'
import { useRef, useEffect } from 'react'

const Info = props => {
  return (
    <div className={`${props.className} ${styles.info}`}>
      <div className={styles.background}>
        <div className={styles.byNumber}>By numbers</div>
        <div className={styles.carousel}>
          <div className={styles.carouselItem}>
            <div className={styles.wrapEachDiv}>
              <div className={styles.num}>10</div>
              <div className={styles.text}>Years of experience</div>
            </div>
            <div className={styles.wrapEachDiv}>
              <div className={styles.num}>100</div>
              <div className={styles.text}>People in 2 countries</div>
              <div className={styles.plus}>+</div>
            </div>
            <div className={styles.wrapEachDiv}>
              <div className={styles.num}>200</div>
              <div className={styles.text}>Awesome applications</div>
              <div className={styles.plus}>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapState = state => ({
  currentSlide: state.section.homePage.section2.currentSlide,
  maxSlide: state.section.homePage.section2.maxSlide
})
const mapDispatch = {
  ...sectionAction
}
export default connect(
  mapState,
  mapDispatch
)(Info)
Info.propTypes = {
  className: PropTypes.string,
  moveSlideLeft: PropTypes.func,
  moveSlideRight: PropTypes.func,
  currentSlide: PropTypes.number,
  maxSlide: PropTypes.number,
  sectionAction: PropTypes.object
}
