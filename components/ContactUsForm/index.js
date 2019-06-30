import React, {
  Component
} from 'react';
import styles from './form.module.scss';
class ContactForm extends Component {
  render() {
    return (
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.warp_content} row`}>
            <div className={`${styles.left_content} col-xl-4`}>
              <img src="/static/popup-info.png" />
            </div>
            <div className={`${styles.right_content} col-xl-8`}>
              <div className={`${styles.inner_close}`}>
                <img src="/static/close.png"/>
              </div>
              <div className={`${styles.title}`}>
                Meet Us
              </div>
              <div className={`${styles.form_custom}`}>
                <div className="form-group">
                  <input className={`${styles.input_contact}`} placeholder="Your name..."/>
                </div>
                <div className="form-group">
                  <input className={`${styles.input_contact}`} placeholder="Your email..."/>
                </div>
                <div className="form-group">
                  <input className={`${styles.input_contact}`} placeholder="Your phone..."/>
                </div>
                <div className="form-group">
                  <input className={`${styles.input_contact}`} placeholder="Your message..."/>
                </div>
                <div className={`${styles.btn_group} form-group`}>
                  <input type="submit" value="send"/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactForm