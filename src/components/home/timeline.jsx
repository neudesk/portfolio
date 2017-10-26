import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import * as data from '../../services/data/data';

export default class Timeline extends React.Component {

  renderTimelineContent() {
    return data.Employment.slice(0, 2).map((emp, id) => {
      return(
        <article key={id} className="panel panel-outline">
          <img className="panel-heading icon" src={emp.icon} width={40} height={40} alt={emp.company} />
          <div className="panel-body p-0">
            <time>{emp.startDate}</time> - <time>{emp.endDate}</time>
            <h3>{emp.company}</h3>
            <h4>{emp.position}</h4>
          </div>
        </article>
      )
    });
  }

  render() {
    const self = this;
    return(
      <div>
        <h2 className="m-b-20" style={{color: '#FFF'}}>Employment</h2>
        <div className="timeline">
          <div className="line text-muted"></div>
          {self.renderTimelineContent()}
        </div>
        <div className="text-center">
          <FlatButton
            className="sm-btn"
            label="Learn more"
            backgroundColor="#2962FF"
            hoverColor="#448AFF"
            style={{color: '#FFF'}}
          />
        </div>
      </div>
    )
  }
}