import React, { useState, useEffect } from 'react'
import styles from './two-pizza.module.scss'
const TwoPizza = (props) => {
  return (
    <React.Fragment>
      <div className={styles.full_screen}>
        <div className={styles.kv_pc}>
          <img src="/static/two-pizza/kv-floor-pc.png" />
          <img className={styles.dot} src="/static/two-pizza/kv-dots-pc.png" />
          <img className={styles.scrum} src="/static/two-pizza/kv-scrum-pc.png" />
          <img className={styles.scrum_color} src="/static/two-pizza/kv-scrumcolor-pc.png" />
          <img className={styles.pizza_1} src="/static/two-pizza/kv-pizza1-pc.png" />
          <img className={styles.pizza_2} src="/static/two-pizza/kv-pizza2-pc.png" />
          <img className={styles.pizza_3} src="/static/two-pizza/kv-pizza3-pc.png" />
          <img className={styles.text} src="/static/two-pizza/kv-text-pc.png" />
          <img className={styles.text_color} src="/static/two-pizza/kv-textcolor-pc.png" />
          <img className={styles.text_pizza} src="/static/two-pizza/kv-textpizza-pc.png" />
          <img className={styles.location} src="/static/two-pizza/kv-location-pc.png" />
        </div>
      </div>
      <div className="container-fluid">
        <div className={`row ${styles.padding_row}`}>
          <div className={`col-xl-12 ${styles.title}`}>
            <h4>We are</h4>
            <h3>KYANON DIGITAL</h3>
          </div>
          <div className={`col-xl-12 ${styles.content}`}>
            <p>We are a team of agile practitioners who keep practicing
            agile mindset, we value individuals and interactions,
            we embrace change and think different.</p>
            <p>Applying best practices from Scrum and XP,
            we are committed to our client’s success with focus, commitment,
            openness and respect.</p>
          </div>
          <div className={`col-xl-4 ${styles.padding_item}`}>
            <img src="/static/two-pizza/kyanon-digital-01.png" />
            <div className={`${styles.information}`}>
              <label>10 YEARS</label>
              <p>EXPERIENCES</p>
            </div>
          </div>
          <div className={`col-xl-4  ${styles.padding_item}`}>
            <img src="/static/two-pizza/kyanon-digital-02.png" />
            <div className={`${styles.information}`}>
              <label>100 PEOPLE</label>
              <p>IN 2 COUNTRIES</p>
            </div>
          </div>
          <div className={`col-xl-4  ${styles.padding_item}`}>
            <img src="/static/two-pizza/kyanon-digital-03.png" />
            <div className={`${styles.information}`}>
              <label>1000</label>
              <p>APPLICATIONS</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizza;