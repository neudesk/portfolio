import React from 'react';
import * as _ from 'lodash';

export default class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navLists: [
        { label: 'home', icon: 'fa fa-home', link: '/', isActive: true },
        { label: 'facts about me', icon: 'fa fa-user-circle-o', link: '/', isActive: false },
        { label: 'recommendations', icon: 'fa fa-comments-o', link: '/', isActive: false },
        { label: 'contacts', icon: 'fa fa-address-book', link: '/', isActive: false }
      ]
    }
  }
  
  renderMenu() {
    const self = this;
    return self.state.navLists.map((item, _idx) => {
      return <li className={item.isActive ? 'active' : null}>
        <a href={item.link}><span className={item.icon}></span> {_.startCase(item.label)}</a>
      </li>
    });
  }

  render() {
    const self = this;
    return(
      <div id="mainMenu">
        <div className="container p-0">
          <div className="row">
            <div className="col-md-8">
              <ul className="list-inline p-0 m-0">
                {self.renderMenu()}
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="socialIcons list-inline p-0 m-0 pull-right">
                <li style={{paddingRight: '30px'}}>Follow me on:</li>
                <li>
                  <a href="javascript:void(0)"><span className="fa fa-facebook"></span></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><span className="fa fa-github"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

}