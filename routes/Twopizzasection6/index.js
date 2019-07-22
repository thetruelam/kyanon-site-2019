
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import BreadHeader from "../../components/BreadPizzaPage";

const TwoPizzaSection6 = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <div className={`container ${styles.section6}`}>
        <div className="row justify-content-end">
          <BreadHeader title={data.title} subTitle={data.subTitle} />
          {data.clientList && data.clientList.length > 0 && data.clientList.map((item, index) => {
            return (
              <>
                <div className={`col-xl-3 ${item.avatarLeft?"":"order-last"} ${styles.avatar_client} pb-4`}>
                  <img src={item.imgAvatar} />
                </div>
                <div className={`col-xl-8 ${styles.information_client} ${item.avatarLeft?"":"text-right"} pb-4`}>
                  <div className={`${styles.name_client}`}>
                    {item.nameClient}
                  </div>
                  <div className={`${styles.position_client}`}>
                    {item.positionClient}
                    <div>{item.companyClient}</div>
                  </div>
                  <div className={`${styles.description_client}`}>
                    {item.descriptionClient}
                  </div>
                </div>
                <div className={`clearfix`}></div>
              </>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection6