import styles from './section1.module.scss'
import { connect } from 'react-redux'
import config from "../../config"
import React, { Component, useEffect, useState } from 'react'

class Section1 extends Component {
  state = {data:null}
  componentDidMount() {
    fetch(`${config.BACKEND_DOMAIN}sectiondetails?id=${this.props.idSection}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => { return response.json() })
      .then(res => {
        this.setState({
          data = res[0].detailJson
        })
        console.log(">>>>>", res)
      })
  }
  render() {
    if(!this.state.data)
    {
      return (<></>)
    }
    return (
      <div className={`${this.props.className} section1`}>
        <div className={styles.wrap}>
          <div className={styles.leftBlock}>
            <div className={styles.textFront1}>
            {data.textFront1}
          </div>
          <div className={styles.textFront2}>
            {data.textFront2}
          </div>
          <div className={styles.textBehind}>
            {data.textBehind}
          </div>
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
              src={`${data.mapUrl}`}
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
