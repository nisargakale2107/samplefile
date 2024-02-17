
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import '../css/profile.css';

const UserProfile = ({ parameter }) => {
  return (
    <>
      <div className="user-info-container">
        <div className="user-img ">
          {parameter.userimage}
        </div>
        <p className="user-name ">
          {parameter.username}
        </p>
        <button className="donate-btn">
          COLLECT FUND
        </button>
      </div>
    </>
  );
};

const Profile = ({onClose}) => {
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
      <div className="container-wrapper" onClick={onClose}>
        {" "}
      </div>
      <div className="profile-container bg-white grid grid-cols-2">

        <UserProfile parameter={userProfileData[2]} />
        <div className="songs-container grid col-span-1 bg-aliceblue overflow-auto h-96 justify-center items-center flex-wrap gap-8 flex-col">
          <div className="add-event-btn-div flex items-center justify-center w-full h-12">
            <CiCirclePlus
              className="add-event-btn h-8 w-8 text-black cursor-pointer"
              onClick={handleClick}
            />
          </div>
          {SongsData.slice(0, index + 1).map((item, idx) => (
            <div
              key={idx}
              className="songs-div bg-orange-400 self-center text-center h-10 w-80 rounded-md"
            >
              {item.songs}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;




