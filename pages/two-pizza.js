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
      <div className={`container ${styles.section3}`}>
        <div className="row justify-content-center">
          <div className={`col-xl-12 ${styles.title}`}>
            WE BUILD
          </div>
          <div className={`col-xl-12 ${styles.sub_title}`}>
            YOUR KICK-ASS<br />
            TWO-PIZZA TEAM
          </div>
          <div className={`col-xl-4 col-6  ${styles.item_build}`}>
            <img src="/static/two-pizza/deicated-team.png" />
            <p>A team treats your <br/>product like their own.</p>
          </div>
          <div className={`col-xl-4 col-6  ${styles.item_build}`}>
            <img src="/static/two-pizza/fixed-price.png" />
            <p>A team welcomes changes to<br/> maximize your investment.</p>
          </div>
          <div className={`col-xl-4 col-6  ${styles.item_build}`}>
            <img src="/static/two-pizza/bot.png" />
            <p>We build, operate and transfer your<br/> own Scrum team in Vietnam.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizza;