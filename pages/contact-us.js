import React,{Component} from 'react'
import ContactUs from '../routes/contact-us'
import config from "../config"
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
    console.log("This is config>>>>",config)
    console.log("This is props",this.props)
  }
  render() {
    // const {Component} = this.props
    return (
      <React.Fragment>
        <ContactUs />
      </React.Fragment>
    )
  }
}

export default ContactUsPage
