import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Post extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // When component mounts should fetch data for all posts at /posts endpoint
    fetch(`/posts/${props.params.id}`)
    .then(function(res) {
      res.json({ posts: posts})
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>{post.title}</h1>
        </div>
        <div>
          {post.body}
        </div>
      </div>
    );
  }
}
