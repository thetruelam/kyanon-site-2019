import { CSSTransition } from 'react-transition-group'
import styles from './Menu.module.scss'
import { connect } from 'react-redux'
import { menu as menuAction } from '../../redux/actions'
import PropTypes from 'prop-types'
import { menuFetchDataRequest } from '../../redux/actions/fetchData'
import { useEffect } from 'react'
import Link from 'next/link'

const Menu = props => {
  const { isOpen } = props.menu
  useEffect(() => {
    props.menuFetchDataRequest(`${props.config.BACKEND_DOMAIN}/graphql`)
  }, [])
  return (
    <CSSTransition
      in={isOpen}
      classNames={{
        enter: styles['menu-enter'],
        enterActive: styles['menu-enter-active'],
        enterDone: styles['menu-enter-done'],
        exit: styles['menu-exit'],
        exitActive: styles['menu-exit-active'],
        exitDone: styles['menu-exit-done']
      }}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <div className={`${props.className} menu`}>
        <div className={styles.wrap}>
          <img
            onClick={props.menuClose}
            className={styles.closeBtn}
            src="/static/close-btn.png"
          />
          <ul className={styles.ulList}>
            {props.menuData &&
              props.menuData.menuitems.map((item, index) => (
                <div key={index} onClick={props.menuClose}>
                  <Link prefetch href={item.clickUrl}>
                    <a className={styles.defaultA}>
                      <li className={styles.liItem}>{item.text}</li>
                    </a>
                  </Link>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </CSSTransition>
  )
}
const mapDispatch = {
  ...menuAction,
  menuFetchDataRequest
}
const mapState = state => ({
  menu: state.menu,
  config: state.config,
  menuData: state.fetchData.menu.res
})
export default connect(
  mapState,
  mapDispatch
)(Menu)
Menu.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.shape({
    isOpen: PropTypes.boolean
  }),
  menuData: PropTypes.object,
  menuClose: PropTypes.func,
  menuOpen: PropTypes.func,
  config: PropTypes.object,
  menuFetchDataRequest: PropTypes.func
}
