import styles from './Section1.module.scss'
import cn from 'classnames'

const Section1 = props => {
  return (
    <div
      className={cn(props.className, styles.section1)}
      style={{ backgroundImage: 'url(\'/static/about-us/section1.png\')' }}
    >
      <div className={styles.wrapText}>
        <div className={styles.title}>
          <span style={{ color: '#cf403d', fontSize: '7.5rem' }}>
            {'"Can do" '}
          </span>
          <span style={{ fontSize: '5.3rem' }}>{' attitude '}</span>
          <p>
            <span style={{ fontSize: '3.2rem' }}>{' is our '}</span>
            <span style={{ fontSize: '4.4rem' }}>{' FOCUS '}</span>
          </p>
        </div>
        <div className={styles.desText}>
          Fast, agile and accurate - distinguishing features that head us to the
          target.
        </div>
      </div>
    </div>
  )
}

export default Section1
