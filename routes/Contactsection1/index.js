import styles from './section1.module.scss'
import { connect } from 'react-redux'
import config from "../../config"
import React, { Component, useEffect, useState } from 'react'
let data = null
class Section1 extends Component {
  componentDidMount() {
    fetch(`${config.BACKEND_DOMAIN}sectiondetails?id=${this.props.idSection}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => { return response.json() })
      .then(res => {
        data = res.detailJson
        console.log(">>>>>", res)
      })
  }
  render() {
    return (
      <div className={`${this.props.className} section1`}>
        <div className={styles.wrap}>
          <div className={styles.leftBlock}>
            {/* <div className={styles.textFront1}>
            {data.F1}
          </div>
          <div className={styles.textFront2}>
            {data.F2}
          </div>
          <div className={styles.textBehind}>
            {data.F3}
          </div> */}
            <div
              onClick={() => this.props.slideTo(1)}
              className={styles.contactLocation}
            >
              Contact <br /> &amp;{' '}
              <span style={{ color: '#cf403d' }}>Locations</span>
              <br />
              <img src="/static/down-arrow.png" />
            </div>
          </div>
          <div className={styles.rightBlock}>
            <img
              className={styles.img}
              src={'/static/contact-map.png'}
              //src={`${props.backendDomain + props.section1.intro.imgPath.url}`}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Section1
