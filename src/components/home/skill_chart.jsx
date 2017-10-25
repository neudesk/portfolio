import React from 'react';
import * as bootstrap from 'react-bootstrap';
import * as $ from 'jquery';
import 'jquery-circle-progress';

export default class SkillChart extends React.Component {

  componentDidMount() {
    const self = this;
    const data = self.props.data;
    setTimeout(() => {
      $(`#${data.name}`).circleProgress({
        value: data.value,
        size: 200,
        fill: {
          color: data.color
        }
      });
    })
  }

  render() {
    const self = this;
    const data = self.props.data;
    return (
      <bootstrap.Grid fluid={true}>
        <bootstrap.Row className="show-grid p-0">
          <bootstrap.Col className="p-0" xs={6} md={3} lg={3}>
            <div className="circle-progress text-center">
              <div id={data.name}></div>
              <span>{data.label}</span>
            </div>
          </bootstrap.Col>
        </bootstrap.Row>
      </bootstrap.Grid>
    )
  }

}