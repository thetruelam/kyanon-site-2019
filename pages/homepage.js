import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import router, { Link as NewLink } from '../route'
export default class extends Component {
  state = {
    listSectionLayout: []
  }
  static getInitialProps(ctx) {
    // console.log(ctx)
    return { url: ctx.pathname };
  }
  
  componentDidMount() {
    console.log("Data>>>props home page",this.props)
    const { data } = this.props
    const {listSectionLayout} = this.state
    data.map((item, index) => {
      let itemLayout = {}
      const Layout = dynamic(import(`../routes/${item.sectionLayout}`))
      itemLayout['Layout'] = Layout
      
      
      fetch(`https://kyanonsite-be.herokuapp.com/sections?id=${item._id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response=>{return response.json()})
      .then(res=>{
        console.log(res[0].sectiondetail)
        // itemLayout['jsonDetail'] = res.sectiondetail.detailJson
      })
      listSectionLayout.push(itemLayout)
      this.setState({listSectionLayout})
    })
    // console.log("data section",listSectionLayout)
  }
  render() {
    const {Component} = this.props
    return (
      <div>
        {this.state.listSectionLayout && this.state.listSectionLayout.map((item,index)=>{
          <Component {...item}/> 
        })}

      </div>
      
    )
  }
}

