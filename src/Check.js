import React, {useEffect, useState} from "react";
import {auth,provider} from "./FirebaseConfiguration"
import {signInWithPopup} from "firebase/auth"; 
import NewUser from "./newUser"
import { Button } from 'react-bootstrap';
import App from "./App";

const Check =()=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h1>Welcome Back!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  };
  export default Check;