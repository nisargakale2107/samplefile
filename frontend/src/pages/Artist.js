import React, { Component } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArtistContext } from "../context/artContext";
import song from "../components/so.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

// Define SongsData array here
const SongsData = [
  { songs: "Song 1" },
  { songs: "Song 2" },
  { songs: "Song 3" },
  { songs: "Song 4" },
  { songs: "Song 5" },
  { songs: "Song 6" },
  { songs: "Song 7" },
  { songs: "Song 8" },
  { songs: "Song 9" },
  { songs: "Song 10" },
];

class UserProfile extends Component {
  render() {
    const { artist } = this.props;
    return (
      <div className="user-info-container grid justify-center items-center">
        <img
          className="h-64 w-64 object-cover rounded-full mx-auto mt-8"
          src={artist.image}
          alt={artist.name}
        />
        <div className="px-6 py-2 bg-black bg-opacity-50 mt-1">
          <div className="font-bold text-xl mb-1 text-white">
            {artist.name}
          </div>
          <button className="donate-btn bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
            Donate Fund
          </button>
        </div>
      </div>
    );
  }
}

class Artist extends Component {
  static contextType = ArtistContext;

  constructor(props) {
    super(props);
    this.state = {
      index: 3,
      isPlaying: false
    };
    this.audio = new Audio(song);
  }

  handleClick = () => {
    const { index } = this.state;
    if (index < SongsData.length - 1) {
      this.setState({ index: index + 1 });
    }
  };

  playPause = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    const { selectedArtist } = this.context;
    const { index, isPlaying } = this.state;

    return (
      <>
        <Navbar />
        <div className="container-wrapper"></div>
        <div className="profile-container grid grid-cols-2">
          {selectedArtist ? (
            <UserProfile artist={selectedArtist} />
          ) : (
            <p>No artist selected</p>
          )}
          <div className="songs-container col-span-1 bg-aliceblue dark:bg-gray-900 overflow-auto h-96 flex flex-col justify-center items-center gap-8">
            <div className="add-event-btn-div flex items-center justify-center w-full h-12">
              <CiCirclePlus
                className="add-event-btn h-8 w-8 text-black dark:text-white cursor-pointer"
                onClick={this.handleClick}
              />
            </div>
            {SongsData.slice(0, index + 1).map((item, idx) => (
              <div className="song-container" key={idx}>
                <div className="song-info flex justify-between items-center w-96">
                  <button className="play-now-btn" onClick={this.playPause}>
                    {isPlaying ? (
                      <FontAwesomeIcon icon={faPause} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} />
                    )}
                  </button>
                  <div className="songs-div bg-black dark:bg-black self-center text-white text-center h-10 w-80 rounded-md">
                    {item.songs}
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Artist;
