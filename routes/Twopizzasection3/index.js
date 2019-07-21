
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import BreadHeader from "../../components/BreadPizzaPage";
const TwoPizzaSection3 = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <div className={`container ${styles.section3}`}>
        <div className="row justify-content-center">
        <BreadHeader title={data.title} subTitle={data.subTitle} />
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