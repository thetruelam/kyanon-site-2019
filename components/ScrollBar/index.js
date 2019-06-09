import React from 'react'
import styles from './scrollbar.module.scss'
import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import cn from 'classnames'
import PropTypes from 'prop-types'

const ScrollBar = props => {
  return (
    <div className={`${props.className} scrollbar`}>
      <div className={styles.wrap}>
        {/*
         * Fill array with maxSection element
         * */}
        {Array(props.maxSection)
          .fill(0)
          .map((element, index) => (
            <div key={index} className={styles.block}>
              <CSSTransition
                in={index + 1 === props.currentSection}
                timeout={500}
                classNames={{
                  enter: styles['arrow-enter'],
                  enterActive: styles['arrow-enter-active'],
                  enterDone: styles['arrow-enter-done'],
                  exit: styles['arrow-exit'],
                  exitActive: styles['arrow-exit-active'],
                  exitDone: styles['arrow-exit-done']
                }}
                className={styles.arrow}
                mountOnEnter
              >
                <img
                  className={styles.arrowImg}
                  src="/static/scrollarrow.png"
                />
              </CSSTransition>
              {/*
               * padStart 01,02,.. .
               */}
              <div
                className={cn({
                  [styles.sectionNum]: true,
                  [styles.activeNum]: index + 1 === props.currentSection
                })}
                onClick={() => props.slideTo(index)}
              >
                {(index + 1).toString().padStart(2, '0')}
              </div>
              {/*
               * If not last element, show dot-line
               * */}
              {index + 1 !== props.maxSection && (
                <img className={styles.dotLine} src="/static/dot-line.png" />
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default ScrollBar

ScrollBar.propTypes = {
  className: PropTypes.string,
  maxSection: PropTypes.number,
  currentSection: PropTypes.number,
  slideTo: PropTypes.func
}
