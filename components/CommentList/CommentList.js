import React, { Component, PropTypes } from 'react';
import Comment from '../Comment/Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comments = this.props.comments
      .map((comment, index) => <Comment key={index} content={comment.content} />);
    return (
      <div className="CommentList">{comments}</div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
