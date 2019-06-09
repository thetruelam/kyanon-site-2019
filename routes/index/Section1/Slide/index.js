import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { connect } from 'react-redux'
import styles from './slide.module.scss'
import Swiper from 'react-id-swiper'
import { moveToSlideHomePageSection1 } from '../../../../redux/actions/section'

const Slide = (props, ref) => {
  const slideItems = props.slideItems
  let swiperInstance = null
  const [swiper, updateSwiper] = useState()
  //forwardRef to include above method
  useImperativeHandle(ref, () => ({
    //mySwiper.slideTo(index, speed, runCallbacks);
    slideNext: (speed, runCallback) => swiper.slideNext(speed, runCallback),
    slidePrev: (speed, runCallback) => swiper.slidePrev(speed, runCallback)
  }))
  //let swiperInstance = null
  return (
    <Swiper
      containerClass={`swiper-container ${styles.swiper}`}
      //when swiper render, swiperInstance is swiper instance
      getSwiper={swiper => {
        swiperInstance = swiper
        updateSwiper(swiper)
      }}
      on={{
        //on init, set method slideTo
        slideChangeTransitionEnd: () => {
          props.moveToSlideHomePageSection1(swiperInstance.realIndex + 1)
        }
      }}
    >
      {slideItems.length !== 0 &&
        slideItems.map((slide, index) => (
          <div className="slide" data-anchor={`slide${index + 1}`} key={index}>
            <div
              className={styles.background}
              style={{
                backgroundImage: 'url(\'static/background.png\')'
                /*`url(${props.backendDomain +
                  slide['imgBackgroundPath']['url']})`*/
              }}
            >
              <div
                style={{
                  transform: 'translateY(-25px)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#fff'
                }}
              >
                {/* Html-editor */}

                <div
                  dangerouslySetInnerHTML={{ __html: slide['htmlEditor'] }}
                />
                {/* html-editor */}
                {/* Title-text */}
                <p className={styles.sloganTitle}>{slide['titleText']}</p>
                {/*  */}
                {/* Description-text */}
                <p
                  className={styles.sloganSub}
                  dangerouslySetInnerHTML={{
                    __html: slide['descriptionText']
                  }}
                />
                {/*  */}
              </div>
              {/*<div className={styles.wrapCta}>
                  {[> Button text <]}
                  <div className={styles.cta}>
                    {slide['buttonText']}
                    {[> <span className={styles.blackColor}>More</span>{' '}
                    <span className={styles.redColor}>Facts</span> <]}
                  </div>
                </div>*/}
            </div>
          </div>
        ))}
    </Swiper>
  )
}

const mapState = state => ({
  backendDomain: state.config.BACKEND_DOMAIN,
  slideItems:
    state.fetchData.homepage.res.homesection1.homesection1slider
      .homesection1slideitems
})
const mapDispatch = {
  moveToSlideHomePageSection1
}
export default connect(
  mapState,
  mapDispatch,
  null,
  { forwardRef: true }
)(forwardRef(Slide))
