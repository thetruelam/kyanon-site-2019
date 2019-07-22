
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import BreadHeader from "../../components/BreadPizzaPage";

const TwoPizzaSection5 = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <div className={`container ${styles.section5}`}>
        <div className="row justify-content-center">
          <BreadHeader title={data.title} subTitle={data.subTitle} />        
          {data.listCompany && data.listCompany.length > 0 && data.listCompany.map((item, index) => {
            return (
              <div className="container">
                <div className={`row ${styles.frame_company}`}>
                  <div className={`col-xl-4 ${styles.content_left}`}>
                    <span>{item.nameCompany}</span>
                    <br />
                    <br />
                    {item.titleCompany}
                  </div>
                  <div className={`col-xl-8 ${styles.content_right}`}>
                    {item.detailCompany}
                  </div>

                  <div className={`col-xl-3 col-12 ${styles.scrum_team}`}>
                    <div className={`${styles.scrum_item}`}>
                      <div className={`${styles.scrum_title}`}>
                        {item.itemScrum1.title}
                      </div>
                      <div className={` ${styles.image_arrow}`}>
                        <img src={item.itemScrum1.imgPath} />
                      </div>
                      <div className={` ${styles.scrum_text}`}>
                        {item.itemScrum1.detail}
                      </div>
                    </div>

                    <div className={`${styles.scrum_item}`}>
                      <div className={`${styles.scrum_title}`}>
                        {item.itemScrum2.title}
                      </div>
                      <div className={` ${styles.image_arrow}`}>
                        <img src={item.itemScrum2.imgPath} />
                      </div>
                      <div className={` ${styles.scrum_text}`}>
                        {item.itemScrum1.detail}
                      </div>
                    </div>
                  </div>
                  <div className={`col-xl-6 col-12 ${styles.scrum_team}`}>
                    <div className={`${styles.scrum_item}`}>
                      <div className={`${styles.scrum_title}`}>
                        {item.itemScrum3.title}
                      </div>
                      <div className={` ${styles.image_arrow}`}>
                        <img src={item.itemScrum3.imgPath} />
                      </div>
                      <div className={` ${styles.scrum_image}`}>
                        <img className={`${styles.image_pc}`} src={item.itemScrum3.imgHakamiTeam} />
                        <img className={`${styles.image_mb}`} src={item.itemScrum3.imgHakamiTeam2} />
                      </div>
                    </div>
                  </div>
                  <div className={`col-xl-3 col-12 ${styles.scrum_team}`}>
                    <div className={`${styles.scrum_item}`}>
                      <div className={`${styles.scrum_title}`}>
                        {item.itemScrum4.title}
                      </div>
                      <div className={` ${styles.image_arrow}`}>
                        <img src={item.itemScrum4.imgPath} />
                      </div>
                      <div className={` ${styles.scrum_image_video}`}>
                        <img src={item.itemScrum4.imgVideo} />
                      </div>
                      <a href={item.itemScrum4.urlVideo} className={`${styles.button_play}`} target="_blank">
                        {item.itemScrum4.textPlay}
                        {item.itemScrum4.imgPlay !== "#" ? <img src={item.itemScrum4.imgPlay} alt="play icon" /> : <></>}
                      </a>
                    </div>
                  </div>
                </div>
              </div>)
          })}

        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection5;