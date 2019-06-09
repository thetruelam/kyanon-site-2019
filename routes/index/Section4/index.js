import React, { useState } from 'react'
import cn from 'classnames'
import Swiper from 'react-id-swiper'
import styles from './Section4.module.scss'

const Section4 = props => {
  const [swiper, updateSwiper] = useState(null)
  return (
    <div className={cn({ [styles.section4]: true })}>
      <div className={styles.wrap}>
        <div className={styles.title}>OUR CLIENTS</div>
        <div className={styles.wrapSwiper}>
          <Swiper
            containerClass={`swiper-container ${styles.swiperContainer}`}
            loop={true}
            getSwiper={updateSwiper}
            slidesPerView={4}
            spaceBetween={10}
          >
            <div
              className={styles.item}
              style={{ backgroundImage: 'url(\'/static/nestle.png\')' }}
            >
              <div className={styles.textWrap}>
                <div className={styles.inner}>
                  <div className={styles.titleWork}>Microsoft</div>
                  <div className={styles.des}>Technology company</div>
                  <p>
                    A campaign to express consumers’ love, encourage them to
                    share positive opinions, recognize & reward for all their
                    contributions.
                  </p>
                </div>
              </div>
            </div>
            {/*item */}
            <div
              className={styles.item}
              style={{ backgroundImage: 'url(\'/static/nestle.png\')' }}
            >
              <div className={styles.textWrap}>
                <div className={styles.inner}>
                  <div className={styles.titleWork}>Microsoft</div>
                  <div className={styles.des}>Technology company</div>
                  <p>
                    A campaign to express consumers’ love, encourage them to
                    share positive opinions, recognize & reward for all their
                    contributions.
                  </p>
                </div>
              </div>
            </div>
            {/*item */}
            <div
              className={styles.item}
              style={{ backgroundImage: 'url(\'/static/nestle.png\')' }}
            >
              <div className={styles.textWrap}>
                <div className={styles.inner}>
                  <div className={styles.titleWork}>Microsoft</div>
                  <div className={styles.des}>Technology company</div>
                  <p>
                    A campaign to express consumers’ love, encourage them to
                    share positive opinions, recognize & reward for all their
                    contributions.
                  </p>
                </div>
              </div>
            </div>
            {/*item */}
            <div
              className={styles.item}
              style={{ backgroundImage: 'url(\'/static/nestle.png\')' }}
            >
              <div className={styles.textWrap}>
                <div className={styles.inner}>
                  <div className={styles.titleWork}>Microsoft</div>
                  <div className={styles.des}>Technology company</div>
                  <p>
                    A campaign to express consumers’ love, encourage them to
                    share positive opinions, recognize & reward for all their
                    contributions.
                  </p>
                </div>
              </div>
            </div>
            {/*item */}
            <div
              className={styles.item}
              style={{ backgroundImage: 'url(\'/static/nestle.png\')' }}
            >
              <div className={styles.textWrap}>
                <div className={styles.inner}>
                  <div className={styles.titleWork}>Microsoft</div>
                  <div className={styles.des}>Technology company</div>
                  <p>
                    A campaign to express consumers’ love, encourage them to
                    share positive opinions, recognize & reward for all their
                    contributions.
                  </p>
                </div>
              </div>
            </div>
          </Swiper>
          <div
            className={styles.prev}
            onClick={() => {
              if (swiper !== null) swiper.slidePrev()
            }}
          >
            {'<'}
          </div>
          <div
            className={styles.next}
            onClick={() => {
              if (swiper !== null) swiper.slideNext()
            }}
          >
            {'>'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
