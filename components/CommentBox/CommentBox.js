import React, { Component, PropTypes } from 'react';

class CommentBox extends Component {
  constructor(props){
    super(props); // Makes this a React Component
    this.state = {
      text: "", // initialize to an epmty string at app load
      addedPhoto: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleAddPhoto =  this.toggleAddPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  toggleAddPhoto(e) {
    // click hangler on the added photo button
    e.preventDefault();
    this.setState({
      addedPhoto: !this.state.addedPhoto
    });
  }

  onSubmit(e) {
    e.preventDefault();
    $.post(`/posts/${this.props.postId}/comments/new`, {
      text: this.state.text
    }, (response) => {
      // on success, get back the json
      console.log('Successfully added a comment!', response);
    });
  }

  render() {
    const addedPhotoLength = this.state.text.length - (this.state.addedPhoto ? 20 : 0);
    return (
      <form className="well clearfix"
        onSubmit={this.onSubmit}>
        <textarea
          className="form-control"
          onChange={this.handleChange}></textarea><br/>
        <span>
          {300 - addedPhotoLength} remaining characters
        </span>
        <button
          className="btn btn-primary pull-right"
          onClick={this.toggleAddPhoto}>
          {this.state.addedPhoto ? "Added Photo" : "Add Photo"}
        </button>
        <input
          type="submit"
          value="Comment"
          disabled={addedPhotoLength === 0 || addedPhotoLength > 300}
          className="btn btn-primary pull-right" />
      </form>
    );
  }
}

CommentBox.propTypes = {
  postId: PropTypes.string.isRequired
};

export default CommentBox;
