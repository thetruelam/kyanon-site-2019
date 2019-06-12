import styles from './section1.contact.scss'
import { connect } from 'react-redux'
import config from "../../config"
import React, { Component, useEffect, useState } from 'react'

class Section1 extends Component {
  state = {
    data: null
  }
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
          data: res[0].detailJson
        })
        console.log(">>>>>", res)
      })
  }
  render() {
    if (!this.state.data) {
      return (<></>)
    }
    const { data } = this.state
    return (
      <div className={`${this.props.className} section1`}>
        <div className={styles.wrap}>
          <div className={styles.leftBlock}>
            <p className={styles.textFront1}>
              {data.textFront1}
            </p>
            <p className={styles.textFront2}>
              {data.textFront2}
            </p>
            <br/>
            <p className={styles.textBehind}>
              {data.textBehind}
            </p>
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
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Section1
