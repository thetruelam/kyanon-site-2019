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
import config from "../config"
import RouterDynamic from "../routeDynamic";
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Head>
          <title>{'KYANON DIGITAL'}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/normalize.css" />
          {/* <style>{`${style}`}</style> */}
        </Head>
        <Provider store={reduxStore}>
          <RouterDynamic Component={Component} currentUrl={this.props.router.route}/>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
