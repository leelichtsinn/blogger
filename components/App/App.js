console.log('App.js');

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Posts from '../Posts/Posts';
import Post from '../Post/Post';
import CreatePost from '../CreatePost/CreatePost';

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={Posts} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/posts/new" component={CreatePost} />
        </Route>
      </Router>
    )
  }
}
