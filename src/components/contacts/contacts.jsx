import React from 'react';
import Map from './map';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MailGun from 'mailgun.js';
import * as EmailJS from 'emailjs-com';
EmailJS.init("user_vMciLKxkyE9JoCN2UeO9B");

const validEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sender: null,
      message: null,
      validationErrors: [],
      successMsg: null
    }
  }

  hasValidEmail() {
    const self = this;
    if (!self.state.sender) {
      self.updateValidationErrors('Email is require');
      return false;
    }
    const isValid = validEmail(self.state.sender);
    if (!isValid) self.updateValidationErrors('Invalid email address')
    return isValid
  }

  hasEnoughMsgLength() {
    const self = this;
    if (!self.state.message) {
      self.updateValidationErrors('Message is required');
      return false;
    }
    const isValid = self.state.message.length >= 20;
    if (!isValid) self.updateValidationErrors('Your message is too short');
    return isValid;
  }
  
  updateValidationErrors(error) {
    const self = this;
    const errors = self.state.validationErrors;
    errors.push(error);
    self.setState({ validationErrors: errors })
  }

  resetNotification(callback = () => {}) {
    this.setState({ validationErrors: [], successMsg: null }, callback);
  }

  resetForm() {
    this.setState = {
      sender: null,
      message: null,
      validationErrors: []
    }
  }

  renderErrorNotif() {
    const self = this;
    const lists = self.state.validationErrors.map((error, _idx) => {
      return (
        <li key={_idx}>{error}</li>
      )
    })
    return (
      <div className="alert alert-success">
        <ul>{lists}</ul>
      </div>
    )
  }

  renderSuccessNotif() {
    const self = this;
    return (
      <div className="alert alert-success">
        <p>{ self.state.successMsg }</p>
      </div>
    )
  }

  sendMessage() {
    const self = this;
    self.resetNotification(() => {
      const validEmail = self.hasValidEmail();
      const validLength = self.hasEnoughMsgLength();
      const defaultErrorMsg = 'Unable to send you message at the moment, please try again later.';
      if (validEmail || validLength) {
        EmailJS.send('gmail', 'template_fvmaPDao',{from: self.state.sender, message: self.state.message, reply_to: self.state.sender}).then((response) => {
          if (response.status == 200) {
            self.setState({ successMsg: 'Thank you, I will reply to you ASAP' })
          } else {
            console.log('error', response.message);
            self.updateValidationErrors(defaultErrorMsg);
          }
        }, (error) => {
          self.updateValidationErrors(defaultErrorMsg);
          console.log('error', error);
        });
      }
    });
  }

  render() {
    const self = this;

    const form = <div className="form">
      <div>
        <TextField
          hintText="Email"
          floatingLabelText="Please input your email here"
          fullWidth={true}
          onChange={(e) => { self.setState({ sender: e.target.value }) } }
        />
      </div>
      <div>
        <TextField
          hintText="Say something here"
          floatingLabelText="Message"
          multiLine={true}
          fullWidth={true}
          onChange={(e) => { self.setState({ message: e.target.value }) } }
        />
      </div>
      <div>
        <FlatButton label="Send" primary={true}
                    icon={<span className="fa fa-send" />}
                    fullWidth={true} onClick={self.sendMessage.bind(this)} />
      </div>
    </div>

    return(
      <div>
        <div id="contactMap">
          <Map googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `400px` }} />}
               mapElement={<div style={{ height: `100%` }} />} />
        </div>
        <div style={{marginTop: '300px'}}>
          <div className="m-b-30 m-t-30">
            <div className="text-center">
              <h1>Get in touch</h1>
              <span>Please drop a message here, I'll respond to you ASAP</span>
            </div>
          </div>
          <div className="m-b-30 m-t-30">
            <div style={{width: '400px', margin: 'auto auto'}}>
              { self.state.successMsg ? self.renderSuccessNotif() : null }
              { self.state.validationErrors.length ? self.renderErrorNotif() : null }
              {self.state.successMsg ? null : form}
            </div>
          </div>
        </div>
      </div>
    )
  }

}