// playsong.js
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    audio: new Audio(this.props.song),
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  };

  componentDidMount() {
    const { audio } = this.state;
    audio.addEventListener("timeupdate", this.updateTime);
    audio.addEventListener("loadedmetadata", this.updateDuration);
  }

  componentWillUnmount() {
    const { audio } = this.state;
    audio.removeEventListener("timeupdate", this.updateTime);
    audio.removeEventListener("loadedmetadata", this.updateDuration);
  }

  updateTime = () => {
    const { audio } = this.state;
    this.setState({ currentTime: audio.currentTime });
  };

  updateDuration = () => {
    const { audio } = this.state;
    this.setState({ duration: audio.duration });
  };

  playPause = () => {
    const { audio, isPlaying } = this.state;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    this.setState({ isPlaying: !isPlaying });
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  handleSeek = (e) => {
    const { audio } = this.state;
    const seekTime = e.target.value;
    audio.currentTime = seekTime;
    this.setState({ currentTime: seekTime });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div>
          <span style={{ marginRight: "10px" }}>
            {this.formatTime(this.state.currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={this.state.duration}
            value={this.state.currentTime}
            onChange={this.handleSeek}
            style={{ width: "200px", marginRight: "10px" }}
          />
          <span>{this.formatTime(this.state.duration)}</span>
        </div>
        <button onClick={this.playPause} style={{ marginTop: "10px" }}>
          {this.state.isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      </div>
    );
  }
}

export default App;
