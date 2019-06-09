import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../redux/with-redux-store'
import { Provider } from 'react-redux'
import './font.scss'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from './_app.module.scss'
import Menu from '../components/Menu'
import dynamic from 'next/dynamic'
import router, { Link as NewLink } from '../route'




class MyApp extends App {
  state = {
    listPage: [],
    listLayoutPage: [],
  }
  componentDidMount() {
    const { listLayoutPage } = this.state;
    if (this.state.listPage.length === 0) {
      fetch("https://kyanonsite-be.herokuapp.com/pages", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => { return response.json() })
        .then(res => {
          if (res) {
            res.map((item, index) => {
              router.add({ name: item.pageName, pattern: item.url, page: item.pageLayout })
              //Create dynamic page --- 
              let itemLayout = {}
              const Layout = dynamic(import(`../pages/${item.pageLayout}`))
              itemLayout['routeName'] = item.pageName
              itemLayout['pageLayout'] = Layout
              itemLayout['pattern'] = item.url
              itemLayout['listSection'] = item.sections
              listLayoutPage.push(itemLayout)
            })
            this.setState({ listPage: res, listLayoutPage })
          }
        })
    }

    if (router.routes) {

    }
  }
  render() {
    // console.log("Router app>>>",router)

    const { Component, pageProps, reduxStore } = this.props
    const { listLayoutPage } = this.state

    if (router.routes.length === 0) {
      return (<></>)
    }
    let currentUrl = this.props.router.route;
    if (currentUrl === "/") {
      currentUrl = "/homepage"
    }
    const pageActive = listLayoutPage.find(item => item.pattern === currentUrl)
    const layoutActive = pageActive.pageLayout
    const data = pageActive.listSection
    return (
      <Container>
        <Head>
          <title>{'KYANON DIGITAL'}</title>
        </Head>
        <Provider store={reduxStore}>
          <Menu className={styles.menu} />
          <Navbar className={styles.fixedNav} />
          {/* <div className={styles.fixedWrapRightSide}>
            <RightSideText
              className={styles.fixedRightSideText}
              text="SCROLL TO EXPLORE"
            />
          </div> */}
          {/* <div className={styles.fixedWrapScrollBottom}>
            <ScrollBottomIndicator />
          </div> */}
          {


          }
          <Component {...layoutActive} data={data} Component={Component} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
