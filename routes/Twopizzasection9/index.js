
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import BreadHeader from "../../components/BreadPizzaPage";

const TwoPizzaSection9 = (props) => {
  // const { data } = props;
  return (
    <React.Fragment>
      <div className={`container ${styles.section9}`}>
        <div className="row justify-content-center">
          <BreadHeader title={`BUILD YOUR KICK-ASS`} subTitle={`TWO-PIZZA TEAM <br />WITH KYANON DIGITAL`} />
          <div className={`col-xl-5 ${styles.left_content}`}>
            <img src="/static/two-pizza/build-your-kickass.png" />
          </div>
          <div className={`col-xl-7 ${styles.right_content}`}>
            <h4 className={`${styles.name}`}>HIEN PHAN (Ms)</h4>
            <h4 className={`${styles.position}`}>REGIONAL BUSINESS DIRECTOR</h4>
            <table className={`${styles.table_twopizza}`}>
              <tr>
                <td>
                  <img src="/static/two-pizza/mail-ic.png" />
                </td>
                <td>
                  <p><a href="mailto:hien.phan@kyanon.digital">hien.phan@kyanon.digital</a></p>
                </td>
              </tr>
              <tr>
                <td><img src="/static/two-pizza/loca-ic.png" /></td>
                <td>
                  <p>Singapore: WeWork Beach Centre, 15 Beach Rd, #02-01 Singapore 189677
                <br />
                    Vietnam: 294-296 Truong Sa, Ward 2, Phu Nhuan District, HCMC, Vietnam</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/static/two-pizza/link-ic.png" />
                </td>
                <td>
                  <p>
                    Website: kyanon.digital/the-two-pizza-team
                    </p>
                </td>
              </tr>
            </table>
            <a className={`${styles.button_play}`} href="">CONTACT US</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection9