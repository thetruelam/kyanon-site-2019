import { fetchData as fetchDataConst } from '../const'
import { all, call, takeLatest, put } from 'redux-saga/effects'
import { fetchData as fetchDataAction } from '../actions'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import json from '../../query.json'

function* homepageFetchData(action) {
  try {
    const client = new ApolloClient({
      uri: action.apiUrl
    })
    const res = json.homepage
    /*const res = yield call(client.query, {
      query: gql`
        {
          homesection1(id: "5c873574a7af0e19d5fc6263") {
            contact {
              imgPath {
                url
              }
            }
            followus {
              text
              clickUrl
              imgPath {
                url
              }
            }
            logo {
              imgPath {
                url
              }
            }
            scrolltoexplore {
              text
            }
            kvslider {
              slideitems {
                htmlEditor
                titleText
                descriptionText
                htmlEditor
                imgBackgroundPath {
                  url
                }
              }
            }
          }
        }
      `
    })*/
    yield put(
      fetchDataAction.homepageFetchDataSuccess(action.apiUrl, res.data.homepage)
    )
  } catch (err) {
    yield put(
      fetchDataAction.homepageFetchDataFail(action.apiUrl, err.toString())
    )
  }
}

function* watchHomePageFetchData() {
  yield takeLatest(
    fetchDataConst.HOMEPAGE_FETCH_DATA_REQUEST,
    homepageFetchData
  )
}
/* Lý Thành */
function* contactFetchData(action) {
  try {
    const client = new ApolloClient({
      uri: action.apiUrl
    })
    const res = json.pagecontact
    /*const res = yield call(client.query, {
      query: gql`
        {
          pagecontact(id: "5c8731b2a7af0e19d5fc6260") {
            contactsection1 {
              intro {
                textFront1
                textFront2
                textBehind
                imgPath {
                  url
                }
              }
            }
            contactsection2 {
              title
              contactsection2contact {
                title
                detail
              }
              contactsection2office {
                title
                detail
                mapUrl
              }
              contactsection2link {
                text
                clickUrl
              }
              contactsection2imagelist {
                imgList {
                  url
                }
              }
            }
          }
        }
      `
    })*/
    yield put(
      fetchDataAction.contactUsFetchDataSuccess(
        action.apiUrl,
        res.data.pagecontact
      )
    )
  } catch (err) {
    yield put(
      fetchDataAction.contactUsFetchDataFail(action.apiUrl, err.toString())
    )
  }
}

function* watchContactFetchData() {
  yield takeLatest(
    fetchDataConst.CONTACTUS_FETCH_DATA_REQUEST,
    contactFetchData
  )
}
//menu
function* menuFetchData(action) {
  try {
    const client = new ApolloClient({
      uri: action.apiUrl
    })
    const res = json.menu
    /*const res = yield call(client.query, {
      query: gql`
        {
          menu(id: "5c877440b66d011921743c05") {
            menuitems {
              text
              clickUrl
            }
            imgPath {
              url
            }
          }
        }
      `
    })*/
    yield put(
      fetchDataAction.menuFetchDataSuccess(action.apiUrl, res.data.menu)
    )
  } catch (err) {
    yield put(fetchDataAction.menuFetchDataFail(action.apiUrl, err.toString()))
  }
}

function* watchMenuFetchData() {
  yield takeLatest(fetchDataConst.MENU_FETCH_DATA_REQUEST, menuFetchData)
}

export default function* rootSaga() {
  yield all([
    call(watchHomePageFetchData),
    call(watchContactFetchData),
    call(watchMenuFetchData)
  ])
}
