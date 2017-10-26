import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import * as colors from 'material-ui/styles/colors';

export default class CvDownloadBtn extends React.Component {

  render() {
    return (
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
    )
  }

}