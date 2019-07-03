import React, {
  Component
} from 'react';
import styles from './form.module.scss';
import config from "../../config"
class ContactForm extends Component {
  state = {
    isSend: false,
    isError: false,
    messageError: {},
  }
  sendMail = () => {
    const { name, email, phone, message } = this.refs;
    let isError = false;
    let messageError = {};
    if (!name || !name.value || name.value === "") {
      isError = true;
      messageError['name'] = "Please enter your name.";
    }
    if (!email || !email.value || email.value === "") {
      isError = true;
      messageError['email'] = "Please enter your email.";
    }
    if (!phone || !phone.value || phone.value === "") {
      isError = true;
      messageError['phone'] = "Please enter your phone.";
    }
    if (!message || !message.value || message.value === "") {
      isError = true;
      messageError['message'] = "Please enter your message.";
    }
    if (isError) {
      this.setState({ messageError });
    }
    else {
      let body = {
        'to': 'thanh.ngly@kyanon.digital',
        'subject': `Notice: We have 1 contact from ${name.value} - ${email.value}`,
        'text': `Name: ${name.value} - Email: ${email.value} - Phone: ${phone.value} - Message: ${message.value}`,
        'html': `<h1>Name: ${name.value} <br/>- Email: ${email.value} <br/>- Phone: ${phone.value} <br/>- Message: ${message.value}</h1>`
      }
      fetch(`${config.BACKEND_DOMAIN}email`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(response => { return response.json() })
        .then(res => {
          let isError = false;
          let messageError = {};
          if (res.error) {
            isError = true;
            messageError['error'] = res.message;
            this.setState({ isError, messageError });
          }
          else {
            this.setState({ isSend: true })
          }
          console.log("This is send mail success>>>>", res)
        })
    }
  }
  render() {
    return (
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.warp_content} row`}>
            <div className={`${styles.left_content} col-xl-4 col-md-12`}>
              <img src="/static/popup-info.png" />
            </div>
            <div className={`${styles.right_content} col-xl-8 col-md-12`}>
              <div className={`${styles.inner_close}`}>
                <img src="/static/close.png" />
              </div>
              <div className={`${styles.title}`}>
                Meet Us
              </div>
              {this.state.isSend ? <div>Your message have sent.</div> :
                <div className={`${styles.form_custom}`}>
                  {this.state.isError && this.state.messageError['error'] && (
                    <label style={{ color: "red" }}>{this.state.messageError['error']}</label>
                  )}
                  <div className="form-group">
                    <input ref="name" className={`${styles.input_contact}`} placeholder="Your name..." />
                    {this.state.isError && this.state.messageError['name'] && (
                      <label style={{ color: "red" }}>{this.state.messageError['name']}</label>
                    )}
                  </div>
                  <div className="form-group">
                    <input ref="email" className={`${styles.input_contact}`} placeholder="Your email..." />
                    {this.state.isError && this.state.messageError['email'] && (
                      <label style={{ color: "red" }}>{this.state.messageError['email']}</label>
                    )}
                  </div>
                  <div className="form-group">
                    <input ref="phone" className={`${styles.input_contact}`} placeholder="Your phone..." />
                    {this.state.isError && this.state.messageError['phone'] && (
                      <label style={{ color: "red" }}>{this.state.messageError['phone']}</label>
                    )}
                  </div>
                  <div className="form-group">
                    <input ref="message" className={`${styles.input_contact}`} placeholder="Your message..." />
                    {this.state.isError && this.state.messageError['message'] && (
                      <label style={{ color: "red" }}>{this.state.messageError['message']}</label>
                    )}
                  </div>
                  <div className={`${styles.btn_group} form-group`}>
                    <input type="button" onClick={this.sendMail} value="send" />
                  </div>
                </div>}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactForm