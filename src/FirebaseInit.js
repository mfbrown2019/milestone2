import React, {useEffect, useState, useCallback, useContext} from "react";
import {auth,provider} from "./FirebaseConfiguration"
import {signInWithPopup, updateProfile, signOut} from "firebase/auth"; 
import NewUser from "./newUser"
import { Button } from 'react-bootstrap';
import App from "./App";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "./Hooks/useAuth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import withRouter from "./WithRouter";
import { AuthContext } from "./AuthProvider";
import { getAuth } from "firebase/auth";
import app from "./FirebaseConfiguration";

function SignIn() {
    const [value, setvalue] = useState('') 
    const googleprovider = new GoogleAuthProvider();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [email, setemail] = useState('');
    const [name, setName] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const handleClick =(e)=>{
        setIsLoading(true);
        signInWithPopup(auth,provider).then((data)=>{
            e.preventDefault();
            console.log(data);
            setvalue(data.user.email)
            localStorage.setItem("email", data.user.email)
        }).finally(() => setIsLoading(false))
    };
    const handleName = e => {
        setName(e.target.value)
        console.log(name)
    };
    const handlepassword = e => {
        setpassword(e.target.value);
        console.log(password)
    }
    const handleemail = e => {
        setemail(e.target.value);
        console.log(email)

    }
    const handleLogin =()=> {
        setIsLoggedIn(true);
    };
    const handleLogout =()=> {
        setIsLoggedIn(false);
    };
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).finally(() => setIsLoading(false))
    };
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })

    };

    const loginProcess = () => {
        return signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     window.location.reload()
        //     console.log(user);
        //     setError('')
        // }).finally(() => setIsLoading(false))

    }
    // useEffect((value)=>{ 
    useEffect(()=>{ 
        // if (value){
        //     setIsLoading(false);
        // }
        setvalue(localStorage.getItem("email"))
    }, []);

return (
    <div>
        {isLoggedIn ? (
            <div>
                <button onClick={() => {handleLogout(); logout();}}>Logout</button>
            </div>
        ) : (
            <div>
                <h1>Login With Google</h1>
                {isLoggedIn?<App />:
                <Button onClick={() => {handleLogin(); handleClick();}}>Sign In</Button>
                // <div>
                //     <form>
                //         <label for="newemail">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                //         <input onBlur={handleemail} type="email" id="newemail" size='50'/><br/><br/>
                //         <label for="pass">Password:&nbsp;</label>
                //         <input onBlur={handlepassword} type="text" id="password" name='password' size='50'/><br/><br/>
                //         <Button onClick={() => {handleLogin(); handleClick();}}>Sign In</Button>
                //     </form>
                // </div>}
                }
            </div>
        )}
    </div>
);
};
export default SignIn;