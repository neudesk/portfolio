import React from 'react';
import * as bootstrap from 'react-bootstrap';
import * as data from '../../services/data/data';
import * as colors from 'material-ui/styles/colors';
import moment from 'moment'

export default class Timeline extends React.Component {


  renderTimeLineItem(data) {
    const endDate = data.endDate == 'present' ? new Date() : new Date(data.endDate);
    const startTime = moment(new Date(data.startDate));
    const endTime = moment(endDate);
    const duration = moment.duration(endTime.diff(startTime));
    const years = duration.years();
    const months = duration.months();

    return(
      <div key={`${data.company}_${data.position}`} className="m-t-25">
        <bootstrap.Row className="show-grid p-0">
          <bootstrap.Col className="p-0" xs={4} md={3} lg={3}>
            <div className="text-center calenderBox">
              <h1>{years ? `${years}.` : ''}{months}</h1>
              <h4>{years ? 'years' : 'months'}</h4>
            </div>
          </bootstrap.Col>
          <bootstrap.Col className="p-0" xs={8} md={5} lg={5}>
            <h1>{data.company}</h1>
            <h3>{data.position}</h3>
            <div>
              <span className="fa fa-clock-o"></span> {data.startDate} - {data.endDate}
            </div>
          </bootstrap.Col>
          <bootstrap.Col className="p-0" xsHidden md={4} lg={4}>
             <img src={data.banner} style={{width: '150px', height: 'auto'}} />
          </bootstrap.Col>
        </bootstrap.Row>
        <bootstrap.Row className="show-grid p-0 m-t-10">
          <bootstrap.Col className="p-0" xs={8} xsOffset={4} md={9} mdOffset={3} lg={9} lgOffset={3}>
            <bootstrap.Col className="p-0 m-b-10" mdHidden lgHidden xs={12}>
              <img src={data.banner} style={{width: '100%', height: 'auto'}} />
            </bootstrap.Col>
            <p dangerouslySetInnerHTML={{__html: data.body}}></p>
          </bootstrap.Col>
        </bootstrap.Row>
      </div>
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
            {self.renderTimeLine()}
          </div>
        </bootstrap.Row>
      </div>
    )
  }
  
}