import React,{Component} from 'react'
import config from "../config"
import dynamic from 'next/dynamic'
// const ContactUsPage = props => {

//   return (
//     <React.Fragment>
//       <ContactUs />
//     </React.Fragment>
//   )
// }

class ContactUsPage extends Component {
  state = {
    listSectionLayout: []
  }
  static getInitialProps(ctx) {
    // console.log(ctx)
    return { url: ctx.pathname };
  }
  componentDidMount() {
    console.log("This is config>>>>",config.BACKEND_DOMAIN)
    console.log("This is props",this.props)
    const { data } = this.props
    const {listSectionLayout} = this.state
    data.map((item, index) => {
      let itemLayout = {}
      const Layout = dynamic(import(`../routes/${item.sectionLayout}`))
      itemLayout['layout'] = Layout
      itemLayout['idSection'] = item.sectiondetail
      
      listSectionLayout.push(itemLayout)
      
    })
    this.setState({listSectionLayout})
    console.log(listSectionLayout)
  }
  render() {
    // const {Component} = this.props
    return (
      <div>
        {this.state.listSectionLayout && this.state.listSectionLayout.map((item,index)=>{
          const Layout = item.layout
         return (
         <Layout idSection={item.idSection}/>
         )
        })}
        {/* <Layout/> */}
      </div>
    )
  }
}

export default ContactUsPage
