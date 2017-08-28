import React from 'react';

class SongShow extends React.Component {

constructor(props) {
  super(props);
}

componentDidMount() {
  this.props.requestSingleSong(this.props.math.params.id);
}

render() {
  if (this.props.song === null) {
    return null;
  }

  return(

  )
}

}

const mapStateToProps = (state, ownProps) => {
  let song;
  if (state.entities.songs.songs[ownProps.match.params.id]) {
    song = state.entities.songs.songs[ownProps.match.params.id]
  }
  else {
    song = null;
  }
  return({
    song,
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    requestSingleSong: (song) => (dispatch(requestSingleSong(user)))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongShow));
