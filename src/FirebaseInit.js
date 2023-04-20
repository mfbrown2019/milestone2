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
import Home from "./home";

// function SignIn() {
// // const SignIn = ({ history }) => {
//     const [user, setUser] = useState({});
//     const [value, setvalue] = useState('')
//     const [isLoading, setIsLoading] = useState(true);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const navigate = useNavigate();
//     // const handleClick = useCallback(async e => {
//     const handleClick =()=> {
//         // e.preventDefault();
//         // const { auth, provider } = e.target.elements;
//         // setIsLoading(true);
//         try {
//             signInWithPopup(auth,provider);
//             // await app
//             //     .auth()
//             //     .signInWithPopup(auth,provider); //.then((data)=>{
//                 // // .signInWithPopup(auth,provider).then((data)=>{
//                 //     // e.preventDefault();
//                 //     console.log(data);
//                 //     setvalue(data.user.email)
//                 //     // localStorage.setItem("email", data.user.email)
//                 // }).finally(() => setIsLoading(false))
//             // history.push("/")
//             // navigate('/')
//         } catch (error) {
//             alert(error);
//         }
//     // }, [history]);
//     };
   

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
    const navigate = useNavigate();
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            // e.preventDefault();
            const user = data.user
            console.log(user);
            console.log("Google logged in as:", user.email);
            setvalue(data.user.email)
            localStorage.setItem("email", data.user.email)
            navigate("/");
        })
    };
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
    // const setUserName = () => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then(result => {

    //         })

    // };

    useEffect(()=>{ 
        setvalue(localStorage.getItem("email"))
    }, []);


return (
    <div>
        <h1>Login With Google</h1>
        <Button onClick={handleClick}>Sign In</Button>
        {/* {value?<Home />:
        <Button onClick={handleClick}>Sign In</Button>
        // <Button onClick={() => {handleLogin(); handleClick();}}>Sign In</Button>
        } */}
    </div>
);
};
// return (
//     <div>
//         {isLoggedIn ? (
//             <div>
//                 {/* <button onClick={() => {handleLogout(); logout();}}>Logout</button> */}
//                 <button onClick={logout}>Logout</button>
//             </div>
//         ) : (
//             <div>
//                 <h1>Login With Google</h1>
//                 {isLoggedIn?<App />:
//                 <Button onClick={handleClick}>Sign In</Button>
//                 // <Button onClick={() => {handleLogin(); handleClick();}}>Sign In</Button>
//                 // <div>
//                 //     <form>
//                 //         <label for="newemail">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                 //         <input onBlur={handleemail} type="email" id="newemail" size='50'/><br/><br/>
//                 //         <label for="pass">Password:&nbsp;</label>
//                 //         <input onBlur={handlepassword} type="text" id="password" name='password' size='50'/><br/><br/>
//                 //         <Button onClick={() => {handleLogin(); handleClick();}}>Sign In</Button>
//                 //     </form>
//                 // </div>}
//                 }
//             </div>
//         )}
//     </div>
// );
// };
export default SignIn;