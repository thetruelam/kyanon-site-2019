import { fetchData as fetchDataConst } from '../const'

export const homepageFetchDataRequest = apiUrl => ({
  type: fetchDataConst.HOMEPAGE_FETCH_DATA_REQUEST,
  apiUrl
})
export const homepageFetchDataSuccess = (apiUrl, res) => ({
  type: fetchDataConst.HOMEPAGE_FETCH_DATA_SUCCESS,
  apiUrl,
  res
})
export const homepageFetchDataFail = (apiUrl, err) => ({
  type: fetchDataConst.HOMEPAGE_FETCH_DATA_FAIL,
  apiUrl,
  err
})

// contact us
export const contactUsFetchDataRequest = apiUrl => ({
  type: fetchDataConst.CONTACTUS_FETCH_DATA_REQUEST,
  apiUrl
})
export const contactUsFetchDataSuccess = (apiUrl, res) => ({
  type: fetchDataConst.CONTACTUS_FETCH_DATA_SUCCESS,
  apiUrl,
  res
})
export const contactUsFetchDataFail = (apiUrl, err) => ({
  type: fetchDataConst.CONTACTUS_FETCH_DATA_FAIL,
  apiUrl,
  err
})

//menu
export const menuFetchDataRequest = apiUrl => ({
  type: fetchDataConst.MENU_FETCH_DATA_REQUEST,
  apiUrl
})
export const menuFetchDataSuccess = (apiUrl, res) => ({
  type: fetchDataConst.MENU_FETCH_DATA_SUCCESS,
  apiUrl,
  res
})
export const menuFetchDataFail = (apiUrl, err) => ({
  type: fetchDataConst.MENU_FETCH_DATA_FAIL,
  apiUrl,
  err
})
