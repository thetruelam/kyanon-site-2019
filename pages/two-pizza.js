import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from "./two-pizza.module.scss"
let listSectionLayout = [];

const renderSection = (props) => {
  const { data } = props;
  data.map((item, index) => {
    let itemLayout = {}
    const Layout = dynamic(import(`../routes/${item.sectionLayout}`))
    itemLayout['layout'] = Layout
    itemLayout['data'] = item.sectiondetail.detailJson;
    listSectionLayout.push(itemLayout)
  })
}

const TwoPizza = (props) => {
  renderSection(props);
  return (
    <React.Fragment>
      {listSectionLayout && listSectionLayout.map((item, index) => {
        const Layout = item.layout
        return (
          <Layout key={index} data={item.data} />
        )
      })}
    </React.Fragment>
  )
}
export default TwoPizza;