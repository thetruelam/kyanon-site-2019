
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const TwoPizzaSection3 = (props) => {
  const { data } = props;
  const subTitleArray = data.subTitle.split("<br />").length > 1 ? data.subTitle.split("<br />") : null;
  return (
    <React.Fragment>
      <div className={`container ${styles.section3}`}>
        <div className="row justify-content-center">
          <div className={`col-xl-12 ${styles.title}`}>
            {data.title}
          </div>
          <div className={`col-xl-12 ${styles.sub_title}`}>
            {subTitleArray && subTitleArray.length > 0 ? subTitleArray.map((item, index) => {
              return (
                <span key={index}>{item} <br /> </span>
              )
            }) : (<span>{data.subTitle}</span>)}
          </div>
          {data.listBuild && data.listBuild.length > 0 && data.listBuild.map((item, index) => {
            const contentArray = item.content.split("<br />").length > 1 ? item.content.split("<br />") : null;
            return (
              <div key={index} className={`col-xl-4 col-6  ${styles.item_build}`}>
                <img src={item.imgPath} />
                <p>
                  {contentArray && contentArray.length > 0 ? contentArray.map((itemContent, indexContent) => {
                    return (<span key={indexContent}>{itemContent}<br /></span>)
                  }) : item.content}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection3;