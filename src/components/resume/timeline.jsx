import React from 'react';
import * as bootstrap from 'react-bootstrap';
import * as data from '../../services/data/data';

export default class Timeline extends React.Component {


  renderTimeLineItem(data, isInverted = true, isEnd = false) {

    let endLine = <div className="line"></div>;
    if(isEnd) endLine = null;

    return(
      <li className={isInverted ? 'timeline-zigzag-inverted' : ''}>
        <div className="timeline-zigzag-image">
          <img className="img-circle img-responsive" src="http://lorempixel.com/250/250/cats/1" alt="" />
        </div>
        <div className="timeline-zigzag-panel">
          <div className="timeline-zigzag-heading">
            <h4>Step One</h4>
            <h4 className="subheading">Subtitle</h4>
          </div>
          <div className="timeline-zigzag-body">
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {endLine}
      </li>
    )
  }

  renderTimeLine() {
    const self = this;
    return data.Employment.map((emp) => {
      return self.renderTimeLineItem(emp)
    });
  }

  render() {
    const self = this;
    return(
      <div className="">
        <bootstrap.Row className="show-grid p-0">
          <div className="col-lg-12">
            <p className="text-center" dangerouslySetInnerHTML={{__html: data.professionalOverview}}></p>
            <ul className="timeline-zigzag">
              {self.renderTimeLineItem()}
            </ul>
          </div>
        </bootstrap.Row>
      </div>
    )
  }
  
}