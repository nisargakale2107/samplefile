// import React, { useState } from "react";
// import "../css/navbar.css";
// import Profile from "../pages/Profile";

// const Navbar = () => {
//   const [showprofile , setshowprofile] = useState(false);

//   return (
//     <>
//       <nav className="nav-container ">
//         <div className="website-name">Website Name</div>
//         <div className="other">
//           <ul>
//             <li>
//               <a href="#home">Home</a>
//             </li>

//             <li>
//               <a href="#aboutus">About us</a>
//             </li>

//             <li>
//               <button>Become Artist</button>
//             </li>

//             <li>
//               <button
//                 onClick={() => {
//                   setshowprofile(true);
//                 }}
//               >
//                 Profile
//               </button>
//             </li>

//             <li>Conect Wallet</li>
//           </ul>
//         </div>

//         {showprofile && (
//           <Profile
//             onClose={() => {
//               setshowprofile(false);
//             }}
//           />
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Profile from "../pages/Profile";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center bg-yellow-400 h-16 px-4">
        <div className="text-xl font-bold">Website Name</div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
          <a href="#aboutus" className="text-gray-800 hover:text-gray-600">
            About us
          </a>
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
            Become Artist
          </button>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
          >
            Profile
          </button>
          <span className="text-gray-800">Connect Wallet</span>
        </div>
      </nav>
      {showProfile && <Profile />}
    </>
  );
};

export default Navbar;

