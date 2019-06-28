import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Swiper from 'react-id-swiper'
import styles from './contact.module.scss'
import ContactSection1 from "../routes/Contactsection1"
import ContactSection2 from "../routes/Contactsection2"
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
  }
  render() {
    if (this.state.listSectionLayout && this.state.listSectionLayout.length === 0) {
      return <>Loading.....</>
    }
    return (
      <>
        <Swiper
          mousewheel={{
            sensitivity: 1,
            releaseOnEdges: true
          }}
          direction={'vertical'}
          containerClass={`swiper-container ${styles.kd_swiper}`}
        >
          <div style={{ height: "100vh" }}>
            <ContactSection1 idSection={this.state.listSectionLayout[0].idSection} />
          </div>
          <div style={{ height: "100vh" }}>
            <ContactSection2 idSection={this.state.listSectionLayout[1].idSection} />
          </div>
          {/* {this.state.listSectionLayout && this.state.listSectionLayout.map((item, index) => {
            const Layout = item.layout
            return (
              <div key={index} style={{height:"100vh"}}>
                <Layout idSection={item.idSection} />
              </div>
            )
          })} */}
          {/* <div style={{height:"100vh"}}>ABC</div>
         <div style={{height:"100vh"}}>XYZ</div> */}
        </Swiper>
      </>
    )
  }
}

export default ContactUsPage
