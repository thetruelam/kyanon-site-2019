import styles from './getInTouch.module.scss'
import PropTypes from 'prop-types'

const GetInTouch = props => {
  return (
    <div className={`${props.className} getInTouch`}>
      <div className={styles.wrap}>
        <div className={styles.getInTouch}>Get In Touch</div>
        <div className={styles.contactUs}>
          <div className={styles.contact}>CONTACT</div>{' '}
          <div className={styles.us}>US</div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
GetInTouch.propTypes = {
  className: PropTypes.string
}
