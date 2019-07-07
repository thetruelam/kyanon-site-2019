import * as menuConst from '../const/menu'

export const menuOpen = () => ({
  type: menuConst.MENU_OPEN
})
export const menuClose = () => ({
  type: menuConst.MENU_CLOSE
})

export const openForm = () =>({
  type:"OPEN_FORM_CONTACT"
})

export const closeForm = () =>({
  type:"CLOSE_FORM_CONTACT"
})