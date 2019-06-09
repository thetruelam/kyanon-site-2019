import styles from './followus.module.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const FollowUs = props => (
  <div className={props.className}>
    <div className={styles.flexBox}>
      <div className={styles.linkedin}>
        <img
          className={styles.linkedinImg}
          src={'/static/linkedin.png'}
          //src={`${props.backendDomain + props.followus.imgPath.url}`}
        />
      </div>
      <div className={styles.text}>
        {props.followus.text}
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'/'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  </div>
)

const mapState = state => ({
  backendDomain: state.config.BACKEND_DOMAIN,
  followus: state.fetchData.homepage.res.homesection1.homesection1followus
})

export default connect(mapState)(FollowUs)

FollowUs.propTypes = {
  backendDomain: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  followus: PropTypes.object
}
