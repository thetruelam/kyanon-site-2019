import styles from './section1.module.scss'
import { connect } from 'react-redux'
const Section1 = props => {
  return (
    <div className={`${props.className} section1`}>
      <div className={styles.wrap}>
        <div className={styles.leftBlock}>
          <div className={styles.textFront1}>
            {props.section1.contactsection1intro.textFront1}
          </div>
          <div className={styles.textFront2}>
            {props.section1.contactsection1intro.textFront2}
          </div>
          <div className={styles.textBehind}>
            {props.section1.contactsection1intro.textBehind}
          </div>
          <div
            onClick={() => props.slideTo(1)}
            className={styles.contactLocation}
          >
            Contact <br /> &amp;{' '}
            <span style={{ color: '#cf403d' }}>Locations</span>
            <br />
            <img src="/static/down-arrow.png" />
          </div>
        </div>
        <div className={styles.rightBlock}>
          <img
            className={styles.img}
            src={'/static/contact-map.png'}
            //src={`${props.backendDomain + props.section1.intro.imgPath.url}`}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
const mapState = state => ({
  section1: state.fetchData.contactUs.res.contactsection1,
  backendDomain: state.config.BACKEND_DOMAIN
})
export default connect(mapState)(Section1)
