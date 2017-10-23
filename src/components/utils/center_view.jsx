import React from 'react';
import * as bootstrap from 'react-bootstrap';

export default class CenterView extends React.Component {

  render() {
    return(
      <bootstrap.Grid fluid={true}>
        <bootstrap.Row className="show-grid">
          <bootstrap.Col mdOffset={2} lgOffset={2} md={8}>
            {this.props.children}
          </bootstrap.Col>
        </bootstrap.Row>
      </bootstrap.Grid>
    )
  }

}