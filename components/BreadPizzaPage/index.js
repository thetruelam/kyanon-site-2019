import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const BreadPizzaPage = (props) => {
  const { title, subTitle } = props;
  const subTitleArray = subTitle.split("<br />").length > 1 ? subTitle.split("<br />") : null;
  return (
    <React.Fragment>
          <div className={`col-xl-12 ${styles.title}`}>
            {title}
          </div>
          
          <div className={`col-xl-12 ${styles.sub_title}`}>
            {subTitleArray && subTitleArray.length > 0 ? subTitleArray.map((item, index) => {
              return (
                <span key={index}>{item} <br /> </span>
              )
            }) : (<span>{subTitle}</span>)}
          </div>
        </React.Fragment>
  )
}
export default BreadPizzaPage
          