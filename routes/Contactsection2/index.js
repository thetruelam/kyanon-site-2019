import styles from './section2.contact.scss'
import { connect } from 'react-redux'
import config from "../../config"
import React, { Component, useEffect, useState } from 'react'

const Section2 = (props)=>{
  const {data} = props
  const arrayImage = data.F13.split(',')
  return (
    <div className={`row ${styles.section2}`}>
      <div className={`${styles.leftBlock} col-12 col-sm-12 col-lg-6 col-xl-6`}>
        <div className={`${styles.left__padding}`}>
          <h1>OUR OFFICE</h1>
          <div>
            <h2>{data.F1}</h2>
            <p>{data.F2}</p>
          </div>
          <div>
            <h2>{data.F4}</h2>
            <p>{data.F5}</p>
          </div>
          <h1>CONTACT INFO</h1>
          <div>
            <h2>{data.F7}</h2>
            <p>{data.F8}</p>
          </div>
          <div>
            <h2>{data.F9}</h2>
            <p>{data.F10}</p>
          </div>
          <a
            href={data.F12}
            className={styles.career}
          >
            {data.F11}
          </a>
        </div>
      </div>
      <div className={`${styles.rightBlock} col-12 col-sm-12 col-lg-6 col-xl-6`}>
        <div className={styles.frameimg}>
          <img
            src={arrayImage[2]}
            //src={`${props.backendDomain + images[0].url}`}
            className={styles.photo_1}
            alt=""
          />
          <img
            src={arrayImage[1]} //Right
            //src={`${props.backendDomain + images[1].url}`}
            className={styles.photo_2}
            alt=""
          />
          <img
            src={arrayImage[0]}// Left
            //src={`${props.backendDomain + images[2].url}`}
            className={styles.photo_3}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}


export default Section2
