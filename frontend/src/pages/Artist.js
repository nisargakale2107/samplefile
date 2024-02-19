import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/artist.css";
import { ArtistContext } from "../context/artContext";

const UserProfile = ({ artist }) => {
  return (
    <div className=" h-96 user-info-container grid justify-center items-center">
      <img
        className="h-64 w-64 object-cover rounded-full mx-auto mt-8" // Adjusted margin top
        src={artist.image}
        alt={artist.name}
      />
      <div className="px-6 py-2 mt-3">
        <div className="font-bold text-xl mb-1 text-white text-center">
          {artist.name}
        </div>
        <button className="bg-pink-300 hover:bg-pink-400 ml-8 mt-2 text-black text-center font-bold py-3 px-10 justify-items-center rounded-full">
          Donate
        </button>
      </div>
    </div>
  );
};

const Artist = () => {
  const { selectedArtist } = useContext(ArtistContext);

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

  const [index, setIndex] = useState(3);

  const handleClick = () => {
    if (index < SongsData.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-wrapper"></div>
      <div className="profile-container grid grid-cols-2">
        {selectedArtist ? (
          <UserProfile artist={selectedArtist} />
        ) : (
          <div className="grid justify-self-center justify-items-center text-align-center text-white text-3xl col-span-2 mt-20">
            No artist selected
          </div>
        )}

        {selectedArtist ? (
          <div className="songs-container col-span-1 bg-aliceblue dark:bg-gray-900 overflow-auto h-96 flex flex-col justify-center items-center gap-8">
            <div className="add-event-btn-div flex items-center justify-center w-full h-12">
              {/* <CiCirclePlus className="add-event-btn h-8 w-8 text-black dark:text-white cursor-pointer" /> */}
            </div>
            {SongsData.slice(0, index + 1).map((item, idx) => (
              <div className="song-container" key={idx}>
                <div className="song-info flex justify-between items-center w-96">
                  {" "}
                  {/* Adjusted width here */}
                  <div className="songs-div bg-black dark:bg-black self-center text-white text-center h-10 w-80 rounded-md">
                    {item.songs}
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Artist;
