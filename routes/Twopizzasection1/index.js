import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
const TwoPizzaSection1 = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <div className={styles.full_screen}>
        <div className={styles.kv_pc}>
          <img src={data.listImage[0]} />
          <img className={styles.dot} src={data.listImage[1]} />
          <img className={styles.scrum} src={data.listImage[2]} />
          <img className={styles.scrum_color} src={data.listImage[3]} />
          <img className={styles.pizza_1} src={data.listImage[4]} />
          <img className={styles.pizza_2} src={data.listImage[5]} />
          <img className={styles.pizza_3} src={data.listImage[6]} />
          <img className={styles.text} src={data.listImage[7]} />
          <img className={styles.text_color} src={data.listImage[8]} />
          <img className={styles.text_pizza} src={data.listImage[9]} />
          <img className={styles.location} src={data.listImage[10]} />
        </div>
        <div clasName={styles.kv_mb}>
          <img src={data.listImage[11]} />
          <img className={styles.dot} src={data.listImage[12]} />
          <img className={styles.scrum} src={data.listImage[13]} />
          <img className={styles.scrum_color} src={data.listImage[14]} />
          <img className={styles.pizza_1} src={data.listImage[15]} />
          <img className={styles.pizza_2} src={data.listImage[16]} />
          <img className={styles.pizza_3} src={data.listImage[17]} />
          <img className={styles.text} src={data.listImage[18]} />
          <img className={styles.text_color} src={data.listImage[19]} />
          <img className={styles.text_pizza} src={data.listImage[20]} />
        </div>
      </div>
    </React.Fragment>
  )
}
export default TwoPizzaSection1