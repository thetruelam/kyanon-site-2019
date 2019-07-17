
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const TwoPizzaSection5 = (props) => {
  const { data } = props;
//   const subTitleArray = data.subTitle.split("<br />").length > 1 ? data.subTitle.split("<br />") : null;
//   const contentLeftArray = data.leftContent.split("<br />").length > 1 ? data.leftContent.split("<br />") : null;
  return (
    <React.Fragment>
    <div className={`container ${styles.section5}`}>
    <div className="row justify-content-center">
      <div className={`col-xl-12 ${styles.title}`}>
        THE SCRUM TEAM
      </div>
      <div className={`col-xl-12 ${styles.sub_title}`}>
        WE ARE PROUD OF
      </div>
      <div className={`col-xl-4 ${styles.content_left}`}>
      <span>HIKAMI</span>  
      <br />
      <br />
        SCRUM TEAM OF 9 CHAMPIONS
      </div>
      <div className={`col-xl-8 ${styles.content_right}`}>
        A Swiss startup introduces The World’s First-ever Smart Bottle Opener which can instantly identify the Users, Time, Location and Brand of any crown capped bottle while it's being opened.
      </div>

      <div className={`col-xl-3 col-8 ${styles.scrum_team}`}>
        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
            Technology
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src="/static/two-pizza/arrow-bot.png" />
          </div>
          <div className={` ${styles.scrum_text}`}>
            Internet of Things, Image
            Recognition, Big Data, Machine
            Learning and Mobile
            Application
          </div>
        </div>

        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
            Tech Stack
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src="/static/two-pizza/arrow-bot.png" />
          </div>
          <div className={` ${styles.scrum_text}`}>
            React Native, PHP, Python,
            C++, Java, Objective-C, NoSQL,
            aImage Vision
          </div>
        </div>
      </div>
      <div className={`col-xl-6 col-8 ${styles.scrum_team}`}>
        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
            Structure of the team
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src="/static/two-pizza/arrow-bot.png" />
          </div>
          <div className={` ${styles.scrum_image}`}>
            <img className={`${styles.image_pc}`} src="/static/two-pizza/hakami-team.png" />
            <img className={`${styles.image_mb}`} src="/static/two-pizza/hakami-team-mb.png" />
          </div>
        </div>
      </div>
      <div className={`col-xl-3 col-8 ${styles.scrum_team}`}>
        <div className={`${styles.scrum_item}`}>
          <div className={`${styles.scrum_title}`}>
            Product Introduction
        </div>
          <div className={` ${styles.image_arrow}`}>
            <img src="/static/two-pizza/arrow-bot.png" />
          </div>
          <div className={` ${styles.scrum_image_video}`}>
            <img src="/static/two-pizza/video-ic.png" />
          </div>
          <a href="https://youtu.be/Y8De6_J2nZ0" class={`${styles.button_play}`} target="_blank">Play
                <img src="/static/two-pizza/play-ic.png" alt="play icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
  )
}
export default TwoPizzaSection5;