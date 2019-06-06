import React from 'react'
import styles from './Section2.module.scss'
import Swiper from 'react-id-swiper'

const Section2 = props => {
  return (
    <div className={styles.section2}>
      <h2 className={styles.title}>
        Job <span style={{ color: '#cf403d' }}>Openings</span>
      </h2>
      <p className={styles.sub}>
        <span style={{ color: '#cf403d' }}>Find most suitable</span> for you
      </p>
      <div className={styles.wrap}>
        <div className={styles.jobList}>
          {/*block */}
          <Swiper
            containerClass={`swiper-container ${styles.swiper}`}
            direction="vertical"
          >
            <div className={styles.block}>
              <div className={styles.left}>
                <div className={styles.wrapImg}>
                  <img src="/static/career/1.png" />
                </div>
                <h2 className={styles.jobType}>Tech</h2>
              </div>
              <div className={styles.right}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>Software Engineer (PHP)</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>Software Engineer (PHP)</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>Quality Control Engineer</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>Quality Control Engineer</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>NodeJS Developer (Crawling Tool)</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>NodeJS Developer (Crawling Tool)</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>VueJS / NodeJS Developer</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  {/*max 8 item*/}
                </ul>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.left}>
                <div className={styles.wrapImg}>
                  <img src="/static/career/1.png" />
                </div>
                <h2 className={styles.jobType}>Tech</h2>
              </div>
              <div className={styles.right}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <span>VueJS / NodeJS Developer</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>VueJS / NodeJS Developer 2</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>VueJS / NodeJS Developer 3 </span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/*block*/}
            <div className={styles.block}>
              <div className={styles.left}>
                <div className={styles.wrapImg}>
                  <img src="/static/career/2.png" />
                </div>
                <h2 className={styles.jobType}>Account</h2>
              </div>
              <div className={styles.right}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                  <li className={styles.li}>
                    <span>PHP Technical Architect</span>
                    <span className={styles.details}>
                      <img src="/static/about-us/arrowli.png" />
                      {' Details'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
export default Section2
