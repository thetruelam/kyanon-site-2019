import React from 'react'
import styles from './Section3.module.scss'
import Link from 'next/link'

const Section3 = props => {
  return (
    <div className={styles.section3}>
      <div
        className={styles.centerDiv}
        style={{ backgroundImage: 'url(\'/static/about-us/section6.png\')' }}
      >
        <div className={styles.wrapContent}>
          <p className={styles.title}>
            Nothing Here <span style={{ color: '#c00' }}>For You?</span>
          </p>
          <div className={styles.content}>
            Stay on our radar and don’t miss out on a future opportunity.
            <Link href={'mailto:career@kyanon.digital'}>
              <a className={styles.a}>
                <p className={styles.email} style={{ color: '#c00' }}>
                  career@kyanon.digital
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
