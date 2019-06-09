import styles from './rightsidetext.module.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import sectionMap from '../../utils/section-map'
import cn from 'classnames'

const RightSideText = props => {
  // console.log(getColor(sectionMap(props.sectionHomePage.currentSection)))
  return (
    <div style={props.style} className={props.className}>
      <div className={styles.flexBox}>
        {/*<div className={styles.wrapImg}>
            <img
              className={styles.img}
              src={
                getColor(sectionMap(props.sectionHomePage.currentSection)) ===
                'black'
                  ? '/static/scrollblack.png'
                  : '/static/scrollto.png'
              }
            />
              </div>*/}
        <div
          className={cn({
            [styles.wrapText]: true
          })}
        >
          {props.text}
        </div>
      </div>
    </div>
  )
}

const mapState = state => ({
  sectionHomePage: state.section.homePage
})
export default connect(mapState)(RightSideText)

RightSideText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  sectionHomePage: PropTypes.object
}
