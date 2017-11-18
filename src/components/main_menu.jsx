import React from 'react';
import * as _ from 'lodash';
import {Link} from 'react-router-dom'

export default class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navLists: [
        { label: 'home', icon: 'fa fa-home', link: '/', isActive: true },
        { label: 'facts about me', icon: 'fa fa-user-circle-o', link: '/about', isActive: false },
        { label: 'recommendations', icon: 'fa fa-comments-o', link: '/', isActive: false },
        { label: 'contacts', icon: 'fa fa-address-book', link: '/contacts', isActive: false }
      ]
    }
  }

  handleActiveLink(_idx) {
    const self = this;
    const navLists = self.state.navLists;
    navLists.forEach((item, _idx) => {
      item.isActive = false;
    });
    const item = navLists[_idx];
    item.isActive = true;
    navLists.splice(_idx, 1, item);
    self.setState({
      navLists: navLists
    });
  }

  renderMenu() {
    const self = this;
    return self.state.navLists.map((item, _idx) => {
      return <li key={_idx} className={item.isActive ? 'active' : null}>
        <Link to={item.link} onClick={() => {self.handleActiveLink(_idx)}}><span className={item.icon}></span> {_.startCase(item.label)}</Link>
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
                  <a href="javascript:void(0)"><span className="fa fa-linkedin"></span></a>
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