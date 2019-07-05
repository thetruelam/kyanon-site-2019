import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Swiper from 'react-id-swiper'
import styles from './contact.module.scss'
// import ContactSection1 from "../routes/Contactsection1"
// import ContactSection2 from "../routes/Contactsection2"
import FormContact from "../components/ContactUsForm"
import GetInTouch from '../components/GetInTouch'
class ContactUsPage extends Component {
  state = {
    listSectionLayout: [],
    isShow: false,
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

  onClickContact = () =>{
    console.log("SHow>>>>>",this.state.isShow)
    this.setState({isShow:true});
  }

  onSubmitForm = () =>{
    this.setState({isShow:false});
  }

  render() {
    if (this.state.listSectionLayout && this.state.listSectionLayout.length === 0) {
      return <>Loading.....</>
    }
    return (
      <>
        {/* <FormContact/> */}
        <Swiper
          mousewheel={{
            sensitivity: 1,
            releaseOnEdges: true
          }}
          direction={'vertical'}
          containerClass={`swiper-container ${styles.kd_swiper}`}
        >
          {/* <div style={{ height: "100vh" }}>
            <ContactSection1 idSection={this.state.listSectionLayout[0].idSection} />
          </div>
          <div style={{ height: "100vh" }}>
            <ContactSection2 idSection={this.state.listSectionLayout[1].idSection} />
          </div> */}
          {this.state.listSectionLayout && this.state.listSectionLayout.map((item, index) => {
            const Layout = item.layout
            return (
              <div key={index} style={{ height: "100vh" }}>
                <Layout idSection={item.idSection} />
              </div>
            )
          })}
        </Swiper>
        <div className={styles.fixedWrapScrollBottom}>
          <GetInTouch className={styles.getInTouch} clickContact={this.onClickContact} />
          {/* <ScrollBottomIndicator
              currentSection={props.sectionContactUs.currentSection}
              maxSection={props.sectionContactUs.maxSection}
            /> */}
        </div>
        {this.state.isShow?<FormContact submitForm={this.onSubmitForm}/>:<></>}
      </>
    )
  }
}

export default ContactUsPage
