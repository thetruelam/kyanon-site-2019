import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from "./two-pizza.module.scss"
import BreadHeader from "../components/BreadPizzaPage";

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
          <Layout key={index} data={item.data} />
        )
      })}
      <div className={`container ${styles.section6}`}>
        <div className="row justify-content-end">
          <BreadHeader title={`CLIENTS`} subTitle={`SATISFACTION`} />
          <div className={`col-xl-3 ${styles.avatar_client} pb-4`}>
            <img src="/static/two-pizza/client-01.png" />
          </div>
          <div className={`col-xl-8 ${styles.information_client} pb-4`}>
            <div className={`${styles.name_client}`}>
              Karim Choueiri
            </div>
            <div className={`${styles.position_client}`}>
              COFOUNDER & CEO
              <div>HIKAMI DIGITAL</div>
            </div>
            <div className={`${styles.description_client}`}>
              The scrum team represents themselves more than just a normal outsourcing supplier and deliver exceptionally beyond our expectation. It seems really enjoyable for them to constantly come up with new and exciting ideas as well as figure out effective solutions to raise the quality bar to the next level.
            </div>
          </div>
          <div className={`clearfix`}></div>
          <div className={`col-xl-3 order-last ${styles.avatar_client}`}>
            <img src="/static/two-pizza/client-02.png" />
          </div>
          <div className={`col-xl-8 ${styles.information_client} text-right`}>
            <div className={`${styles.name_client}`}>
              Nguyen Thuc Uyen Vi
            </div>
            <div className={`${styles.position_client}`}>
              HEAD OF ONLINE GROUP
              <div>SAMSUNG MOBILE VIETNAM</div>
            </div>
            <div className={`${styles.description_client}`}>
              Kyanon Digital team proactively learn and own complete understanding of our processes, which helps to cut down development time and revising efforts. I also appreciate their impressive service such as provide requested information with minimal turn-around, promptly answer my questions very thoroughly and satisfactorily. Therefore, we’re able to roll out products to the market as planned despite the constrained time-frame.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizza;