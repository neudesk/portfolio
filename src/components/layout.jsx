import React from 'react';
import * as bootstrap from 'react-bootstrap';
import CenterView from './utils/center_view';
import * as data from '../services/data/data';
import FlatButton from 'material-ui/FlatButton';
import * as Typed from 'typed.js';
import PageMenu from './partials/page_menu';

export default class Layout extends React.Component {

  renderTitles() {
    new Typed('.titles', {
      strings: data.JobTitles,
      typeSpeed: 50,
      loop: true
    });
  }

  componentDidMount() {
    this.renderTitles();
  }

  render() {
    const basicInfo = data.BasicInfo;
    return(
      <div className="container">
        <div>
          <bootstrap.Grid fluid={true}>
            <bootstrap.Row className="show-grid m-t-20">
              <bootstrap.Col className="p-0" xs={12} md={3} lg={3}>
                <div id="mainPhoto"></div>
              </bootstrap.Col>
              <bootstrap.Col xs={12} md={9} lg={9}>
                <bootstrap.Row id="cvName">
                  <bootstrap.Col xs={8} md={10}>
                    <h1><div className="pull-left m-r-15">{basicInfo.firstName}</div> <div className="visible-md-block visible-lg-block">{basicInfo.lastName}</div></h1>
                  </bootstrap.Col>
                  <bootstrap.Col className="p-0" id="cvDownload" xs={4} md={2}>
                    <FlatButton
                      className="cvDownload"
                      backgroundColor="#474747"
                      hoverColor="#595959"
                      icon={<span className="fa fa-cloud-download "></span>}
                    />
                  </bootstrap.Col>
                </bootstrap.Row>
                <bootstrap.Row id="cvTitle">
                  <bootstrap.Col xs={12} md={12} lg={12}>
                    <h4>Experienced <span className="titles"></span></h4>
                  </bootstrap.Col>
                </bootstrap.Row>
                <bootstrap.Row id="cvMenu">
                  <bootstrap.Col className="p-0" xs={12} md={12} lg={12}>
                    <PageMenu />
                  </bootstrap.Col>
                </bootstrap.Row>
              </bootstrap.Col>
            </bootstrap.Row>
            <bootstrap.Row>
              <bootstrap.Col className="p-0 whiteBg" xs={12} md={12} lg={12}>
                {this.props.children && React.cloneElement(this.props.children, {app: this.props})}
              </bootstrap.Col>
            </bootstrap.Row>
          </bootstrap.Grid>
        </div>
        <div id="footer" className="grayBg">
          <bootstrap.Row className="show-grid">
            <bootstrap.Col className="p-0" xs={12} md={2} lg={2}>
              <p className="copyRight">© Jonathan Canaveral</p>
            </bootstrap.Col>
            <bootstrap.Col className="p-0" xs={12} md={3} lg={3}>
              <h4>Download CV</h4>
              <FlatButton
                className="sm-btn"
                label="English"
                backgroundColor="#BDBDBD"
                hoverColor="#0091EA"
                icon={<span className="fa fa-cloud-download"></span>}
              />
              <p><small>The CV is in .pdf format. Use the Adobe Reader to open it.</small></p>
            </bootstrap.Col>
            <bootstrap.Col className="p-0" xs={12} md={7} lg={7}>
              <h4>Follow Me</h4>
            </bootstrap.Col>
          </bootstrap.Row>
        </div>
      </div>
    )
  }

}