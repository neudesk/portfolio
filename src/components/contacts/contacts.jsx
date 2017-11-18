import React from 'react';
import Map from './map';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MailGun from 'mailgun.js';

const validEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mailGun: MailGun.client({
        username: 'api',
        key: 'key-8a2691995ed10ee82ad69db9f11ed282',
        public_key: 'pubkey-7ca0857097462a4338a61a2ae8344e7f'
      }),
      domain: 'sandbox6ce7c5a347114eec9896c6d01d0f856b.mailgun.org',
      sender: null,
      message: null,
      subject: 'Someone visited your site'
    }
  }

  sendMessage() {
    const self = this;
    if (validEmail(self.state.sender)) {
      self.state.mailGun.messages.create(self.state.domain, {
        from: self.state.sender,
        to: ['jonathan.canaveral.vc@gmail.com'],
        subject: self.state.subject,
        text: self.state.message
      }).then(msg => console.log(msg)).catch(err => console.log(err));
    }
  }

  render() {
    const self = this;
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
          </div>
        </div>
      </div>
    )
  }

}