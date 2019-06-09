import React from 'react'
import styles from './our-work.module.scss'
import cn from 'classnames'
import Masonry from 'react-masonry-component'

const OurWork = props => {
  return (
    <div className={cn({ [styles.ourwork]: true, [props.className]: true })}>
      <div className={styles.wrapOuter}>
        <h1 className={styles.pageTitle}>OUR WORK</h1>
        <Masonry className={styles.masonry}>
          {/*oitem */}
          <div className={styles.wrapItem}>
            <img className={styles.img} src={'/static/ourwork/1.png'} />
            <div className={styles.hover}>
              <div className={styles.innerHover}>
                <p className={styles.num}>01</p>
                <p className={styles.type}>Creative Technology Production</p>
                <div className={styles.wrapCenter}>
                  <p className={styles.title}>The Dew Battle</p>
                  <div className={styles.wrapImg}>
                    <img src="/static/ourwork/button.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*oitem */}
          <div className={styles.wrapItem}>
            <img className={styles.img} src={'/static/ourwork/2.png'} />
            <div className={styles.hover}>
              <div className={styles.innerHover}>
                <p className={styles.num}>01</p>
                <p className={styles.type}>Creative Technology Production</p>
                <div className={styles.wrapCenter}>
                  <p className={styles.title}>The Dew Battle</p>
                  <div className={styles.wrapImg}>
                    <img src="/static/ourwork/button.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapItem}>
            <img className={styles.img} src={'/static/ourwork/3.png'} />
            <div className={styles.hover}>
              <div className={styles.innerHover}>
                <p className={styles.num}>01</p>
                <p className={styles.type}>Creative Technology Production</p>
                <div className={styles.wrapCenter}>
                  <p className={styles.title}>The Dew Battle</p>
                  <div className={styles.wrapImg}>
                    <img src="/static/ourwork/button.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapItem}>
            <img className={styles.img} src={'/static/ourwork/4.png'} />
            <div className={styles.hover}>
              <div className={styles.innerHover}>
                <p className={styles.num}>01</p>
                <p className={styles.type}>Creative Technology Production</p>
                <div className={styles.wrapCenter}>
                  <p className={styles.title}>The Dew Battle</p>
                  <div className={styles.wrapImg}>
                    <img src="/static/ourwork/button.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapItem}>
            <img className={styles.img} src={'/static/ourwork/5.png'} />
            <div className={styles.hover}>
              <div className={styles.innerHover}>
                <p className={styles.num}>01</p>
                <p className={styles.type}>Creative Technology Production</p>
                <div className={styles.wrapCenter}>
                  <p className={styles.title}>The Dew Battle</p>
                  <div className={styles.wrapImg}>
                    <img src="/static/ourwork/button.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Masonry>
      </div>
      <p className={styles.cp}>Kyanon 2019©. All rights reserved</p>
    </div>
  )
}

export default OurWork
