import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from "./two-pizza.module.scss"
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

const TwoPizza = (props) => {
  renderSection(props);
  return (
    <React.Fragment>
      {listSectionLayout && listSectionLayout.map((item, index) => {
        const Layout = item.layout
        return (
          <div key={index}>
            <Layout data={item.data} />
          </div>
        )
      })}
      <div className={`container ${styles.section4}`}>
        <div className="row">
          <div className={`col-xl-12 ${styles.title}`}>
            AGILE SOFTWARE
          </div>
          <div className={`col-xl-12 ${styles.sub_title}`}>
            DEVELOPMENT<br />METHODOLOGY
          </div>
          <div className={`col-xl-3 ${styles.content_left}`}>
            SCRUM<br/>
            FRAMEWORK
          </div>
          <div className={`col-xl-9 ${styles.content_right}`}>
            With scrum, the product is built in a series of fixed-length iterations called sprints that give
            teams a framework for shipping software on a regular timeframe.
          </div>
          <div className={`col-xl-12 ${styles.image_frame}`}>
            <img src="/static/two-pizza/agile-software.png" className={`${styles.image_pc}`}/>
            <img src="/static/two-pizza/agile-software-mb.png" className={`${styles.image_mb}`}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizza;