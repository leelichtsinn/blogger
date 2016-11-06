import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Posts from '../Posts/Posts';

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={Posts} />
          <Route path="/posts/new" component={CreatePost} />
        </Route>
      </Router>
    )
  }
}
