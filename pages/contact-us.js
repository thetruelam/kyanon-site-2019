import React, { Component } from 'react'
import dynamic from 'next/dynamic'
class ContactUsPage extends Component {
  state = {
    listSectionLayout: []
  }
  static getInitialProps(ctx) {
    return { url: ctx.pathname };
  }
  componentDidMount() {
    const { data } = this.props
    const { listSectionLayout } = this.state
    data.map((item, index) => {
      let itemLayout = {}
      const Layout = dynamic(import(`../routes/${item.sectionLayout}`))
      itemLayout['layout'] = Layout
      itemLayout['idSection'] = item.sectiondetail
      listSectionLayout.push(itemLayout)
    })
    this.setState({ listSectionLayout })
    console.log(listSectionLayout)
  }
  render() {
    return (
      <>
        {this.state.listSectionLayout && this.state.listSectionLayout.map((item, index) => {
          const Layout = item.layout
          return (
            <Layout idSection={item.idSection} />
          )
        })}
        {/* <Layout/> */}
      </>
    )
  }
}

export default ContactUsPage
