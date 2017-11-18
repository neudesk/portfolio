import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App';
import Layout from '../components/layout';
import Home from '../components/home/home';
import About from '../components/about/about';
import Contacts from '../components/contacts/contacts';

export default class Routes extends React.Component {

  render () {
    return(
      <BrowserRouter>
        <App>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
            </Switch>
          </Layout>
        </App>
      </BrowserRouter>
    )
  }

}