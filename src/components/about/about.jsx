import React from 'react';
import * as data from '../../services/data/data';
import * as bootstrap from 'react-bootstrap';
import * as _ from 'lodash';

export default class Resume extends React.Component {

  renderProfFacts() {

    const lists = data.professionalFacts.map((fact, id) => {
      return(
        <li key={id} className="col-md-6 col-xs-12">
          <bootstrap.Row className="show-grid">
            <bootstrap.Col className="" xs={5} md={4} lg={4}>
              <strong>{_.capitalize(fact.label)}</strong>
            </bootstrap.Col>
            <bootstrap.Col className="" xs={7} md={8} lg={8}>
              <p>{fact.value}</p>
            </bootstrap.Col>
          </bootstrap.Row>
        </li>
      )
    });

    return(
      <ul className="list-inline row">
        {lists}
      </ul>
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
      <ul className="list-inline row">
        {lists}
      </ul>
    )
  }

  render() {
    const self = this;

    return(
      <div>
        <div className="text-center m-t-30 m-b-30">
          <h1>Facts About Me</h1>
          <span>A bit of information about me</span>
        </div>
        <div className="m-t-30 m-b-30">
          {self.renderProfFacts()}
        </div>
        <div className="text-center m-t-30 m-b-30">
          <h1>Work Qualities</h1>
          <span>My personal qualities towards work</span>
        </div>
        <div className="text-center m-t-30 m-b-30">
          {self.renderPersonalQualities()}
        </div>
      </div>
    )
  }

}