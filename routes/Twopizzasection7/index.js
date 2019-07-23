
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import BreadHeader from "../../components/BreadPizzaPage";

const TwoPizzaSection7 = (props) => {
  // const { data } = props;
  return (
    <React.Fragment>
      <div className={`container ${styles.section7}`}>
        <div className="row justify-content-center">
          <BreadHeader title={`CLIENTS`} subTitle={`WE ARE PROUD<br />TO WORK WITH`} />
          <div className={`col-xl-8 ${styles.img_frame}`}>
            <img className={`${styles.image_pc}`} src={`/static/two-pizza/branding.png`} />
            <img className={`${styles.image_mb}`} src={`/static/two-pizza/branding-mb.png`} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection7