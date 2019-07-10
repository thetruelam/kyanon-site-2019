import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const TwoPizzaSection2 = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className={`row justify-content-center ${styles.padding_row}`}>
          <div className={`col-xl-12 ${styles.title}`}>
            <h4>{data.title}</h4>
            <h3>{data.subTitle}</h3>
          </div>
          <div className={`col-xl-12 ${styles.content}`}>
            <p>{data.contentParagraph1}</p>
            <p>{data.contentParagraph2}</p>
          </div>
          {data.listInformation.map((item, index) => {
            return (
              <div key={index} className={`col-6 col-xl-4 ${styles.padding_item}`}>
                <img src={item.imgPath} />
                <div className={`${styles.information}`}>
                  <label>{item.label}</label>
                  <p>{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection2;