import React from 'react';
import * as colors from 'material-ui/styles/colors';
import * as data from '../../services/data/data';
import * as bootstrap from 'react-bootstrap';
import Timeline from './timeline';
import SkillChart from './skill_chart';
import CvDownloadBtn from './cv_download_btn';

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
      <bootstrap.Grid fluid={true}>
        <bootstrap.Row className="show-grid p-0">
          <bootstrap.Col className="p-0" xs={12} md={12} lg={12} style={{background: colors.lightGreen100}}>
            <p className="p-50">
              <h2 className="m-b-20">Overview</h2>
              <span dangerouslySetInnerHTML={{__html: data.Overview}}></span>
            </p>
          </bootstrap.Col>
        </bootstrap.Row>
        <bootstrap.Row className="show-grid p-0">
          <bootstrap.Col className="p-0 p-20" xs={12} md={3} lg={3} style={{background: colors.blueA100}}>
            <Timeline />
          </bootstrap.Col>
          <bootstrap.Col className="p-0" xs={12} md={9} lg={9}>
            <div className="p-20">
              <h2 className="m-b-20">Professional Skills</h2>
              <bootstrap.Grid fluid={true}>
                <bootstrap.Col className="p-0" xs={0} md={1} lg={1}>
                </bootstrap.Col>
                <bootstrap.Row id="skill-graph" className="show-grid p-0">
                  {self.renderSkillGraphs()}
                </bootstrap.Row>
                <bootstrap.Col className="p-0" xs={0} md={1} lg={1}>
                </bootstrap.Col>
              </bootstrap.Grid>
            </div>
            <div className="m-t-30 m-b-30">
              <CvDownloadBtn />
            </div>
          </bootstrap.Col>
        </bootstrap.Row>
      </bootstrap.Grid>
    )
  }

}