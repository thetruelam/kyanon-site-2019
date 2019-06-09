import { fetchData as fetchDataConst } from '../const'

const fetchData = (
  state = {
    homepage: { apiUrl: '', isFetching: false, res: null, err: null },
    contactUs: { apiUrl: '', isFetching: false, res: null, err: null },
    menu: { apiUrl: '', isFetching: false, res: null, err: null }
  },
  action
) => {
  switch (action.type) {
  //HOME PAGE

  case fetchDataConst.HOMEPAGE_FETCH_DATA_REQUEST:
    return {
      ...state,
      homepage: {
        ...state.homepage,
        apiUrl: action.apiUrl,
        isFetching: true
      }
    }
  case fetchDataConst.HOMEPAGE_FETCH_DATA_SUCCESS:
    return {
      ...state,
      homepage: {
        ...state.homepage,
        apiUrl: action.apiUrl,
        isFetching: false,
        res: action.res
      }
    }
  case fetchDataConst.HOMEPAGE_FETCH_DATA_FAIL:
    return {
      ...state,
      homepage: {
        ...state.homepage,
        apiUrl: action.apiUrl,
        isFetching: false,
        err: action.err
      }
    }
    // CONTACT US
  case fetchDataConst.CONTACTUS_FETCH_DATA_REQUEST:
    return {
      ...state,
      contactUs: {
        ...state.contactUs,
        apiUrl: action.apiUrl,
        isFetching: true
      }
    }
  case fetchDataConst.CONTACTUS_FETCH_DATA_SUCCESS:
    return {
      ...state,
      contactUs: {
        ...state.contactUs,
        apiUrl: action.apiUrl,
        isFetching: false,
        res: action.res
      }
    }
  case fetchDataConst.CONTACTUS_FETCH_DATA_FAIL:
    return {
      ...state,
      contactUs: {
        ...state.contactUs,
        apiUrl: action.apiUrl,
        isFetching: false,
        err: action.err
      }
    }
    // MENU
  case fetchDataConst.MENU_FETCH_DATA_REQUEST:
    return {
      ...state,
      menu: {
        ...state.menu,
        apiUrl: action.apiUrl,
        isFetching: true
      }
    }
  case fetchDataConst.MENU_FETCH_DATA_SUCCESS:
    return {
      ...state,
      menu: {
        ...state.menu,
        apiUrl: action.apiUrl,
        isFetching: false,
        res: action.res
      }
    }
  case fetchDataConst.MENU_FETCH_DATA_FAIL:
    return {
      ...state,
      menu: {
        ...state.menu,
        apiUrl: action.apiUrl,
        isFetching: false,
        err: action.err
      }
    }
  default:
    return state
  }
}
export default fetchData
