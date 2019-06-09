import styles from './navbar.module.scss'
import { connect } from 'react-redux'
import { menu as menuAction } from '../../redux/actions'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Navbar = props => {
  return (
    <div className={props.className}>
      <div className={styles.divFlex}>
        <div className={styles.menu}>
          <img
            onClick={props.menuOpen}
            className={styles.menuImg}
            src="/static/MenuButton.png"
          />
        </div>
        <div className={styles.logo}>
          <Link prefetch href="/">
            <a>
              <img className={styles.logoImg} src="/static/Logo.png" />
            </a>
          </Link>
        </div>
        <div className={styles.contact}>
          <img className={styles.contactImg} src="/static/CONTACT.png" />
        </div>
      </div>
    </div>
  )
}
const mapDispatch = {
  ...menuAction
}
export default connect(
  null,
  mapDispatch
)(Navbar)
Navbar.propTypes = {
  className: PropTypes.string,
  menuOpen: PropTypes.func
}
