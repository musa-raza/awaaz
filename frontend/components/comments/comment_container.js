import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { selectSongComments } from '../../reducers/selectors';
import { requestSingleSong } from '../../actions/song_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return({
    currentUser: state.session.currentUser,
    comments: selectSongComments(state, ownProps.song),
    comment_ids: ownProps.song.comment_ids,
    currentSong: ownProps.song
  });
};


const mapDispatchToProps = (dispatch) => {
  return{
    requestSingleSong: (song) => dispatch(requestSingleSong(song)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
