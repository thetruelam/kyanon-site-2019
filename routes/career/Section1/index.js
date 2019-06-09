import React from 'react'
import styles from './Section1.module.scss'

const Section1 = props => {
  return (
    <div className={styles.section1}>
      <div
        className={styles.wrap}
        style={{ backgroundImage: 'url(\'/static/about-us/section4.png\')' }}
      >
        <h1 className={styles.title}>Careers</h1>
        <div className={styles.content}>
          <div className={styles.available}>
            <span style={{ fontSize: '2.5rem', marginBottom: '10px' }}>19</span>
            <span style={{ color: '#fe8582' }}>AVAILABLE</span>
            <span style={{ color: '#acacac' }}>POSITIONS</span>
            <hr style={{ width: '100%', border: '2px solid #fe8582' }} />
          </div>
          <div className={styles.left}>
            <h2 className={styles.leftTitle}>
              Kyanon Digital always welcomes{' '}
              <span style={{ color: '#cc0000' }}>aspiring archers</span> to join
              our ranks
            </h2>
            <p>
              If you are a digital visionary, schemer, social guru or a tech
              wizard looking for a place to flourish and put your creative
              juices to work, Kyanon Digital is here for you. We always welcome
              talents who identify with the Kyanon culture, and possess the
              skill set of a digital archer.
            </p>
            <p>
              We at Kyanon are always eager to meet new people and reward
              outperforming members with competitive salaries and benefits.
            </p>
          </div>
          <div className={styles.right}>
            <h3 className={styles.rightTitle}>
              If you are interested to be an archer,{' '}
              <span style={{ color: '#ef3e3b' }}>send your updated resume</span>{' '}
              and cover letter that highlights your experiences.
            </h3>
            <p>
              Our HR department will review your resume upon receiving, and will
              pass it to the recruiting manager for further processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
