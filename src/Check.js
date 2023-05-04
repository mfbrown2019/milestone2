import React, { useState} from "react";
import {auth} from "./FirebaseConfiguration"

// const Check =()=> {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//     const handleLogin = () => {
//       setIsLoggedIn(true);
//     };
  
//     const handleLogout = () => {
//       setIsLoggedIn(false);
//     };
  
//     return (
//       <div>
//         {isLoggedIn ? (
//           <div>
//             <h1>Welcome Back!</h1>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         ) : (
//           <div>
//             <h1>Please Login</h1>
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         )}
//       </div>
//     );
//   };
//   export default Check;

import { useContext } from "react";
import AuthContext from "./Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Profile = () => {
// function Profile() {
  const { user } = useContext(AuthContext);
  console.log("Profile:", user)
  const [setUser] = useState('');
  // const navigate = useNavigate();
  const handleLogout = async () => {
      signOut(auth).then(() => {
        setUser({})
    })
  }
  
  if (!user) {
      return <Navigate replace to="/newUser" />;
  }
  return (
      <div>
          <h1>Profile</h1>
          <button onClick={handleLogout}>Logout</button>
      </div>
  );
};
export default Profile;