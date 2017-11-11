import React from 'react';
import * as $ from 'jquery';
import 'jquery-match-height';
import * as data from '../services/data/data';
import * as Typed from 'typed.js';

window.jQuery = $;

export default class Layout extends React.Component {

  renderTitles() {
    new Typed('.cvTitles', {
      strings: data.JobTitles,
      typeSpeed: 50,
      loop: true
    });
  }

  componentDidMount() {
    this.renderTitles();
  }

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

    return(
      <div>
        <div id="cvHeader">
          <div className="container">
            <div className="col-md-7 col-xs-12">
              <h3 className="line-height-80">Experienced <span className="cvTitles"></span></h3>
            </div>
            <div className="col-md-5 col-xs-12 text-right">
              <h2>Jonathan Senence Canaveral</h2>
              <h3>Software Developer</h3>
            </div>
          </div>
        </div>
        <div id="cvBody">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-xs-12" data-mh="mainLayoutColums">
                {this.props.children && React.cloneElement(this.props.children, {app: this.props})}
              </div>
              <div id="cvProfileTab" className="col-md-4 col-xs-12" data-mh="mainLayoutColums">
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
            </div>
          </div>
        </div>
        <div id="cvFooter">
          <div className="container">
            <div className="col-md-4 col-xs-12">
              <p>
                &copy; Jonathan Canaveral 2017
              </p>
            </div>
            <div className="col-md-4 col-xs-12">
            </div>
            <div className="col-md-4 col-xs-12">
            </div>
          </div>
        </div>
      </div>
    )
  }

}