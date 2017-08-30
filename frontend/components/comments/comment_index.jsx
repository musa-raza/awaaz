import React from 'react';
import CommentForm from './comment_form';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
class CommentIndex extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.comments === null) {
      return null;
    }
    const CommentItems = this.props.comments.map((comment) => {
      return (
        <div key={comment.id} className="comment-authordiv">
          <div className="userdivs">
            <Link to={`/users/${comment.user_id}`}>
              <img src={comment.user_pic}/>
            </Link>
            <span className="userlinks">{comment.user_name}</span>
          </div>
          <li className="comment-items">{comment.body}</li>
          <div className="trash-div">
            <i className="fa fa-trash" aria-hidden="true" ></i>
          </div>
        </div>
        );
    });
    let date = this.props.song.created_at;
    return (
      <div>
        <CommentForm createComment={this.props.createComment} currentSong = {this.props.song} currentUser={this.props.currentUser} />
        <div className="comment-index">
          <div className= "songshow-commentphotodiv">
            <div className="comment-artistinfo">
              <img className="comment-albumart" src={this.props.song.image_url} />
              <span className="bold-heading">
                <p>Released by:</p>
              </span>
                <p className="comment-text">{this.props.song.user_name}</p>
              <span className="bold-heading">
                <p>Released date:</p>
              </span>
                <p className="comment-text"><Moment>{date}</Moment></p>
            </div>
            <div className="comment-uldiv">
              <ul className= "comment-ul"></ul>
              {CommentItems.reverse()}
          </div>
          </div>
        </div>
      </div>
  );
  }
}

export default CommentIndex;
