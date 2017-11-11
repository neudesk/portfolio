import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App';
import Layout from '../components/layout';
import Home from '../components/home/home';

export default class Routes extends React.Component {

  render () {
    return(
      <BrowserRouter>
        <App>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </App>
      </BrowserRouter>
    )
  }

}