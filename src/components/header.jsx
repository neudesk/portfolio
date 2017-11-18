import React from 'react';
import * as data from '../services/data/data';
import * as Typed from 'typed.js';

export default class Header extends React.Component {

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

  render() {
    return(
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
    )
  }

}