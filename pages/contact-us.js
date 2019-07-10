import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Swiper from 'react-id-swiper'
import styles from './contact.module.scss'
import ScrollBottomIndicator from '../components/ScrollBottomIndicator'
import FormContact from "../components/ContactUsForm"
import GetInTouch from '../components/GetInTouch'
import ScrollBar from '../components/ScrollBar'
import { section as sectionAction, menu as menuAction } from '../redux/actions'
import { connect } from 'react-redux'

const mapState = state => ({
  sectionContactUs: state.section.contactUs,
  menu: state.menu,
})

const mapDispatch = { ...sectionAction, ...menuAction }

let listSectionLayout = [];

const renderSection = (props) => {
  const { data } = props;
  data.map((item, index) => {
    let itemLayout = {}
    const Layout = dynamic(import(`../routes/${item.sectionLayout}`))
    itemLayout['layout'] = Layout
    itemLayout['data'] = item.sectiondetail.detailJson;
    listSectionLayout.push(itemLayout)
  })
}

const ContactUsPage = (props) => {
  let swiperInstance = null
  const [swiper, updateSwiper] = useState(null)
  useEffect(() => {
    props.moveToSectionContactUs(1)
  }, [])
  const { isOpenForm } = props.menu;
  return (
    <React.Fragment>
      {renderSection(props)}
      {listSectionLayout.length > 0 && (<>
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
        <Swiper
          mousewheel={{
            sensitivity: 1,
            releaseOnEdges: true
          }}
          direction={'vertical'}
          containerClass={`swiper-container ${styles.swiper}`}
          getSwiper={swiper => {
            swiperInstance = swiper
            updateSwiper(swiper)
          }}
          on={{
            slideChangeTransitionEnd: () => {
              props.moveToSectionContactUs(swiperInstance.realIndex + 1)
            }
          }}
        >
          {listSectionLayout && listSectionLayout.map((item, index) => {
            const Layout = item.layout
            return (
              <div key={index} style={{ height: "100vh" }}>
                <Layout data={item.data} />
              </div>
            )
          })}
        </Swiper>
        <div className={styles.fixedWrapScrollBottom}>
          <GetInTouch className={styles.getInTouch} clickContact={props.openForm} />
          <ScrollBottomIndicator
            currentSection={props.sectionContactUs.currentSection}
            maxSection={props.sectionContactUs.maxSection}
          />
        </div>
        {isOpenForm ? <FormContact submitForm={props.closeForm} /> : <></>}
      </>)}
    </React.Fragment>
  )
}
export default connect(
  mapState,
  mapDispatch
)(ContactUsPage)