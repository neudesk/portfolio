import React from 'react';
import * as colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

export default class Home extends React.Component {

  render() {
    return(
      <div style={{background: colors.lightGreen100}}>
        <p className="overview">
          Hello everyone, my name is Jonathan Senence Canaveral. I am from the Philippines.<br />
          I am an experienced software engineer specialize in web based related products. I started coding since 2008.<br />
          During these years, I worked with awesome teams and projects. Please check my <a href="javascript:void(0)">portfolio</a> for my past and current projects.<br />
          I am a team player and a problem solver.<br />
          If you find me interesting to your project, please feel free to contact me <a href="javascript:void(0)">here</a>.
          <span className="block text-center m-t-20">
            <span className="m-r-10">
              <FlatButton
                label="Download CV"
                backgroundColor={colors.lightBlue200}
                hoverColor={colors.lightBlue400}
                icon={<span className="fa fa-cloud-download "></span>}
                style={{color: '#5d5d5d'}}
              />
            </span>
            <span className="m-r-10">
              <FlatButton
                label="Contact me"
                className="m-r-10"
                backgroundColor={colors.orangeA100}
                hoverColor={colors.deepOrange200}
                icon={<span className="fa fa-address-card"></span>}
                style={{color: '#5d5d5d'}}
              />
            </span>
          </span>
        </p>
      </div>
    )
  }

}