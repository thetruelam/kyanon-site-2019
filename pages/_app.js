import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../redux/with-redux-store'
import { Provider } from 'react-redux'
import './font.scss'
import Head from 'next/head'
import RouterDynamic from "../routeDynamic";
class MyApp extends App {
  render() {
    const { Component, reduxStore } = this.props
    return (
      <Container>
        <Head>
          <title>{'KYANON DIGITAL'}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/normalize.css" />
        </Head>
        <Provider store={reduxStore}>
          <RouterDynamic Component={Component} currentUrl={this.props.router.route}/>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
