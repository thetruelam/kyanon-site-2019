import { combineReducers } from 'redux'
import fetchData from './fetchData'
import section from './section'
import menu from './menu'
import config from './config'

export default combineReducers({
  section,
  fetchData,
  menu,
  config
})
