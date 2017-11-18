import React from 'react';
import * as data from '../../services/data/data';
import ProfessionalTimeline from './professional_timeline';
import SkillChart from './skill_chart';

export default class Home extends React.Component {

  renderSkillGraphs() {
    return data.skillData.map((skill, id) => {
      return(
        <SkillChart key={id} data={skill} />
      )
    });
  }

  render() {
    const self = this;
    return(
      <div>
        <div className="m-b-30 m-t-30">
          {self.renderSkillGraphs()}
        </div>
        <div className="clearfix"></div>
        <div className="m-b-30 m-t-30">
          <h1 className="text-center">Professional Timeline</h1>
        </div>
        <div className="m-b-30 m-t-30">
          <ProfessionalTimeline />
        </div>
      </div>
    )
  }
}