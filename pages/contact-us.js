import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Swiper from 'react-id-swiper'

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
    // listSectionLayout.reverse()
    this.setState({ listSectionLayout })
  }

  render() {
    return (
      <>
      {/* // <Swiper
      //       mousewheel={{
      //         sensitivity: 1,
      //         releaseOnEdges: true
      //       }}
      //       direction={'vertical'}
      //       containerClass={`swiper-container`}

      //     > */}
        {this.state.listSectionLayout && this.state.listSectionLayout.map((item, index) => {
          const Layout = item.layout
          return (
            <Layout idSection={item.idSection} />
          )
        })}
        {/* <Layout/> */}
      {/* // </Swiper> */}
      </>
    )
  }
}

export default ContactUsPage
