import React from 'react';
import { editSong, requestSingleSong, requestAllSongs } from '../actions/song_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SongEditForm extends React.Component {

  constructor(props) {
    window.scrollTo(0, 0);
    super(props);
    this.state = {
      title: this.props.song.title,
      description: this.props.song.description,
      imageFile: null,
      imageUrl: null
    };
    this.updateSongArt = this.updateSongArt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return ((e) => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  updateSongArt(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    const orig = this;
    fileReader.onloadend = () => {
      orig.setState({ imageFile: file, imageUrl: file.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  componentWillMount() {
    this.props.requestAllSongs();
  }

  componentDidMount() {
    //this.state.title is not null
    this.props.requestSingleSong(this.props.match.params.songId).then( () => (this.setState({
      title: this.props.song.title,
      description: this.props.song.description,
      imageFile: null,
      imageUrl: this.props.song.image_url,
    })));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.song === null || this.props.song.id !== nextProps.match.params.songId) {
      this.setState({
        title: nextProps.song.title,
        description: nextProps.song.description
      });
    }
  }

//if this.props.song is null and next
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("song[image]", this.state.imageFile);
    }
    formData.append("song[title]", this.state.title);
    formData.append("song[description]", this.state.description);
    this.props.editSong(formData, this.props.song.id)
    .then(() => this.props.history.push('/stream'));
  }

  render() {
  if (this.props.song === null) {
    return null;
  }
  return(
    <div className="upload-parentdiv">
      <div className="uploadform-div">
        <div className="border-div">
          <div className="upload-headingdiv">
            <h2>Edit a track on Awaaz</h2>
          </div>
          <div className="uploadform-parent">
            <div className="upload-img-div">
              <label htmlFor="albumart-upload">
                <input id="albumart-upload" type="file" onChange={this.updateSongArt} />
                <img className="upload-art" src="https://s3.us-east-2.amazonaws.com/awaaz-dev/default-audio-art.png "/>
                <div className="text-div">
                  <span className="upload-text">
                    Click on image to upload song art!
                  </span>
                </div>
              </label>
            </div>
            <div className="form-input">
            <label className="form-field">Title</label>
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="title-input" />
            <label className="form-field">Description</label>
            <textarea type="text"
              value={this.state.description}
              onChange={this.update('description')}
              className="title-input" />
          </div>
          </div>
          <div className="upload-button">
            <button className="u-button" onClick={this.handleSubmit}>Edit Song!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
}


const mapStateToProps = (state, ownProps) => {
  let song;
  if (state.entities.songs[ownProps.match.params.songId]) {
    song = state.entities.songs[ownProps.match.params.songId];
  }
  else {
    song = null;
  }
  return({
    song,
  });
};

const mapDispatchToProps = (dispatch) => {
return {
  editSong: (song, id) => dispatch(editSong(song, id)),
  requestSingleSong: (song) => dispatch(requestSingleSong(song)),
  requestAllSongs: () => dispatch(requestAllSongs)
};
};
//
//
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongEditForm));
