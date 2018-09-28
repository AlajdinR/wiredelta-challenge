import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Volunteer from './containers/Volunteer/Volunteer';
import Contact from './containers/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Volunteer} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
