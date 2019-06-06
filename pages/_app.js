import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../redux/with-redux-store'
import { Provider } from 'react-redux'
import './font.scss'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from './_app.module.scss'
import Menu from '../components/Menu'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
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
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
