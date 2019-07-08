import React, { useEffect } from "react";
import { fetchData } from '../redux/actions'
import { connect } from 'react-redux'
import config from "../config"
import router, { Link as NewLink } from '../route';
import _ from "lodash";
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import styles from '../pages/_app.module.scss'
import Menu from '../components/Menu'

const mapState = state => ({
  fetchDataPages: state.fetchData.pages.res,
})

const mapDispatch = { ...fetchData }

let listLayoutPage = [];
let layoutActive = {};
let data = [];
const renderRoute = (props) => {
  const listPages = props.fetchDataPages;
  const { currentUrl } = props;
  if (!_.isEmpty(listPages) && !_.isEmpty(listPages.pages)) {
    listPages.pages.map((item, index) => {
      router.add({ name: item.pageName, pattern: item.url, page: item.pageLayout })
      let itemLayout = {}
      const Layout = dynamic(import(`../pages/${item.pageLayout}`))
      itemLayout['routeName'] = item.pageName
      itemLayout['pageLayout'] = Layout
      itemLayout['pattern'] = item.url
      itemLayout['listSection'] = item.sections
      listLayoutPage.push(itemLayout)
    })

    if (!_.isEmpty(currentUrl)&&!_.isEmpty(listLayoutPage)) {
      let tempCurrentUrl = currentUrl==="/"?"/homepage":currentUrl;
      const pageActive = listLayoutPage.find(item => item.pattern === tempCurrentUrl)
      layoutActive = pageActive.pageLayout
      data = pageActive.listSection
    }
    
  }
}

const RouterDynamic = props => {
  useEffect(() => {
    props.pagesFetchDataRequest(`${config.BACKEND_DOMAIN}graphql`)
  }, [])
  const { Component } = props;
  return (
    <React.Fragment>
      {renderRoute(props)}
      <div className="container-fuild">
        <Menu className={styles.menu} />
        <Navbar className={styles.fixedNav} />
        <Component {...layoutActive} data={data} Component={Component} />
      </div>
    </React.Fragment>
  )
}
export default connect(
  mapState,
  mapDispatch
)(RouterDynamic)
