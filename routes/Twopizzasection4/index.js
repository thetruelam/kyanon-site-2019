
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import BreadHeader from "../../components/BreadPizzaPage";

const TwoPizzaSection4 = (props) => {
  const { data } = props;
  const contentLeftArray = data.leftContent.split("<br />").length > 1 ? data.leftContent.split("<br />") : null;
  return (
    <React.Fragment>
      <div className={`container ${styles.section4}`}>
        <div className="row">
          <BreadHeader title={data.title} subTitle={data.subTitle} />
          <div className={`col-xl-3 ${styles.content_left}`}>
            {contentLeftArray && contentLeftArray.length > 0 ? contentLeftArray.map((item, index) => {
              return (
                <span key={index}>{item} <br /> </span>
              )
            }) : (<span>{data.leftContent}</span>)}
          </div>
          <div className={`col-xl-9 ${styles.content_right}`}>
            {data.rightContent}
          </div>
          <div className={`col-xl-12 ${styles.image_frame}`}>
            <img src={`${data.imgPathPC}`} className={`${styles.image_pc}`} />
            <img src={`${data.imgPathMB}`} className={`${styles.image_mb}`} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection4;