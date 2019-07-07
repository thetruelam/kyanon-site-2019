import { menu as menuAction } from '../const'

const menu = (state = { isOpen: false,isOpenForm: false }, action) => {
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
  case "OPEN_FORM_CONTACT":
    return {
      ...state,
      isOpenForm: true
    }
  case "CLOSE_FORM_CONTACT":
    return {
      ...state,
      isOpenForm: false
    }
  default:
    return state
  }
}

export default menu
