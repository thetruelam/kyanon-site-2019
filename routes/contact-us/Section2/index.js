import styles from './section2.module.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Section2 = props => {
  const office = props.section2.contactsection2office
  const contacts = props.section2.contactsection2contact
  // object
  const images = props.section2.contactsection2imagelist.imgList
  return (
    <div className={`${props.className} section1`}>
      <div className={styles.wrap}>
        <div className={styles.leftBlock}>
          <h1>OUR OFFICE</h1>
          {office.length !== 0 &&
            office.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            ))}

          <h1>CONTACT INFO</h1>
          {contacts.length !== 0 &&
            contacts.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            ))}
          <a
            href={props.section2.contactsection2link.clickUrl}
            className={styles.career}
          >
            {props.section2.contactsection2link.text}
          </a>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.frameimg}>
            <img
              src={'/static/contact-us-middle.png'}
              //src={`${props.backendDomain + images[0].url}`}
              className={styles.photo_1}
              alt=""
            />
            <img
              src={'/static/contact-us-right.png'}
              //src={`${props.backendDomain + images[1].url}`}
              className={styles.photo_2}
              alt=""
            />
            <img
              src={'/static/contact-us-left.png'}
              //src={`${props.backendDomain + images[2].url}`}
              className={styles.photo_3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
const mapState = state => ({
  section2: state.fetchData.contactUs.res.contactsection2,
  backendDomain: state.config.BACKEND_DOMAIN
})
export default connect(mapState)(Section2)
