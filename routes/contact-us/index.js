import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import PropTypes from 'prop-types'
import styles from './contactUs.module.scss'
import ScrollBottomIndicator from '../../components/ScrollBottomIndicator'
import Section1 from './Section1'
import Section2 from './Section2'
import ScrollBar from '../../components/ScrollBar'
import GetInTouch from './GetInTouch'
import { connect } from 'react-redux'
import { fetchData, section as sectionAction } from '../../redux/actions'
import Swiper from 'react-id-swiper'
//import dynamic from 'next/dynamic'

//const arrTable = ['Section1', 'Section2']

/* Lý Thành */
const checkReady = fetchDataContactUs => {
  try {
    return (
      //section1
      !!fetchDataContactUs.res.contactsection1 &&
      !!fetchDataContactUs.res.contactsection1.contactsection1intro &&
      !!fetchDataContactUs.res.contactsection1.contactsection1intro
        .textFront1 &&
      !!fetchDataContactUs.res.contactsection1.contactsection1intro
        .textFront2 &&
      !!fetchDataContactUs.res.contactsection1.contactsection1intro
        .textBehind &&
      !!fetchDataContactUs.res.contactsection1.contactsection1intro.imgPath &&
      //section2
      !!fetchDataContactUs.res.contactsection2 &&
      !!fetchDataContactUs.res.contactsection2.contactsection2office &&
      !!fetchDataContactUs.res.contactsection2.contactsection2contact &&
      !!fetchDataContactUs.res.contactsection2.contactsection2imagelist
    )
  } catch (err) {
    return false
  }
}
const ContactUs = props => {
  //swiperInstace is used inside <Swiper>
  // outside <Swiper use swiper``
  let swiperInstance = null
  const [swiper, updateSwiper] = useState(null)
  useEffect(() => {
    props.contactUsFetchDataRequest(`${props.backendDomain}/graphql`)
    /*reset section to 1*/
    props.moveToSectionContactUs(1)
  }, [])

  return (
    <React.Fragment>
      {checkReady(props.fetchDataContactUs) && (
        <div className={styles.background}>
          {/*<div style={{ position: 'fixed', top: '300px', zIndex: 99999 }}>
              <Link href="/test">test</Link>
            </div>*/}
          <div className={styles.wrapScrollBar}>
            <ScrollBar
              currentSection={props.sectionContactUs.currentSection}
              maxSection={props.sectionContactUs.maxSection}
              slideTo={(index, speed, runCallback) =>
                swiper.slideTo(index, speed, runCallback)
              }
              className={styles.scrollBar}
            />
          </div>
          <div className={styles.fixedWrapScrollBottom}>
            <GetInTouch className={styles.getInTouch} />
            <ScrollBottomIndicator
              currentSection={props.sectionContactUs.currentSection}
              maxSection={props.sectionContactUs.maxSection}
            />
          </div>
          <Swiper
            mousewheel={{
              sensitivity: 1,
              releaseOnEdges: true
            }}
            direction={'vertical'}
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
                props.moveToSectionContactUs(swiperInstance.realIndex + 1)
              }
            }}
          >
            {/*arrTable
              .map((e, i) => {
                return dynamic({
                  loader: () => import(`./${e}`)
                })
              })

              .map((E, i) => (
                <div key={i}>
                  <E
                    slideTo={(index, speed, runCallback) =>
                      swiper.slideTo(index, speed, runCallback)
                    }
                  />
                </div>
              ))*/}
            <div>
              <Section1
                slideTo={(index, speed, runCallback) =>
                  swiper.slideTo(index, speed, runCallback)
                }
              />
            </div>

            <div>
              <Section2 />
            </div>
          </Swiper>
          {/*<ReactFullpage
              onLeave={(origin, destination, direction) => {
                props.moveToSectionContactUs(destination.index + 1)
              }}
              controlArrows={false}
              render={({ state, fullpageApi }) => {
                moveTo = (section, slide) => {
                  fullpageApi.moveTo(section, slide)
                }
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <Section1
                        moveSectionDown={() => fullpageApi.moveSectionDown()}
                      />
                        </div>
                    <div className="section">
                      <Section2 />
                    </div>
                  </ReactFullpage.Wrapper>
                )
              }}
                />
                    )*/}
        </div>
      )}
    </React.Fragment>
  )
}

const mapState = state => ({
  fetchDataContactUs: state.fetchData.contactUs,
  sectionContactUs: state.section.contactUs,
  backendDomain: state.config.BACKEND_DOMAIN
})

const mapDispatch = { ...fetchData, ...sectionAction }
export default connect(
  mapState,
  mapDispatch
)(ContactUs)
