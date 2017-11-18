import React from 'react';
import * as $ from 'jquery';
import 'jquery-match-height';
import Header from './header';
import Footer from './footer';
import RightColumn from './right_column';
import MainMenu from './main_menu';

window.jQuery = $;

export default class Layout extends React.Component {

  render() {
    const self = this;
    return(
      <div>
        <Header />
        <MainMenu />
        <div id="cvBody">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-xs-12 p-0" data-mh="mainLayoutColums">
                <div className="p-20" style={{marginTop: '48px'}}>
                  {this.props.children && React.cloneElement(this.props.children, {app: this.props})}
                </div>
              </div>
              <RightColumn />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}