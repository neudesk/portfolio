import React from 'react';
import * as data from '../services/data/data';

export default class RightColumn extends React.Component {

  renderContacts() {
    return data.contactData.map((contact) => {
      return (
        <li>
          <div className="relative">
            <span className={`icon ${contact.icon}`}></span>
            <div className="contactData">{contact.value}</div>
          </div>
        </li>
      )
    });
  }

  render() {
    const self = this;
    return (
      <div id="cvProfileTab" className="col-md-4 col-xs-12 p-t-50" data-mh="mainLayoutColums">
        <div id="cvPhoto">
          <img src="/assets/images/mainPhoto.jpg" />
        </div>
        <div id="cvOverview">
          <p>
            <i dangerouslySetInnerHTML={{__html: data.Overview}}></i>
          </p>
        </div>
        <div id="contacts">
          <ul className="nav">
            {self.renderContacts()}
          </ul>
        </div>
      </div>
    )
  }

}