import React from 'react';
import * as colors from 'material-ui/styles/colors';
import * as data from '../../services/data/data';
import * as bootstrap from 'react-bootstrap';
import Timelime from './timeline';
import * as _ from 'lodash';

export default class Resume extends React.Component {

  renderProfFacts() {

    const lists = data.professionalFacts.map((fact, id) => {
      return(
        <li key={id} className="col-md-6 col-xs-12">
          <bootstrap.Row className="show-grid p-0">
            <bootstrap.Col className="p-0" xs={5} md={5} lg={5}>
              <strong>{_.capitalize(fact.label)}</strong>
            </bootstrap.Col>
            <bootstrap.Col className="p-0" xs={7} md={7} lg={7}>
              {fact.value}
            </bootstrap.Col>
          </bootstrap.Row>
        </li>
      )
    });

    return(
      <p>
        <ul className="list-inline row">
          {lists}
        </ul>
      </p>
    )
  }

  renderPersonalQualities() {
    const lists = data.personalQualities.map((qual, id) => {
      return(
        <li key={id} className="col-md-3 col-xs-12 text-center">
          <span className={qual.icon}></span>
          <h3 className="m-t-5 m-b-5">{qual.title}</h3>
          <p>{qual.description}</p>
        </li>
      )
    });
    return(
      <p>
        <ul className="list-inline row">
          {lists}
        </ul>
      </p>
    )
  }

  render() {
    const self = this;

    return(
      <bootstrap.Grid fluid={true}>
        <bootstrap.Row className="show-grid p-0">
          <bootstrap.Col className="p-0" xs={12} md={12} lg={12} style={{background: colors.lightBlue100}}>
            <div className="p-50">
              <h2>Resume</h2>
              <h4>Professional Facts</h4>
            </div>
          </bootstrap.Col>
        </bootstrap.Row>
        <div className="p-50">
          <div className="text-center m-b-30">
            <h1>Facts About Me</h1>
            <span>A bit of information about me</span>
          </div>
          {self.renderProfFacts()}
          <div className="text-center m-t-30 m-b-30">
            <h1>Work Qualities</h1>
            <span>My personal qualities towards work</span>
          </div>
          {self.renderPersonalQualities()}
          <div className="text-center m-t-30 m-b-30">
            <h1>Professional Timeline</h1>
            <span>My work experience</span>
          </div>
          <Timelime />
        </div>
      </bootstrap.Grid>
    )
  }

}