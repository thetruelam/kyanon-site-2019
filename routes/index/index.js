import React, { useEffect, useState } from 'react'
//import ReactFullpage from '@fullpage/react-fullpage'
import BottomTitle from '../../components/BottomTitle'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import {
  section as sectionAction,
  fetchData as fetchDataAction
} from '../../redux/actions'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import RightSideText from '../../components/RightSideText'
import ScrollBottomIndicator from '../../components/ScrollBottomIndicator'
import Swiper from 'react-id-swiper'

const checkReady = homepageState => {
  try {
    return (
      !!homepageState.res &&
      // section1
      !!homepageState.res.homesection1 &&
      !!homepageState.res.homesection1.homescrolltoexplore &&
      !!homepageState.res.homesection1.homesection1contact &&
      !!homepageState.res.homesection1.homesection1followus &&
      !!homepageState.res.homesection1.homesection1logo &&
      !!homepageState.res.homesection1.homesection1slider
    )
  } catch (err) {
    return false
  }
}
const getBottomTitleText = sectionNum => {
  switch (sectionNum) {
  case 3:
    return {
      textLeft: 'PROJECT',
      textRight: 'SHOWCASES'
    }

  case 4:
    return {
      textLeft: 'PORTFOLIO',
      textRight: 'TESTIMONIALS'
    }
  case 5:
    return {
      textLeft: 'CONTACT',
      textRight: 'US'
    }
  default:
    return {}
  }
}
const getRightSideText = currentSectionHomepage => {
  switch (currentSectionHomepage) {
  case 1:
    return 'SCROLL TO EXPLORE'

  default:
    return ''
  }
}
const Index = props => {
  let swiperInstance = null
  const [swiper, updateSwiper] = useState(null)
  const [bottomTitle, setBottomTitle] = useState({})
  const [rightSideText, setRightSideText] = useState('')

  useEffect(() => {
    props.homepageFetchDataRequest(`${props.backendDomain}/graphql`)
    props.moveToSectionHomePage(1)
  }, [])
  useEffect(() => {
    setBottomTitle(getBottomTitleText(props.sectionHomepage.currentSection))
    setRightSideText(getRightSideText(props.sectionHomepage.currentSection))
  }, [props.sectionHomepage.currentSection])
  return (
    <div className={styles.background}>
      <div className={styles.fixedWrapScrollBottom}>
        <ScrollBottomIndicator
          currentSection={props.sectionHomepage.currentSection}
          maxSection={props.sectionHomepage.maxSection}
        />
      </div>
      <div className={styles.fixedBottomTitle}>
        <BottomTitle {...bottomTitle} />
      </div>

      {checkReady(props.homepageState) && (
        <React.Fragment>
          <div className={styles.fixedWrapRightSide}>
            <RightSideText
              className={styles.fixedRightSideText}
              text={rightSideText}
            />
          </div>
          <Swiper
            mousewheel={{
              sensitivity: 0.5,
              releaseOnEdges: true
            }}
            direction={'vertical'}
            containerClass={`swiper-container ${styles.swiper}`}
            //when swiper render, swiperInstance is swiper instance
            getSwiper={swiper => {
              swiperInstance = swiper
              updateSwiper(swiper)
            }}
            on={{
              //on init, set method slideTo
              slideChangeTransitionEnd: () => {
                props.moveToSectionHomePage(swiperInstance.realIndex + 1)
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
          </Swiper>
        </React.Fragment>
      )

      /*<ReactFullpage
          controlArrows={false}
          onLeave={(origin, destination, direction) => {
            if (direction === 'up') props.prevSectionHomePage()
            if (direction === 'down') props.nextSectionHomePage()
          }}
          onSlideLeave={(section, origin, destination, direction) => {
            if (
              sectionMap(props.sectionHomepage.currentSection) === 'Section1'
            ) {
              if (direction === 'right') {
                props.nextSlideHomePageSection1()
              }
              if (direction === 'left') {
                props.prevSlideHomePageSection1()
              }
            }
          }}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Section1
                    moveSlideRight={() => fullpageApi.moveSlideRight()}
                    moveSlideLeft={() => fullpageApi.moveSlideLeft()}
                  />
                </div>
                <div className="section">
                  section2
                  {[><Section2
                      moveSlideRight={() => fullpageApi.moveSlideRight()}
                      moveSlideLeft={() => fullpageApi.moveSlideLeft()}
                    /><]}
                </div>
                <div className="section">section3</div>
              </ReactFullpage.Wrapper>
            )
          }}
        />*/
      }
    </div>
  )
}

const mapState = state => ({
  homepageState: state.fetchData.homepage,
  backendDomain: state.config.BACKEND_DOMAIN,
  sectionHomepage: state.section.homePage
})
const mapDispatch = { ...sectionAction, ...fetchDataAction }
export default connect(
  mapState,
  mapDispatch
)(Index)
