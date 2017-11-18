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
      <bootstrap.Col xs={6} md={2} lg={2}>
        <div className="circle-progress text-center">
          <div id={data.name} className="programming-logos"></div>
          <span dangerouslySetInnerHTML={{__html: data.label}}></span>
        </div>
      </bootstrap.Col>
    )
  }

}