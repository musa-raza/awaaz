import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBody(e) {
    this.setState({ body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state, { song_id: this.props.currentSong.id });
    this.props.createComment(newState);
    this.setState({ body: '' });
  }

  render() {
    return(
      <div className="comment-parent">
        <div className="commentimg-div">
          <img className="commentimg" src={this.props.currentUser.avatar_url} />
        </div>
          <input type="text" value={this.state.body} onChange={this.handleBody}
          className="comment-input"
          placeholder="Write a comment"
           />
         <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
      </div>
    );
  }

}

export default withRouter(CommentForm);
