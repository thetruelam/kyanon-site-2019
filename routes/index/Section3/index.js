import styles from './Section3.module.scss'
import Slide from './Slide'
import cn from 'classnames'

const Section3 = props => {
  return (
    <div className={cn({ [props.className]: true, [styles.section3]: true })}>
      <div className={styles.title}>OUR WORK</div>
      <Slide className={styles.slide} />
    </div>
  )
}

export default Section3
