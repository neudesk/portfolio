import React from 'react';
import Map from './map';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class Contacts extends React.Component {

  render() {
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
                />
              </div>
              <div>
                <TextField
                  hintText="Say something here"
                  floatingLabelText="Message"
                  multiLine={true}
                  fullWidth={true}
                />
              </div>
              <div>
                <FlatButton label="Send" primary={true}
                            icon={<span className="fa fa-send" />}
                            fullWidth={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}