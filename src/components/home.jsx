import React from 'react';
import * as colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import * as data from '../services/data/data';
import * as bootstrap from 'react-bootstrap';
import Timeline from './home/timeline';

export default class Home extends React.Component {

  render() {
    return(
      <bootstrap.Grid fluid={true}>
        <bootstrap.Row className="show-grid p-0">
          <bootstrap.Col className="p-0" xs={12} md={12} lg={12} style={{background: colors.lightGreen100}}>
            <p className="p-50">
              <span dangerouslySetInnerHTML={{__html: data.Overview}}></span>
            </p>
          </bootstrap.Col>
        </bootstrap.Row>
        <bootstrap.Row className="show-grid p-0">
          <bootstrap.Col className="p-0 p-20" xs={12} md={4} lg={4} style={{background: colors.blueA100}}>
            <Timeline />
          </bootstrap.Col>
          <bootstrap.Col className="p-0" xs={12} md={8} lg={8}>
            <div className="p-50">
              <span className="block text-center">
              <span className="m-r-10">
                <FlatButton
                  label="Download CV"
                  backgroundColor={colors.lightBlue200}
                  hoverColor={colors.lightBlue400}
                  icon={<span className="fa fa-cloud-download "></span>}
                  style={{color: '#FFF'}}
                />
              </span>
              <span className="m-r-10">
                <FlatButton
                  label="Contact me"
                  className="m-r-10"
                  backgroundColor={colors.red300}
                  hoverColor={colors.red600}
                  icon={<span className="fa fa-address-card"></span>}
                  style={{color: '#FAFAFA'}}
                />
              </span>
            </span>
            </div>
          </bootstrap.Col>
        </bootstrap.Row>
      </bootstrap.Grid>
    )
  }

}