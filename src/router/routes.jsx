import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App';
import Layout from '../components/layout';
import Home from '../components/home';

export default class Routes extends React.Component {

  render () {
    return(
      <BrowserRouter>
        <App>
          <Layout>
            <Route path="/" component={Home} />
          </Layout>
        </App>
      </BrowserRouter>
    )
  }

}