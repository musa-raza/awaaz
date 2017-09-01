import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSong } from '../actions/song_actions';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      description: "",
      imageFile: null,
      imageUrl: null,
      songFile: null,
      songUrl: null
    };
    this.updateSong = this.updateSong.bind(this);
    this.updateSongArt = this.updateSongArt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return ((e) => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  updateSong(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    const orig = this;
    fileReader.onloadend = () => {
      orig.setState({ songFile: file, songUrl: file.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("song[image]", this.state.imageFile);
    }
    formData.append("song[title]", this.state.title);
    formData.append("song[genre]", this.state.genre);
    formData.append("song[description]", this.state.description);
    formData.append("song[audio]", this.state.songFile);
    this.props.createSong(formData)
    .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <div className="upload-parentdiv">
        <div className="uploadform-div">
          <div className="border-div">
            <div className="upload-headingdiv">
              <h2>Upload a track to Awaaz</h2>
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
              <label className="form-field">Genre</label>
              <input type="text"
                value={this.state.genre}
                onChange={this.update('genre')}
                className="title-input" />
              <label className="form-field">Description</label>
              <textarea type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="title-input" />
              <div className="fake-buttondiv">
                <label htmlFor="fileupload" className="form-field">Track
                  <input id="fileupload" className="track-upload" type="file" onChange={this.updateSong} />
                <span className="real-uploadbutton"> Upload File
                </span>
                </label>
              </div>
            </div>
            </div>
            <div className="upload-button">
              <button className="u-button" onClick={this.handleSubmit}>Upload Song!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSong: (song) => dispatch(createSong(song))
  };
};
//
//
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadForm));
