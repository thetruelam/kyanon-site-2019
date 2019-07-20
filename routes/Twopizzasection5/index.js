
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const TwoPizzaSection5 = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
    <div className={`container ${styles.section5}`}>
    <div className="row justify-content-center">
    {data.title!=="#"?<div className={`col-xl-12 ${styles.title}`}>
        {data.title}
      </div>:<></>}
      {data.subTitle!=="#"?  <div className={`col-xl-12 ${styles.sub_title}`}>
        {data.subTitle}
      </div>:<></>}
      <div className={`col-xl-4 ${styles.content_left}`}>
      <span>{data.nameCompany}</span>  
      <br />
      <br />
        {data.titleCompany}
      </div>
      <div className={`col-xl-8 ${styles.content_right}`}>
        {data.detailCompany}
      </div>

      <div className={`col-xl-3 col-8 ${styles.scrum_team}`}>
        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
            {data.itemScrum1.title}
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src={data.itemScrum1.imgPath} />
          </div>
          <div className={` ${styles.scrum_text}`}>
          {data.itemScrum1.detail}
          </div>
        </div>

        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
          {data.itemScrum2.title}
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src={data.itemScrum2.imgPath} />
          </div>
          <div className={` ${styles.scrum_text}`}>
          {data.itemScrum1.detail}
          </div>
        </div>
      </div>
      <div className={`col-xl-6 col-8 ${styles.scrum_team}`}>
        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
          {data.itemScrum3.title}
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src={data.itemScrum3.imgPath} />
          </div>
          <div className={` ${styles.scrum_image}`}>
            <img className={`${styles.image_pc}`} src={data.itemScrum3.imgHakamiTeam} />
            <img className={`${styles.image_mb}`} src={data.itemScrum3.imgHakamiTeam2} />
          </div>
        </div>
      </div>
      <div className={`col-xl-3 col-8 ${styles.scrum_team}`}>
        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
          {data.itemScrum4.title}
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src={data.itemScrum4.imgPath} />
          </div>
          <div className={` ${styles.scrum_image_video}`}>
            <img src={data.itemScrum4.imgVideo} />
          </div>
          <a href={data.itemScrum4.urlVideo} class={`${styles.button_play}`} target="_blank">
                {data.itemScrum4.textPlay}
               {data.itemScrum4.imgPlay!=="#"?<img src={data.itemScrum4.imgPlay} alt="play icon" />:<></>} 
          </a>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
  )
}
export default TwoPizzaSection5;