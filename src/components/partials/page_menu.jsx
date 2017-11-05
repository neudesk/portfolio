import React from 'react';
import { Link } from 'react-router-dom'

export default class PageMenu extends React.Component {

  render() {
    return(
      <ul className="list-inline">
        <li className="text-center home">
          <Link to="/">
            <span className="fa fa-home"></span><br />Home
          </Link>
        </li>
        <li className="text-center resume">
          <Link to="/resume">
            <span className="fa fa-user-circle"></span><br />Resume
          </Link>
        </li>
        <li className="text-center portfolio">
          <a href="javascript:void(0)"><span className="fa fa-briefcase"></span><br />Portfolio</a>
        </li>
        <li className="text-center recommendations">
          <a href="javascript:void(0)"><span className="fa fa-comments"></span><br />Recommendations</a>
        </li>
        <li className="text-center contacts">
          <a href="javascript:void(0)"><span className="fa fa-address-card"></span><br />Contacts</a>
        </li>
      </ul>
    )
  }

}