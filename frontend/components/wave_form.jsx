import React from 'react';
import Wavesurfer from 'react-wavesurfer';


class Waveform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
  render() {
    return (
      <div className="wavesurfer">
        <Wavesurfer
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
          audioFile={this.props.song}
          options={
            {
              barWidth: 2,
              height: 100
            }
          }
        />
      </div>
      );
  }
}

export default Wavesurfer;
