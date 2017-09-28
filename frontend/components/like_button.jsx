import React from 'react';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../actions/like_actions';

class LikeButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleUnLike = this.handleUnLike.bind(this);
  }


  handleLike(e) {
    e.preventDefault();
    this.setState({liked: true});
    this.props.createLike({song_id: this.props.song.id});
  }

  handleUnLike(e) {
    e.preventDefault();
    this.setState({liked: false});
    this.props.deleteLike(this.props.song.id);
  }

  render() {
    let likeButton;

    if (this.props.song != undefined && this.props.song.like_ids.includes(this.props.currentUser.id)) {
      likeButton = <div className="unlike-div" onClick={this.handleUnLike}>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <span className="unlikecount">{this.props.likes.length}</span>
        </div>;
    } else {
      likeButton = <div className="like-div" onClick={this.handleLike}>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <span className="likecount">{this.props.likes.length}</span>
        </div>;
    }
    return(likeButton);
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
  });
};

export default connect(null, mapDispatchToProps)(LikeButton);
