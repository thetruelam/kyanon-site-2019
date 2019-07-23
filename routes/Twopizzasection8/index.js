
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import BreadHeader from "../../components/BreadPizzaPage";

const TwoPizzaSection8 = (props) => {
  // const { data } = props;
  return (
    <React.Fragment>
      <div className={`container ${styles.section8}`}>
        <div className="row justify-content-center">
          <BreadHeader title={`WE ARE`} subTitle={`ONE AGILE TEAM`} />
          <div className={`col-xl-4 ${styles.content_left}`}>
            <h4>What we believe?</h4>
          </div>
          <div className={`col-xl-8 ${styles.content_right}`}>
            <div className={`${styles.img_frame}`}>
              <img className={`${styles.image_pc}`} src={`/static/two-pizza/we-agile-team.png`} />
              <img className={`${styles.image_mb}`} src={`/static/two-pizza/we-agile-team-mb.png`} />
            </div>
          </div>
          <div className={`col-xl-10 pt-5 ${styles.content_bottom}`}>
            <img src={`/static/two-pizza/agile-team.png`} />
            <a className={`${styles.button_play}`} href={`https://youtu.be/W2MWPvtdfT0`}>
              <span class="nlist-belive-team__txt">Play</span>
              <img src={`/static/two-pizza/play-ic-01.png`} alt="play icon" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection8