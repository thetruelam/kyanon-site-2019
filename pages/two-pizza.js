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
        </React.Fragment>
    )
}
export default TwoPizza;