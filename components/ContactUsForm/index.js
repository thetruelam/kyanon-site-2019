import React, {
  Component
} from 'react';
import styles from './form.module.scss';
class ContactForm extends Component {
  render() {
    return (
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.warp_content}`}>
            <div className={`${styles.left_content}`}>
              <img src="/static/popup-info.png"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactForm