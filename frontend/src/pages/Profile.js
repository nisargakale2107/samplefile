import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import "../css/profile.css";

const UserProfile = ({ parameter }) => {
  return (
    <>
      
      <div className="user-info-container">
        <div className="user-img">
          <img src={parameter.userimage} alt="user img" />
        </div>

        <p className="user-name">{parameter.username}</p>

        <button className="donate-btn"> COLLECT FUND </button>
      </div>
    </>
  );
};

const Profile = ( ) => {

  const userProfileData = [
    /*backend array*/
    {
      userimage: "user1.jpg",
      username: "Aastha",
    },
    {
      userimage: "user2.jpg",
      username: "Aadya",
    },
    {
      userimage: "user2.jpg",
      username: "Aarsh",
    },

  ];
  
  const SongsData = [
    {  songs: "Song 1" },
    {  songs: "Song 2" },
    {  songs: "Song 3" },
    {  songs: "Song 4" },
    {  songs: "Song 5" },
    {  songs: "Song 6" },
    {  songs: "Song 7" },
    {  songs: "Song 8" },
    {  songs: "Song 9" },
    {  songs: "Song 10" },
  ];

  const [index, setIndex] = useState(3);

  const handleClick = () => {
    if (index < SongsData.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div className="container-wrapper"></div>
      <div className="profile-container" style={{ background: "white" }}>
        <UserProfile parameter={userProfileData[2]} />

        <div className="songs-container">
          <div className="add-event-btn-div">
            <CiCirclePlus className="add-event-btn" onClick={handleClick} />
          </div>
          {SongsData.slice(0, index + 1).map((item) => (
            // <div className="profile-div-map">
            <div className="songs-div">{item.songs}</div>
            // </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Profile;

