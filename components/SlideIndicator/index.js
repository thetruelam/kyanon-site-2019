import styles from './pageindicator.module.scss'

const SlideIndicator = props => {
  return (
    <div className={props.className}>
      <div className={styles.wrap}>
        <img
          onClick={props.moveSlideLeft}
          className={styles.imgPrev}
          src="/static/nextslide.png"
        />
        <span className={styles.current}>
          {props.currentSlide
            ? props.currentSlide.toString().padStart(2, '0')
            : null}
        </span>
        &nbsp;|&nbsp;
        <span className={styles.max}>
          {props.maxSlide ? props.maxSlide.toString().padStart(2, '0') : null}
        </span>
        <img
          onClick={props.moveSlideRight}
          className={styles.imgNext}
          src="/static/nextslide.png"
        />
      </div>
    </div>
  )
}

export default SlideIndicator
