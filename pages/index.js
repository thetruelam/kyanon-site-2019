/*import { connect } from 'react-redux'*/
import React from 'react'
import Index from '../routes/index/index'
/*import styles from './index.module.scss'*/
import {Link} from '../route'
const IndexPage = props => {
  return (
    <React.Fragment>
      <Index />
    </React.Fragment>
    // <ul>
    //   <li><Link route="HomePage"><a>Luke Skywalker</a></Link></li>
    //   <li><Link route="ContactUs"><a>C-3PO</a></Link></li>
    // </ul>

  )
}

/*const mapDispatch = {}
const mapState = state => ({
  selectedService: state.selectedService
})*/
export default IndexPage
