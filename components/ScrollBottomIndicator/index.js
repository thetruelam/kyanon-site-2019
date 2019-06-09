import styles from './scrollbottom.module.scss'

const ScrollBottomIndicator = props => (
  <div className={props.className}>
    <div className={styles.bottomIndicator}>
      <img className={styles.img} src={'/static/Indicator.png'} />
      <div className={styles.pageIndicator}>
        <span className={styles.current}>
          {props.currentSection.toString().padStart(2, '0')}
        </span>
        <span className={styles.max}>
          {`/${props.maxSection.toString().padStart(2, '0')}`}
        </span>
      </div>
    </div>
  </div>
)
export default ScrollBottomIndicator
