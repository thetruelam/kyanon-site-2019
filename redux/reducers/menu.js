import { menu as menuAction } from '../const'

const menu = (state = { isOpen: false }, action) => {
  switch (action.type) {
  case menuAction.MENU_OPEN:
    return {
      ...state,
      isOpen: true
    }

  case menuAction.MENU_CLOSE:
    return {
      ...state,
      isOpen: false
    }
  default:
    return state
  }
}

export default menu
